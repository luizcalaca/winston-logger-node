const { createLogger, format } = require('winston');
const { combine, timestamp, label, printf } = format;
const winston = require('winston')

function devLogger() {
  const myFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });
  
  return createLogger({
    format: combine(
      format.colorize(),
      timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
      format.errors({stack: true}),
      myFormat
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),]
  });
}

module.exports = devLogger