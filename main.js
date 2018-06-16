#!/usr/bin/env node
const winston = require('winston');
const { combine, timestamp, label, prettyPrint } = winston.format;
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error', })
  ]
});

fs.appendFile(path.resolve(__dirname, './1.txt'), `${new Date()}\n`, err => {
  if (err) {
    // err handle
    logger.log({
      level: 'error',
      message: err
    })
  }
  else {
    exec('npm run git', (error, stdout, stderr) => {
      if (error) {
        logger.log({
          level: 'error',
          message: error.toString()
        })
      }
    });
  }
})
