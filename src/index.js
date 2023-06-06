/* eslint-disable no-console */
const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => console.log('listening on port http://172.23.119.108:8080'));
