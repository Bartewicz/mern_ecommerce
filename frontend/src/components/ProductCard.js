import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Rating } from './Rating'

export function ProductCard({ product }) {
  return (
    <Col sm={6} md={4} xl={3} className="my-3 ph-4 pb-0">
      <Card className="h-100">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body className="d-flex flex-column px-2">
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>

          <Rating
            rating={product.rating}
            reviewsNumber={product.numReviews}
            className="mt-auto"
          />

          <Card.Text as="h4" className="mt-2">{`$${product.price}`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
