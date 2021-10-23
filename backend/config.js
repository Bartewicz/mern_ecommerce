import { defaultsTo } from './utilities/utils.js'

const defaultConfig = {
  HOSTNAME: 'localhost',
  NODE_ENV: 'development',
  PORT: 5000,
}

const { EXPRESS_APP_HOSTNAME, EXPRESS_APP_PORT, NODE_ENV } = process.env

export const config = Object.freeze({
  HOSTNAME: defaultsTo(EXPRESS_APP_HOSTNAME, defaultConfig.HOSTNAME),
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: defaultsTo(NODE_ENV, defaultConfig.NODE_ENV),
  PORT: defaultsTo(EXPRESS_APP_PORT, defaultConfig.PORT),
})

export function composeCorsOptions() {
  return {
    origin: isDevEnv() ? 'http://localhost:3000' : config.origin,
  }
}

export function isDevEnv() {
  return config.NODE_ENV === 'development'
}
