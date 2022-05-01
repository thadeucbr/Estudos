const socket = window.io();
// Seção referente ao usuario
const user = document.querySelector('#currentUser');
const changeUserName = document.querySelector('#changeUserName');
const userButton = document.querySelector('#userButton');
const messageInput = document.querySelector('#messageInput');
const sendMessage = document.querySelector('#messageButton');
const connectedUsers = document.querySelector('#users');
const createUsers = (data) => {
  const currentUsers = document.querySelectorAll('.onlineUser');
  if (currentUsers !== null) currentUsers.forEach((currUser) => currUser.remove());
  data.forEach((loggedUser) => {
    if (loggedUser !== user.innerText) {
      const newUser = document.createElement('li');
      newUser.className = 'onlineUser';
      newUser.innerText = loggedUser;
      newUser.setAttribute('data-testid', 'online-user');
      connectedUsers.appendChild(newUser);
    }
  });
};
const createMessage = (message) => {
  const newMessage = document.createElement('li');
  const messagesList = document.querySelector('#messages');
  const teste = document.querySelector('.messages');
  newMessage.innerText = message;
  newMessage.setAttribute('data-testid', 'message');
  if (
    message.includes('Acabou de se conectar') || message
    .includes('Se desconectou') || message.includes('Bem vindo,')
  ) {
    newMessage.style.color = 'blue';
    newMessage.style.fontWeight = 600;
  }
  messagesList.appendChild(newMessage);
  teste.scrollTop = teste.scrollHeight;
  messageInput.value = '';
};

userButton.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('changeUserName', changeUserName.value);
  return false;
});
socket.on('hello', (data) => {
  user.innerText = data.user;
  createUsers(data.onlineUsers);
});
socket.on('userName', (data) => { user.innerText = data; });
socket.on('mensagemServer', (mensagem) => createMessage(mensagem));
socket.on('connectedUsers', (data) => createUsers(data));
sendMessage.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('message', { chatMessage: messageInput.value });
  return false;
});
socket.on('message', (message) => createMessage(message));
