const UserService = require('./service');

module.exports = class UserController {
  #userService;
  constructor() {
    this.#userService = new UserService();
  }

  addUser = async (userData) => {
    const newUser = await this.#userService.addUser(userData);
    return { id: newUser[0].insertId, ...userData };
  };
};
