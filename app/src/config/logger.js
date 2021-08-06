const { createLogger, transports, format, transport } = require('winston');
const { combine, timestamp, printf, label, json, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

const printLogFormat = {
  file: combine(
    label({
      label: "테스트 레이블",
    }),
    // colorize(),    // 파일에 로그추가할때는 없는게나음
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(
    colorize(),
    simple()
  ),
};

const options = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};


const logger = createLogger({
  transports : [options.file],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(options.console);
}

module.exports = logger;
