import Card from 'react-bootstrap/Card'

import Rating from './Rating'

function Product({ product }) {
  return (
    <Card className="my-3 p-4 pb-1">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body className="px-2">
        <a href={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating
            rating={product.rating.toFixed(1)}
            reviewsNumber={product.numReviews}
          />
        </Card.Text>

        <Card.Text as="h4" className="mt-2">{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
