const { default: mongoose } = require("mongoose");
const postsService = require("../services/post.service");

const postsController = {
    getPost: async (req, res) => {
        console.log("Reached GET post controller");
        const postId = req.params.id;
        console.log(postId);
        const postObj = await postsService.getPostById(postId);
        res.status(200).send(postObj);
    },
    updatePostLikes: async(req, res) => {
        console.log('Reached PATCH post likes controller');
        const postId = req.params.id;
        const username = req.body.username;

        console.log(req.params.id);
        console.log(req.params.username);

        const postObj = await postsService.getPostById(postId);
        if(!postObj)
        {
            res.status(404).send();
            return;
        }
        const likes = postObj.likes;
        
        if(likes.includes(username)) {
            await postsService.removePostLikes(postId, username);
        } else {
            await postsService.addPostLikes(postId, username);
        }
        const updatePostObj = await postsService.getPostById(postId);
        res.status(200).send(updatePostObj);
    },

    getPosts: async (req, res) => {
        console.log("Reached Get post controleer");
        const postObj = await postsService.getPosts();
        res.status(200).send(postObj);
    },
    createPosts: async (req,res) => {
        console.log("Reached post controller");
        const postToBeCreated = req.body;
        console.log(postToBeCreated);
        // validate post object from request
        if(
            !postToBeCreated ||
            !postToBeCreated.author ||
            !postToBeCreated.title ||
            !postToBeCreated.description
        ){
            res.status(400).send("Invalid post object");
            return;
        }
        
        postsService.createPosts(postToBeCreated);
        res.status(201).send("Post created successfully")
    },
    deletePost: async (req, res) => {
        const postId = req.params.id;
        console.log(`Deleted post with id: ${postId}`);
        postsService.deletePosts(postId);
    }
}
module.exports = postsController