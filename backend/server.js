import express from 'express'

import { config } from './config.js'
import { products } from './data/products.js'
import { database } from './database/index.js'

const { HOSTNAME, PORT, NODE_ENV } = config

const app = express()
database.initializeConnection()

app.get('/', (req, res) => {
  res.send('API is running...')
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find((product) => product._id === id)
  res.json(product)
})

app.listen(
  PORT,
  HOSTNAME,
  console.log(`Server running in ${NODE_ENV} mode at: ${HOSTNAME}:${PORT}`)
)
