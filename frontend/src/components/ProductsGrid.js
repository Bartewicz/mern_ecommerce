import { Row } from 'react-bootstrap'

import { ProductCard } from './ProductCard'

export function ProductsGrid({ products }) {
  const toProductListItem = (product) => (
    <ProductCard key={product._id} product={product} />
  )

  return <Row>{products.map(toProductListItem)}</Row>
}
