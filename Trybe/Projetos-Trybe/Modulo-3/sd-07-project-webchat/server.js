const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const cors = require('cors');
const faker = require('faker');
const moment = require('moment');

app.use(cors());

app.set('view engine', 'ejs');

app.set('views', './views');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const { chat } = require('./controllers/chat');
const model = require('./models/chat');

const DATEHOUR = 'DD-MM-yyyy HH:mm:ss';
let onlineUsers = [];

const loadUsers = (socket, user) => {
  socket.broadcast.emit('connectedUsers', onlineUsers);
  socket.emit('hello', { user, onlineUsers });
  socket.broadcast.emit('message', `${moment().format(DATEHOUR)} - ${user} Acabou de se conectar.`);
  if (onlineUsers.length > 1) {
  return socket.emit('message', `${moment().format(DATEHOUR)}\
   - Bem vindo, temos ${onlineUsers.length} usuários online.`);
  }
  socket.emit('message', `${moment().format(DATEHOUR)}\
  - Bem vindo, você o único usário online.`);
};

const randomName = () => {
  const name = faker.internet.password(16);
  return name;
};

io.on('connection', (socket) => {
  let currentUser = randomName();
  onlineUsers.push(currentUser);
  loadUsers(socket, currentUser);
  socket.on('changeUserName', (data) => {
    onlineUsers[onlineUsers.indexOf(currentUser)] = data;
    currentUser = data;
    socket.emit('userName', currentUser);
    socket.broadcast.emit('connectedUsers', onlineUsers);
  });
  socket.on('disconnect', () => {
    onlineUsers = onlineUsers.filter((user) => user !== currentUser);
    io.emit('connectedUsers', onlineUsers);
    socket.broadcast.emit('message', `${moment().format(DATEHOUR)}-${currentUser} Se desconectou.`);
  });
  socket.on('message', ({ chatMessage, nickname = currentUser }) => {
    model.sendMessage({ chatMessage, nickname, timestamp: moment().format(DATEHOUR) });
    io.emit('message', `${moment().format(DATEHOUR)} - ${nickname}: ${chatMessage}`);
  });
});

app.use(express.static(`${__dirname}/views`));
app.get('/', chat);

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
