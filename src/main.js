const winston = require('winston');
const { spawn } = require('child_process');
const { add, commit, push } = require('./git-cmd');

add().then(result => {
  result
  debugger
}).catch(err => {
  err
  debugger
})