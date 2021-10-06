import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

import CaffeineRank from '../../components/CaffeineRank'
import Rating from '../../components/Rating'
import PriceAndSize from './PriceAndSize'
import AddToCart from './AddToCart'

function MainInfo({ product }) {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h2 className="mt-3">{product.name}</h2>
      </ListGroup.Item>
      <ListGroup.Item>
        <Rating rating={product.rating} reviewsNumber={product.numReviews} />
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="mb-0">{'brand:'}</span>
        <Link to={`/brand/${product.brand}`}>
          <span className="ml-1 my-1">{product.brand}</span>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <CaffeineRank caffeineRank={product.caffeine} />
      </ListGroup.Item>
      <ListGroup.Item>
        <span>{`Type: ${product.type}`}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <PriceAndSize price={product.price} size={product.size} />
        <AddToCart
          countInStock={product.countInStock}
          productId={product._id}
        />
      </ListGroup.Item>
    </ListGroup>
  )
}

export default MainInfo
