import mongoose from 'mongoose'

import { Product } from '../../models/Product.js'
import { isNullOrUndefined, not } from '../../utilities/utils.js'

const { isValidObjectId } = mongoose

export async function getProducts(request, response) {
  const products = await Product.find({}).exec()

  response.json(products)
}

export async function getProductById(request, response) {
  const { id } = request.params
  if (not(isValidObjectId(id))) {
    throw new Error('ObjectId is not in valid format!')
  }

  const product = await Product.findById(id).exec()
  if (isNullOrUndefined(product)) {
    throw new Error(`Cannot find product with given id: ${id}`)
  }

  response.json(product)
}
