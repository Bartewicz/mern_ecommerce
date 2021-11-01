import logger from './logger.js'

export function requestLogger(request, response, next) {
  const { method, originalUrl } = request
  const time = new Date().toLocaleTimeString('en-US', { hour12: false })

  logger(`${time} | ${method} ${originalUrl}`).then(next)
}
