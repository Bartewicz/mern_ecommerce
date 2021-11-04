import { Container } from 'react-bootstrap'

import { isNullOrUndefined } from '@mr-bean/shared'
import { ProductsGrid } from 'components/ProductsGrid'
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
      <ProductsGrid products={products} />
    </Container>
  )
}
