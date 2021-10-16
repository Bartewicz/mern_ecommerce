/* eslint-disable no-console */

const COLOR = {
  cyan: '\x1b[36m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
}

function then(callback) {
  callback()
  return { then }
}

function logger(message) {
  console.log(COLOR.cyan, message)
  return { then }
}

function error(errorMessage) {
  console.error(COLOR.red, errorMessage)
  return { then }
}

function success(message) {
  console.log(COLOR.green, message)
  return { then }
}

function warn(message) {
  console.warn(COLOR.yellow, message)
  return { then }
}

logger.error = error
logger.success = success
logger.warn = warn

export default logger
