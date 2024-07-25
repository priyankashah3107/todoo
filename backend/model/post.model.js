import mongoose, { model, Schema } from "mongoose";
const postSchema = new Schema({
   todo: {
    type: String, 
    require: true
   },

   desc: {
    type: String, 
    require: true,
   }
}) 

const Post = new mongoose.model("posts", postSchema)

export default Post;