'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// const accessLogStream = require('./src/config/log');
// const logger = require('./src/config/logger');
// logger.error('testing');

const home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/', home);

module.exports = app;