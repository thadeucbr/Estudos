const express = require('express');
const posts = require('../controllers/Post');
const validateTokenMiddleware = require('../middlewares/tokenValidator');

const router = express.Router();

router.route('/post/search?:searchTerm')
  .get(validateTokenMiddleware, posts.searchPosts);

router.route('/post')
  .get(validateTokenMiddleware, posts.getAllPosts)
  .post(validateTokenMiddleware, posts.createPost);

router.route('/post/:id')
  .get(validateTokenMiddleware, posts.getPostById)
  .delete(validateTokenMiddleware, posts.deletePost)
  .put(validateTokenMiddleware, posts.updatePostById);

module.exports = router;