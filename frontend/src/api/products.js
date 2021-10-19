const PRODUCTS_URL = '/api/products'

export function getAllProducts() {
  return ({ signal }) => fetch(PRODUCTS_URL, { signal })
}

export function getProductById(id) {
  return ({ signal }) => fetch(`${PRODUCTS_URL}/${id}`, { signal })
}
