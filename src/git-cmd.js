const { spawn } = require('child_process');
const util = require('util');

const spawnPromise = util.promisify(spawn)

exports.add = () => {
  return spawnPromise('git', ['add', '.'], {})
}
exports.commit = () => {
  return spawnPromise('git', ['commit', '-m', 'update'])
}
exports.push = () => {
  return spawnPromise('git', ['push', 'origin'])
}
