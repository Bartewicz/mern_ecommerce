import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
  const toProductListItem = (product) => (
    <Col sm={12} md={6} lg={4}>
      <Product product={product} />
    </Col>
  )

  return (
    <>
      <h1 className="py-3">Time for you favourite coffee</h1>
      <Row>{products.map(toProductListItem)}</Row>
    </>
  )
}

export default HomeScreen
