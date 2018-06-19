#!/usr/bin/env node
const winston = require('winston');
const { combine, timestamp, label, prettyPrint } = winston.format;
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');

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

const appendFilePromise = util.promisify(fs.appendFile);
const execPromise = util.promisify(exec);

appendFilePromise(path.resolve(__dirname, './1.txt'), `${new Date()}\n`).then(result => {
  return execPromise('git add .')
}).then(result => {
  return execPromise(`git commit -m "${new Date()}"`)
}).then(result => {
  return execPromise('git pull origin master')
}).then(result => {
  return execPromise('git push origin master')
}).catch(err => {
  logger.log({
    level: 'error',
    message: err.toString()
  })
})