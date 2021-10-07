const express = require('express');
const bodyParser = require('body-parser');
const { productsRoute, salesRoute } = require('./routes/index');
const { errorMiddleware } = require('./middlewares/index');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.use('/products', productsRoute);

app.use('/sales', salesRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddleware);
const alternative_port = 3000;
const PORT = process.env.PORT || alternative_port;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
