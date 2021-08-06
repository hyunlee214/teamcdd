const { createLogger, transports, format, transport } = require('winston');
const { combine, timestamp, printf, label, json, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

const printLogFormat = combine(
  label({
    label: "테스트 레이블",
  }),
  // colorize(),    // 파일에 로그추가할때는 없는게나음
  timestamp({
    format: "YYYY-MM-DD HH:mm:dd"
  }),
  printFormat
);

 
const logger = createLogger({
      transports: [ 
        new transports.File({
          filename: "access.log",
          dirname: "./logs",
          level: "info",
          format: printLogFormat,
        }),
        new transports.Console({
          level: "info",
          format: printLogFormat,
        }),
      ],
    });

    if (process.env.NODE_ENV !== "production") {
      logger.add(
        new transports.Console({
          level: "info",
          format: printLogFormat,
        })
      );
    }


module.exports = logger;
