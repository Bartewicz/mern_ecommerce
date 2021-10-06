import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import CaffeineRank from '../../components/CaffeineRank'
import Rating from '../../components/Rating'

function MainInfo({ product }) {
  const { countInStock } = product

  const available =
    countInStock === 0 ? 'Out of stock' : `${countInStock} available`

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
        {'Coffeine: '}
        <CaffeineRank caffeineRank={product.caffeine} />
      </ListGroup.Item>
      <ListGroup.Item>
        <span>{`Type: ${product.type}`}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <div className="my-3">
          <h3 className="d-inline align-baseline">{`$${product.price}`}</h3>
          <span className="align-baseline text-muted ml-2">{`${product.size}kg`}</span>
        </div>
        <div>
          <Button className="btn-block" type="button">
            {'Add to cart'}
          </Button>
          <span className="ml-2">{available}</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default MainInfo
