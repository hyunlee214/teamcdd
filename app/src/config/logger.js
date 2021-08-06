const { createLogger, transports, format } = require('winston');
const { combine, timestamp, json, simple, colorize } = format;

const logger = createLogger({
      transports: [
        new transports.Console({
          level: "info",
          format: combine(
            // winston.colorize(),
            timestamp({
              format: "YYYY-MM-DD HH:mm:dd"
            }),
            json()
            ),
        }),
      ],
    });

module.exports = logger;
