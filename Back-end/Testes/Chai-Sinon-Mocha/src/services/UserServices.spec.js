const { expect } = require('chai');
const chai = require('chai');
const Sinon = require('sinon');
const connection = require('../../config/connection');
const { createUser, listUsers, getUsers, updateUsers, deleteUser } = require('./UserServices');
chai.use(require('chai-as-promised'))

const users = [
  { name: 'Teste', email: 'teste@teste.com', age: 34, id: 1 },
  { name: 'Teste', email: 'teste@teste.com', age: 34, id: 2 },
  { name: 'Teste', email: 'teste@teste.com', age: 34, id: 3 },
];
describe('User Service', () => {
  describe('Create User', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 1, insertId: 54 }]);
    });
    after(async () => {
      Sinon.restore();
    });
    it('Deve retornar um objeto com as chaves "id", "name", "email" e "age"', async () => {
      const newUser = await createUser({
        name: 'Teste2',
        email: 'teste@teste.com',
        age: 59,
      });
      expect(newUser).to.have.keys('name', 'email', 'age', 'id');
    });
    it('a chave name deve ter o valor "Teste2" e o id deve ser "59"', async () => {
      const newUser = await createUser({
        name: 'Teste2',
        email: 'teste@teste.com',
        age: 59,
      });
      expect(newUser).to.have.property('name', 'Teste2');
      expect(newUser).to.have.property('id', 54);
    });
  });
  describe('List Users', () => {
    let userList;
    before(async () => {
      Sinon.stub(connection, 'execute').resolves([users]);
      userList = await listUsers();
    });
    after(async () => {
      Sinon.restore();
    });
    it('Deve retornar uma lista', async () => {
      expect(userList).to.be.an('array');
    });
    it('que contem 3 usuarios', async () => {
      expect(userList).to.have.lengthOf(3);
    });
    it('e possuem as chaves "name", "email", "age" e "id"', () => {
      expect(userList[0]).to.have.keys('name', 'email', 'age', 'id');
    });
  });
  describe('Get Users', () => {
    let userData;
    before(async () => {
      Sinon.stub(connection, 'execute').resolves([users[0]])
      userData = await getUsers('Teste');
    });
    after(async () => {
      Sinon.restore();
    });
    it('Deve retornar um objeto', async () => {
      expect(userData).to.be.an('object');
    });
    it('que contem as chaves "name", "email", "age" e "id"', () => {
      expect(userData).to.have.keys('name', 'email', 'age', 'id');
    });
  });
  describe('Update User', () => {
    afterEach(async () => {
      Sinon.restore();
    });
    it('Deve ser possível atualizar um usuario', async () => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 1}])
      const userData = await updateUsers({ newName: 'Teste222', oldName: 'Teste2'});
      expect(userData).to.be.an('object');
    });
    it('em caso de sucesso deve retornar a mensagem "Usuario atualizado"', async () => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 1}])
      const userData = await updateUsers({ newName: 'Teste222', oldName: 'Teste2'});
      expect(userData).to.have.property('message', 'Usuario atualizado');
    });
    it('caso não seja atualizado deve retornar um erro com a mensagem "Usuario não atualizado"', async () => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 0}])
      await expect(updateUsers({ newName: 'Teste222', oldName: 'Teste2'})).to.be.rejectedWith("Usuario não atualizado")
    });
  });
  describe('Delete User', () => {
    afterEach(async () => {
      Sinon.restore();
    });
    it('Ao excluir um usuario deve-se retornar a mensagem "Usuario excluido"', async () => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])
      const userData = await deleteUser('Teste');
      expect(userData).to.have.property('message', 'Usuario excluido')
    });
    it('caso não seja excluido deve retornar o erro "Usuario não excluido"', async () => {
      Sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }])
      const userData = await deleteUser('Teste');
      expect(userData).to.throws('Usuario não excluido')
    });
  })
});
