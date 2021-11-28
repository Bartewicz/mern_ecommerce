import cors from 'cors'
import express from 'express'

import { composeCorsOptions, config } from './config.js'
import { database } from './database/index.js'
import { failSafeHandler } from './errors/failSafeHandler.js'
import { errorLogger } from './errors/logger.js'
import { unknownRouteHandler } from './errors/unknownRouteHandler.js'
import { router } from './routes/router.js'
import logger from './utils/logger.js'
import { requestLogger } from './utils/requestLogger.js'

const { HOSTNAME, PORT, NODE_ENV } = config

const app = express()
database.initializeConnection()

app.use(cors(composeCorsOptions()))

app.use(requestLogger)
app.use('/api', router)
app.use(unknownRouteHandler)

app.use(errorLogger)
// TODO: add error responder
app.use(failSafeHandler)

app.listen(PORT, HOSTNAME, () =>
  logger(`Server running in ${NODE_ENV} mode at: ${HOSTNAME}:${PORT}`)
)
