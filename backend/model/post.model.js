import mongoose, { model, Schema } from "mongoose";
const postSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
   name: {
    type: String, 
    require: true
   },

   description: {
    type: String, 
    require: true,
   }
}, {timestamps: true}) 

const Post = new mongoose.model("posts", postSchema)

export default Post;