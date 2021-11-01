import { isNullOrUndefined } from '@mr-bean/shared'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import { useGetProductById } from '../../api/products.hooks'
import BackButton from '../../components/BackButton'
import { Spinner } from '../../components/Spinner'
import MainInfo from './MainInfo'

function ProductScreen({ match }) {
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
          <MainInfo product={product} />
        </Col>
      </Row>

      <Row className="mt-5">
        <p>{product.description}</p>
      </Row>
    </Container>
  )
}

export default ProductScreen
