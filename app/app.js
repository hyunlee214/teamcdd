'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./src/config/logger');

const dotenv = require('dotenv');

const app = express();
dotenv.config();

// const accessLogStream = require('./src/config/log');
// const logger = require('./src/config/logger');
// logger.error('testing');


const home = require('./src/routes/home');



app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.unsubscribe(morgan("dev"));
// app.use(morgan("common", { stream: accessLogStream }));
// app.use(morgan('combined'));
// app.use(morgan('common', { stream: logger.stream}));
app.use(morgan('tiny', {stream: logger.stream }));

app.use('/', home);

module.exports = app;