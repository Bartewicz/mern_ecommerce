import { Product } from '../../models/Product.js'

export async function getProducts(request, response) {
  const products = await Product.find({}).exec()

  response.json(products)
}

export async function getProductById(request, response) {
  const { id } = request.params
  const product = await Product.findById(id).exec()

  response.json(product)
}
