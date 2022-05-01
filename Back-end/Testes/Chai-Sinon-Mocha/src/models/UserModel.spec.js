const { expect } = require('chai');
const connection = require('../../config/connection');
const { listUsers, getUsers, updateUser, deleteUser, createUser } = require('./UserModel');

describe('User Model', () => {
  before(async () => {
    await connection.execute('INSERT INTO users (name, email, age) VALUES ("Teste", "teste@teste.com", "22")')
  })
  after(async () => {
    await connection.execute('DELETE FROM users WHERE name = "Teste";')
    connection.end()
  });
  describe('A função listUsers', () => {
    it('Deve retornar um array', async () => {
      const userData = await listUsers();
      expect(userData).to.be.an('array');
    });
    it('que possui objetos com as chaves "name", "email", "age" e "id"', async () => {
      const [userData] = await listUsers();
      expect(userData).to.have.keys('name', 'email', 'age', 'id')
    })
  })
  describe('A função getUser', () => {
    let userData;
    before(async () => {
      [userData] = await getUsers('Teste');
    })
    it('Dever retornar um objeto', () => {
      expect(userData).to.be.an('object')
    });
    it('que possui as chaves "name", "email", "age" e "id"', () => {
      expect(userData).to.have.keys('name', 'email', 'age', 'id')
    });
    it('a chave name deve possuir o valor "Teste"', () => {
      expect(userData).to.have.property('name', 'Teste')
    });
  });
  describe('A função updateUser', () => {
    it('Deve alterar o nome do usuario "Teste" para "Teste Atualizado"', async () => {
      const updatedUser = await updateUser({ oldName: 'Teste', newName: 'Teste Atualizado'});
      expect(updatedUser).to.have.property('changedRows', 1)
    })
  })
  describe('A função deleteUser', () => {
    it('Deve deletar o usuario "Teste Atualizado" com sucesso', async () => {
      const deletedUser = await deleteUser('Teste Atualizado');
      expect(deletedUser).to.have.property('affectedRows', 1)
    })
  })
  describe('A função createUser', () => {
    it('Deve criar o usuário com sucesso', async () => {
      const newUser = await createUser({ name: 'Teste', email: 'teste@teste.com', age: 49 });
      expect(newUser).to.have.property('affectedRows', 1)
    })
  })
});
