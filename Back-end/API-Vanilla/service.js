const connection = require('./connection');
const UserModel = require('./model');

module.exports = class UserService {
  #userModel;
  constructor() {
    this.#userModel = new UserModel(connection);
  }
  
  addUser = async (userData) => {
    const data = await userData;
    const newUser = await this.#userModel.addUser(data)
    return newUser;
  }
}