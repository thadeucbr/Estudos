const express = require('express');
const categories = require('../controllers/categories');
const tokenValidatorMiddleware = require('../middlewares/tokenValidator');

const router = express.Router();

router.route('/categories')
  .get(tokenValidatorMiddleware, categories.getAllCategories)
  .post(tokenValidatorMiddleware, categories.createCategory);

module.exports = router;