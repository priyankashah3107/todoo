import Post from "../model/post.model.js";
import User from "../model/user.model.js";

export const createPost = async (req, res) => {
  try {
    const {name, description } = req.body;
     
    if(!name || !description) {
      return res.status(404).json({error: "Todo and Description are importent"});
    }
    const userId = req.user._id.toString();

    const user = await User.findById(userId);

    if(!user) {
      return res.status(404).json({error: "User not found"})
    }

    const newPost = new Post({
       user: userId,
       name, 
       description
    })
    await newPost.save();
    res.status(200).json({newPost})
  } catch (error) {
    res.status(500).json({error: "Internal server error"});
   console.error("Error in post controllerJs ", error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const {name, description} = req.body
    const post = await Post.findByIdAndUpdate(postId,{
        name,
        description
      },{ new: true } // This option returns the updated document
    );

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error("Error in updatePost controller:", error);
  }
};





export const deletePost = async (req, res) => {

  try {
    
  } catch (error) {
    
  }
}



export const getAllPost = async (req, res) => {

  try {
    
  } catch (error) {
    
  }
}

export const viewPost = async (req, res) => {
   try {
    
   } catch (error) {
    
   }
}