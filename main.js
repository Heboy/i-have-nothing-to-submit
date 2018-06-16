#!/usr/bin/env node
const winston = require('winston');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ timestamp: true }),
    new winston.transports.File({ filename: 'error.log', level: 'error', })
  ]
});

fs.appendFile(path.resolve(__dirname, './1.txt'), `${new Date()}\n`, err => {
  logger.log({
    level: 'error',
    message: 'err'
  })
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
