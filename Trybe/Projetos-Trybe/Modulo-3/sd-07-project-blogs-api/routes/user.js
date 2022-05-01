const express = require('express');
const user = require('../controllers/user');
const validateTokenMiddleware = require('../middlewares/tokenValidator');

const router = express.Router();

router.route('/user')
  .get(validateTokenMiddleware, user.getAllUsers)
  .post(user.createUser);

router.route('/user/:id')
  .get(validateTokenMiddleware, user.getUserById);

router.route('/user/me')
  .delete(validateTokenMiddleware, user.deleteUser);
  
module.exports = router;