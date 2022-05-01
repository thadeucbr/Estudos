const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const tokenNotFoundMessage = 'Token not found';
const validateTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error(tokenNotFoundMessage);

    const { email, password } = jwt.verify(token, process.env.JWT_SECRET);

    const response = await Users.findOne({
      where: { email, password },
    });
    if (response === null) throw new Error('Expired or invalid token');

    req.user = response;
    next();
  } catch (err) {
    let message = 'Expired or invalid token';
    if (err.message === tokenNotFoundMessage) message = tokenNotFoundMessage;
    return res.status(401).json({ message });
  }
};

module.exports = validateTokenMiddleware;