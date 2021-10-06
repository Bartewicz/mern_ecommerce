import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ProductCard from '../../components/ProductCard'
import products from '../../products'

function HomeScreen() {
  const toProductListItem = (product) => (
    <Col key={product._id} sm={12} md={6} lg={4}>
      <ProductCard product={product} />
    </Col>
  )

  return (
    <Container>
      <h1 className="py-3">{'Time for your favourite coffee'}</h1>
      <Row>{products.map(toProductListItem)}</Row>
    </Container>
  )
}

export default HomeScreen
