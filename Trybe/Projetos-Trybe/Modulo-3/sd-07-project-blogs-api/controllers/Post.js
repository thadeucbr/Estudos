const posts = require('../services/Post');
const {
  CREATED,
  BADREQUEST,
  OK,
  SERVERERROR,
  NOTFOUND,
  UNAUTHORIZED,
  NOCONTENT,
} = require('./httpCodes');

const createPost = async (req, res) => {
  try {
    const { user, body } = req;
    const result = await posts.createPost(body, user);
    res.status(CREATED).json(result);
  } catch (error) {
    res.status(BADREQUEST).json({ message: error });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const result = await posts.getAllPosts();
    res.status(OK).json(result);
  } catch (error) {
    console.log(error);
    res.status(SERVERERROR).json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const result = await posts.getPostById(req.params.id);
    res.status(OK).json(result);
  } catch (error) {
    res.status(NOTFOUND).json({ message: error.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    const result = await posts.updatePostById(req.params.id, req.body, req.user);
    res.status(OK).json(result);
  } catch (error) {
    let code = BADREQUEST;
    if (error === 'Unauthorized user') code = UNAUTHORIZED;
    res.status(code).json({ message: error });
  }
};

const deletePost = async (req, res) => {
  try {
    await posts.deletePost(req.params.id, req.user);
    res.status(NOCONTENT).end();
  } catch (error) {
    let code = NOTFOUND;
    if (error === 'Unauthorized user') code = UNAUTHORIZED;
    if (error === 'Not deleted') code = SERVERERROR;
    res.status(code).json({ message: error });
  }
};

const searchPosts = async (req, res) => {
  try {
    const response = await posts.searchPosts(req.query.q);
    res.status(OK).json(response);
  } catch (error) {
    res.status(SERVERERROR).json(error);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePost,
  searchPosts,
};
