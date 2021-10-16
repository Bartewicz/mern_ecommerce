/* eslint-disable no-console */

const COLOR = {
  cyan: '\x1b[36m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
}

function then(callback) {
  callback()
}

function promisified(logHandler) {
  logHandler()
  return { then }
}

function error(errorMessage) {
  return promisified(() => console.error(COLOR.red, errorMessage))
}

function success(message) {
  return promisified(() => console.log(COLOR.green, message))
}

function warn(message) {
  return promisified(() => console.warn(COLOR.yellow, message))
}

function logger(message) {
  return promisified(() => console.log(COLOR.cyan, message))
}

logger.error = error
logger.success = success
logger.warn = warn

export default logger
