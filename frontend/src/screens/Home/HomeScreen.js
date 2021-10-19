import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { getAllProducts } from '../../api/products'
import ProductCard from '../../components/ProductCard'
import { useAsync } from '../../hooks/useAsync'

function HomeScreen() {
  const { data: products } = useAsync(getAllProducts(), [])

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
