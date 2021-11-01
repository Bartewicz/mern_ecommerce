import mongoose from 'mongoose'

import { Product } from '../../models/Product.js'
import { isNullOrUndefined } from '@mr-bean/shared'

const { isValidObjectId } = mongoose

export async function getProducts(request, response) {
  const products = await Product.find({}).exec()

  response.json(products)
}

export async function getProductById(request, response) {
  const { id } = request.params
  if (!isValidObjectId(id)) {
    response.status(400)
    throw new Error('ObjectId is not in valid format')
  }

  const product = await Product.findById(id).exec()
  if (isNullOrUndefined(product)) {
    response.status(404)
    throw new Error(`Cannot find product with given id: ${id}`)
  }

  response.json(product)
}
