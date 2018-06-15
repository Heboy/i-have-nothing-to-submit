const winston = require('winston');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

let cmd = spawn('npm', ['run', 'git']);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
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
    level: 'info',
    message: 'err'
  })
})
// cmd.stdout.on('data', (result) => {
//   console.log(result.toString())
// })
