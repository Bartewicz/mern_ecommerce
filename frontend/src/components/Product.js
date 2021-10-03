import React from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 pb-1">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            {`${product.rating} from ${product.numReviews} rewiews`}
          </div>
        </Card.Text>

        <Card.Text as="div">{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
