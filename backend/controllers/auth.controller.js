import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
import {setCookieAndToken} from "../lib/utils/generateTokenSetCookie.js"
export const signup = async (req, res) => {
  try {
    const {firstname, lastname, email, password, confirmpassword} = req.body;
    // step 1 checking is Email is provided by correct or not
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
       return  res.status(400).json({error: "Invalid Email Passed by You"})
    } 

    // // 2. checking is username is already exist is db 
    // const isUserExist = await User.findOne({firstname});
    // if(isUserExist) {
    //   return res.status(400).json({error: "User already Exist"});
    //   }

   // 3. is email is present in db 
   const isEmailExist = await User.findOne({email});
   
   if(isEmailExist) {
    return res.status(400).json({error: "Email already Exist"});
   }

   // password should be greater than 6 character  
   if(password.length < 6) {
    return res.status(400).json({error: "Password length should be greaterthan 6 character"});
   }

   // check if password is match 

   if(password !== confirmpassword) {
     return res.status(400).json({error: "Password not Match!"})
   }

   // hasing the password

   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(password, salt);

   // after all check create a newUser 

   const newUser = new User({
       firstname, 
       lastname, 
       email, 
       password: hashPassword,
      
   })
   
    // Step 7: Save the user to the database
    await newUser.save(); // Moved save operation before token generation

    // Step 8: Generate token and set cookie
    setCookieAndToken(newUser._id, res);

    // Step 9: Send response
    res.status(200).json({
      _id: newUser._id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
     //password: hashPassword
    }); // Avoided returning hashed password

  } catch (error) {
    console.error("Error in SignUp Controllers", error);
    res.status(500).json({err: "Internal Server Error"});
  }
}


export const login = async (req, res) => {
  try {
    const {email, password} = req.body;


    if(!email || !password) {
      return res.status(400).json({error: "email and Password are Required"});
    }

    const user = await User.findOne({email})
    const isPasswordcorr = await bcrypt.compare(password , user?.password || "" );

    if(!email || !isPasswordcorr) {
      return res.status(400).json({error: "Invalid Email and Password"})
    }

    

    setCookieAndToken(user._id, res);

    res.status(200).json({
        _id: user._id,
        email: user.email,
        firstname: user.firstname, 
        lastname: user.lastname,

    })
  } catch (error) {
    console.error("Error in Login Controllers", error.message)
    res.status(500).json({err: "Internal Server Error"})
  }
}


export const logout = async (req, res) => {
   try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({message: "Successfully Logout"});
   } catch (error) {
    console.error("Error in Logout Controller", error);
    res.status(500).json({err: "Internal Server Error"});
   }
}



export const getMe = async (req, res) => {

  try {
    const user = await User.findById(req.user?._id).select("-password");
    res.status(200).json(user)
  } catch (error) {
    console.error("Error in GetMe controllers", error);
    res.status(500).json({err: "Invalid Server Error"});
  }
}