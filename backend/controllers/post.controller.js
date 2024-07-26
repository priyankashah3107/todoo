import Post from "../model/post.model.js";
import User from "../model/user.model.js";

export const createPost = async (req, res) => {
  try {
    const {name, description } = req.body;
     
    if(!name || !description) {
      return res.status(404).json({error: "Todo and Description are important"});
    }
    
    if(name.length < 3){
      return res.status(404).json({err: "Tasks Must be greater than 3 characters"});
    }

    if(description.length > 100) {
      return res.status(404).json({err: "Description Must not be exceeded more than 100 characters"});

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
    const {id: postId} = req.params
    const post = await Post.findByIdAndDelete(postId)

    if(!post) {
      return res.status(404).json({error: "Post not Found"});
    }
  
    res.status(200).json({message: "Post Deleted Successfully"})

  } catch (error) {
    console.error("Error in DeletePost Controller", error.message)
    res.status(500).json({err: "Internal Server Error"}, error.message)
  }
}



export const getAllPost = async (req, res) => {

  try {
    const posts = await Post.find(); // it will retrive all the posts from the db

    if(!posts.length) {
      return res.status(404).json({err: "Posts are not available"})
    }
    res.status(200).json(posts)
  } catch (error) {
    console.error("Error in GetAllPost Controller", error.message)
    res.status(500).json({err: "Internal Server Error"})
  }
}

export const viewPost = async (req, res) => {
   try {
     const {id: postId} = req.params;
     const partiPost = await Post.findById(postId)
     
     if(!partiPost) {
      return res.status(404).json({err: "Id with this post in not exist"});
     }

     res.status(200).json(partiPost)
   } catch (error) {
     console.error("Error in View Post Controllers", error.message)
     res.status(500).json({err: "Internal Server Error"});
   }
}