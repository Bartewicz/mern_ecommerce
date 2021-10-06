import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import MainInfo from './MainInfo'
import products from '../../products'
import BackButton from '../../components/BackButton'
import Container from 'react-bootstrap/esm/Container'

function byId(id) {
  return (product) => product._id === id
}

function ProductScreen({ match }) {
  const product = products.find(byId(match.params.id))

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
