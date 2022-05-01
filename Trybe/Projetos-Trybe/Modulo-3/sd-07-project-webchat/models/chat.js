const connection = require('./connection');

const getMessages = async () => connection()
  .then((db) => db.collection('messages').find({}).toArray());

const sendMessage = async ({ chatMessage, nickname, timestamp }) => connection()
  .then((db) => db.collection('messages').insertOne({ chatMessage, nickname, timestamp }));

module.exports = {
  getMessages,
  sendMessage,
};