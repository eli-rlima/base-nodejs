const express = require('express');
const bodyParser = require('body-parser');

const routes = express.Router();

routes.use(bodyParser.json());

module.exports = routes;
