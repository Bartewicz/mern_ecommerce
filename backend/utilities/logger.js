/* eslint-disable no-console */

const COLOR = {
  cyan: '\x1b[36m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
}

function logger(message) {
  console.log(COLOR.cyan, message)
  return { then }
}

function error(errorMessage) {
  console.error(COLOR.red, errorMessage)
  return { then }
}

function warn(errorMessage) {
  console.warn(COLOR.yellow, errorMessage)
  return { then }
}

function then(callback) {
  callback()
  return { then }
}

logger.error = error
logger.warn = warn

export default logger
