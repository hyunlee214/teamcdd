const winston = require('winston');

const logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: "info",
          format: winston.format.combine(
            // winston.format.colorize(),
            winston.format.timestamp({
              format: "YYYY-MM-DD HH:mm:dd"
            }),
            winston.format.json()
            ),
        }),
      ],
    });

module.exports = logger;
