const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, errors, json } = format;
const winston = require('winston')

function prodLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({stack: true}),
            json()
    ),
        defaultMeta: {service: 'user-service'},
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' }),]
  });
}

module.exports = prodLogger