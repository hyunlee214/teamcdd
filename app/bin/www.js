"use strict";

const app = require('../app');
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 7777;

app.listen(PORT, ()=> {
  logger.info(`${PORT} 포트 server start`);
});