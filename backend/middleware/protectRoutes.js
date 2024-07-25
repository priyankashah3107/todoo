import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
export const protectRoute = async (req, res, next) => {
   try {
     // check token, docode, check userId
     const token = req.cookies.jwt;
     if(!token) {
      return res.status(401).json({error: "Unauthorized token Provider"});
     }
     const decode = jwt.verify(token, process.env.JWT_SECRET);
     if(!decode) {
       return res.status(401).json({error: "Invalid Token"})
     }

     const user = await User.findById(decode.userId).select("-password");
     if(!user) {
      return res.status(400).json({error: "Invalid User"});
     }
     req.user = user;
     next()
   } catch (error) {
      console.error("Error inProtectRoute middleware", error.message)
      return res.status(500).json({err: "Internal Server Error"});
   }
}