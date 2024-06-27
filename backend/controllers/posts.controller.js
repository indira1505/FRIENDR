const postsService = require("../services/post.service");

const postsController = {
    createPosts: (postObj) => {
        console.log("Reached post controller");
        console.log(postObj);
        postsService.createPosts(postObj);
    },
    delete: (postId) => {
        console.log(`Deleted post with id: ${postId}`);
        postsService.deletePosts(postId);
    }
}
module.exports = postsController