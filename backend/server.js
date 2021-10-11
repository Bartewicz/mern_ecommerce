const express = require('express')
const config = require('./config')
const products = require('./data/products')

const { HOSTNAME, PORT, NODE_ENV } = config

const app = express()

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
  console.log(`Server running in ${NODE_ENV} mode on port: ${PORT}`)
)
