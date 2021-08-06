const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, label, json, simple, colorize } = format;


const printLogFormat = combine(
  label({
    label: "테스트 레이블",
  }),
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd"
  }),
  printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
  })
);

 
const logger = createLogger({
      transports: [ 
        new transports.Console({
          level: "info",
          format: printLogFormat,
        }),
      ],
    });

module.exports = logger;
