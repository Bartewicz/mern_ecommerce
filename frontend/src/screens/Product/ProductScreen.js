import { Col, Container, Image, Row } from 'react-bootstrap'

import { ProductMainInfo } from './MainInfo'
import { isNullOrUndefined } from '@mr-bean/shared'
import { useGetProductById } from 'api/products.hooks'
import { BackButton } from 'components/BackButton'
import { Spinner } from 'components/Spinner'

export function ProductScreen({ match }) {
  const { id } = match.params

  const { data: product } = useGetProductById(id)

  if (isNullOrUndefined(product)) {
    return <Spinner centered />
  }

  return (
    <Container>
      <BackButton />
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            className="product-main-image"
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={6}>
          <ProductMainInfo product={product} />
        </Col>
      </Row>

      <Row className="mt-5">
        <p>{product.description}</p>
      </Row>
    </Container>
  )
}
