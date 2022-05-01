const user = require('../services/Users');
const {
  CREATED,
  BADREQUEST,
  CONFLICT,
  OK,
  SERVERERROR,
  NOTFOUND,
  NOCONTENT,
} = require('./httpCodes');

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const response = await user.createUser(body);
    res.status(CREATED).json(response);
  } catch (error) {
    let code = BADREQUEST;
    if (error.message === 'User already registered') code = CONFLICT;
    res.status(code).json({ message: error.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const response = await user.getAllusers();
    res.status(OK).json(response);
  } catch (error) {
    res.status(SERVERERROR).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await user.getUserById(id);
    res.status(OK).json(response);
  } catch (error) {
    res.status(NOTFOUND).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await user.deleteUser(req.user.dataValues.id);
    res.status(NOCONTENT).end();
  } catch (error) {
    res.status(SERVERERROR).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
