import Container from 'react-bootstrap/Container'

import { useGetProducts } from '../../api/products.hooks'
import { ProductsGrid } from '../../components/ProductsGrid'

export function HomeScreen() {
  const { data: products } = useGetProducts([])

  return (
    <Container>
      <h1 className="py-3">{'Time for your favourite coffee'}</h1>
      <ProductsGrid products={products} />
    </Container>
  )
}
