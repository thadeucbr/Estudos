const UserService = require('../services/UserServices');

const listUsers = async (_req, res) => {
  const userList = await UserService.listUsers()
  return res.status(200).json(userList);
}

const getUsers = async (req, res) => {
  const { name } = req.params;
  const userData = await UserService.getUsers(name);
  return res.status(200).json(userData)
}

const updateUsers = async (req, res) => {
  const updatedUser = await UserService.updateUsers(req.body)
  return res.status(200).json(updatedUser);
}

const createUser = async (req, res) => {
  const newUser = await UserService.createUser(req.body);
  return res.status(201).json(newUser);
}

const deleteUser = async (req, res) => {
  const deletedUser = await UserService.deleteUser(req, res);
  return res.status(204).json(deletedUser)
}

module.exports = {
  listUsers,
  getUsers,
  updateUsers,
  createUser,
  deleteUser
}