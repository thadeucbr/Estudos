const express = require('express');

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Servidor rodando.'})
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))