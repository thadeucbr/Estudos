const express = require('express');
const login = require('../controllers/login');

const router = express.Router();

router.route('/login')
  .post(login.signin);

module.exports = router;