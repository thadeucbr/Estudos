const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Thadeu12',
  database: 'test',
});

module.exports = connection;
