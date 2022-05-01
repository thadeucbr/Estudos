const express = require('express');
const { userRoute, loginRoute, categoriesRoute, postRoute } = require('./routes');

const app = express();

app.use(express.json());

app.use(userRoute);
app.use(loginRoute);
app.use(categoriesRoute);
app.use(postRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
