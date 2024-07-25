import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    firstname: {
      type: String, 
      require: true,
    },
    lastname: {
      type: String,
    },

    email: {
      type: String,
      require: true,
      unique: true
    },

    password: {
      type: String,
      require: true,
    },
    confirmpassword: {
      type: String,
      require: true,
    }
}, {timestamps: true})

const User = new mongoose.model("User", userSchema)
export default User;