import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import Rating from './Rating'

function Product({ product }) {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card className="my-3 p-4 pb-1">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body className="d-flex flex-column px-2">
          <Link to={`/product/${product._id}`}>
            <Card.Title>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              rating={product.rating}
              reviewsNumber={product.numReviews}
            />
          </Card.Text>

          <Card.Text as="h4" className="mt-2">{`$${product.price}`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
