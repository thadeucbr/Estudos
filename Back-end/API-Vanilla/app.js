const http = require('http');
const UserController = require('./controller');

const PORT = process.env.SERVER_PORT || 3000;

const server = http.createServer(async (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    return res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify({ message: 'API Online' }));
  } else if (req.url === '/user' && req.method === 'POST') {
    let body = await new Promise((resolve, reject) => {
      try {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          resolve(JSON.parse(body));
        });
      } catch (error) {
        reject(error);
      }
    });
    const userController = new UserController();
    const newUser = await userController.addUser(body);
    return res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(newUser));
  }
  return res
    .writeHead(404, { 'Content-Type': 'application/json' })
    .end(JSON.stringify({ message: 'Rota não encontrada.' }));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
