import mongoose from 'mongoose'

import { config } from '../config.js'
import logger from '../utilities/logger.js'

function handleError(error) {
  logger.error(`Could not connect to the mongoDB. Error: ${error.message}`)
  process.exit(1)
}

function handleSuccess() {
  const { name } = mongoose.connection
  logger.success(`Server successfully connected to database: ${name}`)
}

function initializeConnection() {
  mongoose.connect(config.MONGO_URI).then(handleSuccess, handleError)
}

export const database = {
  initializeConnection,
}
