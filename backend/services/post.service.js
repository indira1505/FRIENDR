const PostModel = require('../data/posts.model');
const { post } = require('../routers/posts.router');
const { v4: uuidv4 } = require('uuid');

const postsService = {
    getPostById: async (postId) => {
        const response = await PostModel.findOne({ id: postId}, {});
        return response ;
    },

    removePostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$pull: {likes: username}});
    },

    addPostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$push: {likes: username}});
    },

    getPosts: async () =>{
        const response = await PostModel.find();
        return response;
    },
    createPosts: (postObj) => {
        console.log("Reached post service");
        console.log(postObj);
        postObj.date = new Date().toISOString();
        postObj.id = uuidv4();
        const postToBeCreated = new PostModel(postObj);
        postToBeCreated.save().then(() => console.log('Post created') );
    },
    deletePosts: async (postId) => {
        try {
            const result = await PostModel.findOneAndDelete({ id: postId});
            if (result) {
                console.log(`Postul cu id-ul ${postId} a fost șters.`);
               // res.status(200).send(`Postul cu id-ul ${postId} a fost șters.`);
            } else {
                console.log(`Postul cu id-ul ${postId} nu a fost găsit.`);
                //res.status(404).send(`Postul cu id-ul ${postId} nu a fost găsit.`);
            }
        } catch (err) {
            console.error('Eroare la ștergerea postului:', err);
            //res.status(500).send('Eroare la ștergerea postului.');
        }
    }

}
module.exports = postsService;