const winston = require('winston');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

let cmd = spawn('npm', ['run', 'git']);

fs.appendFile(path.resolve(__dirname, '../1.txt'), new Date(), err => {
  if(err){
    // err handle
  }
})
// cmd.stdout.on('data', (result) => {
//   console.log(result.toString())
// })
