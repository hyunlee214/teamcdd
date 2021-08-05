'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
dotenv.config();

const home = require('./src/routes/home');

const accessLogSystem = fs.createWriteStream(
  `${__dirname}/log/access.log`,
  { flags: "a" }
);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev", { stream: accessLogSystem }));
// app.use(morgan('combined'));

app.use('/', home);

module.exports = app;