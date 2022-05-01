const model = require('../models/chat');

const chat = async (_req, res) => {
  try {
    const messages = await model.getMessages();
    await res.render('chat', { messages });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  chat,
};