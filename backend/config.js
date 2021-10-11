const LOCALHOST = 'localhost'

const defaultConfig = {
  PORT: 5000,
  NODE_ENV: 'development',
}

const config = Object.freeze({
  HOSTNAME: process.env.EXPRESS_APP_HOSTNAME || LOCALHOST,
  PORT: process.env.EXPRESS_APP_PORT || defaultConfig.PORT,
  NODE_ENV: process.env.NODE_ENV || defaultConfig.NODE_ENV,
})

module.exports = config
