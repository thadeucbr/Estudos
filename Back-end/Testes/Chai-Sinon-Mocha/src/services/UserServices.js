const userModel = require('../models/UserModel')
const listUsers = async () => {
  const userList = await userModel.listUsers();
  return userList;
}

const getUsers = async (userName) => {
  const user = await userModel.getUsers(userName);
  return user;
}

const updateUsers = async (name) => {
  const updatedUser = await userModel.updateUser(name)
  if(updatedUser.affectedRows === 0) throw new Error('Usuario não atualizado')
  return { message: 'Usuario atualizado'}
}

const createUser = async (newUserData) => {
  const newUser = await userModel.createUser(newUserData);
  return { id: newUser.insertId, ...newUserData}
}

const deleteUser = async (name) => {
  const deletedUser = await userModel.deleteUser(name);
  if(deletedUser.affectedRows === 0) throw new Error('Usuario não excluido')
  return { message: 'Usuario excluido'}
}

module.exports = {
  listUsers,
  getUsers,
  updateUsers,
  createUser,
  deleteUser
}