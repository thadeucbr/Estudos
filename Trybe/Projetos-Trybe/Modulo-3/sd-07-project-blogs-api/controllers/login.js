const login = require('../services/Login');
const { OK, BADREQUEST } = require('./httpCodes');

const signin = async (req, res) => {
  try {
    const { body } = req;
    const response = await login.signin(body);
    res.status(OK).json(response);
  } catch (error) {
    res.status(BADREQUEST).json({ message: error.message });
  }
};

module.exports = {
  signin,
};
