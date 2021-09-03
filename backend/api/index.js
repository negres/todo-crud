const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;

routes(app);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = app;
