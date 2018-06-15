const winston = require('winston');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

let cmd = spawn('npm', ['run', 'git']);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

fs.appendFile(path.resolve(__dirname, '../1.txt'), new Date(), err => {
  if(err){
    // err handle
    logger.log({
      level: 'error',
      message: err
    })
  }
  logger.log({
    level: 'error',
    message: 'err'
  })
})
// cmd.stdout.on('data', (result) => {
//   console.log(result.toString())
// })
