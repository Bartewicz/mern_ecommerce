import mongoose from 'mongoose'

import { Product } from '../../models/Product.js'
import { isNullOrUndefined } from '@mr-bean/shared'

const { isValidObjectId } = mongoose

export async function getProducts(req, res) {
  const products = await Product.find({}).exec()

  res.json(products)
}

export async function getProductById(req, res) {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    res.status(400)
    throw new Error('ObjectId is not in valid format')
  }

  const product = await Product.findById(id).exec()
  if (isNullOrUndefined(product)) {
    res.status(404)
    throw new Error(`Cannot find product with given id: ${id}`)
  }

  res.json(product)
}
