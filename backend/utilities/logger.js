/* eslint-disable no-console */
function error(message) {
  console.error(message)
}

export function logger(message) {
  this.error = error

  console.log('\x1b[36m%s\x1b[0m', message)
}
