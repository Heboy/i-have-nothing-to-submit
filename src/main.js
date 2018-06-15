const winston = require('winston');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');



const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});

fs.appendFile(path.resolve(__dirname, '../1.txt'), new Date(), err => {
  if (err) {
    // err handle
    logger.log({
      level: 'error',
      message: err
    })
  }
  else {
    let cmd = exec('npm run git');
    cmd.stdout.on('data', (result) => {
      console.log(result.toString())
    })

    cmd.stderr.on('data', error => {
      console.log(error.toString())
      logger.log({
        level: 'error',
        message: error
      })
    })

  }
})

