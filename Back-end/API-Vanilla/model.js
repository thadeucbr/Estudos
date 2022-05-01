module.exports = class UserModel {
  #dbConnection;
  constructor(databaseConnection) {
    this.#dbConnection = databaseConnection;
  }
  addUser = async ({ name, email, age }) => {
    const newUser = await this.#dbConnection.query(
      'INSERT INTO users (name, email, age) VALUES (?,?,?)',
      [name, email, age]
    );
    return newUser;
  };
};
