import { Container, Row } from 'react-bootstrap'

import { isNullOrUndefined } from '@mr-bean/shared'
import { ProductCard } from 'components/ProductCard'
import { Spinner } from 'components/Spinner'
import { useGetProducts } from 'features/products/api/products.hooks'

export function HomeScreen() {
  const { data: products } = useGetProducts()

  if (isNullOrUndefined(products)) {
    return <Spinner centered />
  }

  return (
    <Container>
      <h1 className="py-3">{'Time for your favourite coffee'}</h1>
      <Row className="align-items-stretch">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  )
}
