'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// sequelize
const { sequelize }  = require('./models');


const dotenv = require('dotenv');
dotenv.config();

sequelize.sync()

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

// sequelize연결 (보완예정)

// sequelize.sync({ force: false })
// .then(() => {
//   console.log('db연결 테스트');
// })
// .catch((err) => {
//   console.error(err);
// });



app.use('/', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// // // error handler
app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;