const postsService = {
    createPosts: (postObj) => {
        console.log("Reached post service");
        console.log(postObj)
    },
    deletePosts: (postId) => {
        console.log(`Deleted post ${postId} in service`);
    }

}
module.exports = postsService;