const { expect } = require('chai');
const Sinon = require('sinon');
const UserServices = require('../services/UserServices');
const { getUsers, listUsers, createUser, deleteUser, updateUsers } = require('./UserController');
const users = [
  { name: 'Teste', email: 'teste@teste.com', age: 34, id: 1 },
  { name: 'Teste', email: 'teste@teste.com', age: 34, id: 2 },
  { name: 'Novo Teste', email: 'teste@teste.com', age: 34, id: 3 },
];
describe('User Controller', () => {
  const req = {}
  const res = {}
  describe('List Users', () => {
    before(() => {
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(users);
      Sinon.stub(UserServices, 'listUsers').resolves(users);
    });
    after(() => {
      Sinon.restore()
    });
    it('Deve retornar o status 200', async () => {
      await listUsers(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });
  describe('Create User', () => {
    before(() => {
      req.body = { name: 'teste', email: 'teste', age: 22}
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub(UserServices, 'createUser').resolves({message: 'Usuario cadastrado com sucesso'})
    });
    after(() => {
      Sinon.restore()
    });
    it('Deve retornar o status 201', async () => {
      await createUser(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    })
  });
  describe('Get User', () => {
    before(() => {
      req.params = 'Teste'
      res.status = Sinon.stub().returns(res)
      res.json = Sinon.stub(UserServices, 'getUsers').resolves(users[0])
    });
    after(() => {
      Sinon.restore()
    });
    it('Deve retornar o  status 200', async () => {
      await getUsers(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });
  describe('Update User', () => {
    before(() => {
      req.body = { oldName: 'Teste', newName: 'Novo Teste'}
      res.status = Sinon.stub().returns(res)
      res.json = Sinon.stub(UserServices, 'updateUsers').resolves(users[2])
    });
    after(() => {
      Sinon.restore()
    });
    it('Deve retornar o status 200', async () => {
      await updateUsers(req, res)
      expect(res.status.calledWith(200)).to.be.true
    });
  });
  describe('Delete User', () => {
    before(() => {
      req.params = 'Teste';
      res.status = Sinon.stub().returns(res)
      res.json = Sinon.stub(UserServices, 'deleteUser').resolves({message: 'Usuario excluido'})
    });
    after(() => {
      Sinon.restore()
    });
    it('Deve retornar o status 204', async () => {
      await deleteUser(req, res);
      expect(res.status.calledWith(204)).to.be.true
    });
  });
});