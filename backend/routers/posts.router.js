const express = require('express');
const postsController = require('../controllers/posts.controller');
const router = express.Router();


router.post('/', postsController.createPosts);
// router.post('/', (req, res) => { 
//     postsController.createPosts(req.body);
//     res.status(201); 
//     res.send("post successfully created!");
// })
router.get('/', postsController.getPosts)
router.get('/:id',postsController.getPost);
// router.get('/', (req, res) => { 
//     const postId = req.query.id;
//     res.status(404).send();
// })
router.delete('/:id',postsController.deletePost);
// router.delete('/:id', (req, res) => { 
//     const reqPostId = req.params.id;
//     postsController.delete(reqPostId);
//     res.status(200).send();
// })
router.patch('/:id/likes',postsController.updatePostLikes);

module.exports = router;