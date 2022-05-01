import express, { Request, Response, Router } from 'express';
import qrcode from 'qrcode';

const app = express();

const route = Router();

app.use(express.json());

route.post('/img', (request: Request, response: Response) => {
  try {
    const { textToEncode = 'teste' } = request.query;
    qrcode.toFile(`src/img/${textToEncode}.png`, textToEncode, { type: 'png' });
    return response.status(201).json({
      status: 201,
      message: `QR Code gerado com sucesso`,
      fileName: `${textToEncode}`,
    });
  } catch (error) {
    return response.status(400).json({ status: 400, message: error.message });
  }
});

route.post('/url', (request: Request, response: Response) => {
  const { textToEncode = 'teste' } = request.query;
  qrcode.toDataURL(textToEncode, (err, src) => {
    if (err) return response.json({ error: err.message });
    return response.send(src);
  });
});

route.get(`/:fileName`, (request: Request, response: Response) => {
  const { fileName = 'teste' } = request.params;
  try {
    return response.sendFile(`/img/${fileName}.png`, { root: `./src` });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

route.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ message: 'funcionou!' });
});
app.use(route);

app.listen(3333, () => console.log('Server running on port 3333'));
