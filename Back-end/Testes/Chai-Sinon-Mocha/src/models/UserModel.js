const connection = require('../../config/connection')

const listUsers = async () => {
  const [usersData] = await connection.execute('SELECT * FROM users;');
  return usersData;
}

const getUsers = async (name) => {
  const [userData] = await connection.execute('SELECT * FROM users WHERE name = ?', [name]);
  return userData;
}

const updateUser = async ({oldName, newName}) => {
  const [updatedUser] = await connection.execute('UPDATE users SET name = ? WHERE name = ?', [newName, oldName])
  return updatedUser
};

const deleteUser = async (name) => {
  const [deletedUser] = await connection.execute('DELETE FROM users WHERE name = ?', [name])
  return deletedUser;
}

const createUser = async ({ name, email, age }) => {
  const [createdUser] = await connection.execute('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age])
  return createdUser
}

module.exports = {
  listUsers,
  getUsers,
  updateUser,
  deleteUser,
  createUser,
};