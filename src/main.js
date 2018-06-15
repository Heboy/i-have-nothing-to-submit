const winston = require('winston');
const { spawn } = require('child_process');

let cmd = spawn('npm', ['run', 'git']);

cmd.stdout.on('data', (result) => {
  console.log(result.toString())
})
