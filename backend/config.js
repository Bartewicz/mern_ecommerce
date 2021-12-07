import { defaultsTo } from '@mr-bean/shared'

const defaultConfig = {
  CLIENT_ORIGIN_URL: 'http://localhost:3000',
  HOSTNAME: 'localhost',
  NODE_ENV: 'development',
  PORT: 5000,
}

const { CLIENT_ORIGIN_URL, EXPRESS_APP_HOSTNAME, EXPRESS_APP_PORT, NODE_ENV } =
  process.env

export const config = Object.freeze({
  CLIENT_ORIGIN_URL: defaultsTo(
    CLIENT_ORIGIN_URL,
    defaultConfig.CLIENT_ORIGIN_URL
  ),
  JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
  HOSTNAME: defaultsTo(EXPRESS_APP_HOSTNAME, defaultConfig.HOSTNAME),
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: defaultsTo(NODE_ENV, defaultConfig.NODE_ENV),
  PORT: defaultsTo(EXPRESS_APP_PORT, defaultConfig.PORT),
})

export function composeCorsOptions() {
  return {
    origin: config.CLIENT_ORIGIN_URL,
  }
}
