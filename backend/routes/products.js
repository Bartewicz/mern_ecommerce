import { Router } from 'express'

import { products } from '../data/products.js'

const router = new Router()

router.get('/api/products', (req, res) => {
  res.json(products)
})
router.get('/api/products/:id', (req, res) => {
  const { id } = req.params
  // TODO: remove hardcoded products collection as soon as add products to mongoDB
  // eslint-disable-next-line no-underscore-dangle
  const product = products.find((product) => product._id === id)
  res.json(product)
})
