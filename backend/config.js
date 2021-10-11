const LOCALHOST = 'localhost'

const defaultConfig = {
  PORT: 5000,
  NODE_ENV: 'development',
}

const config = Object.freeze({
  HOSTNAME: process.env.HOSTNAME || LOCALHOST,
  PORT: process.env.PORT || defaultConfig.PORT,
  NODE_ENV: process.env.NODE_ENV || defaultConfig.NODE_ENV,
})

module.exports = config
