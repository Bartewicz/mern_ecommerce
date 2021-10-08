import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

import MainInfo from './MainInfo'
import BackButton from '../../components/BackButton'
import Container from 'react-bootstrap/esm/Container'
import { useEffect, useState } from 'react'

function ProductScreen({ match }) {
  const { id } = match.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      const { data: product } = await axios.get(`/api/products/${id}`)
      setProduct(product)
    }
    getProduct()
  }, [id])

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
