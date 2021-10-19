import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import QuantityButton from './QuantityButton'

function AddToCart({ countInStock, productId }) {
  const [quantity, setQuantity] = useState(1)

  const outOfStock = countInStock === 0
  const available = outOfStock ? 'Out of stock' : `${countInStock} available`
  const minQuantity = 1
  const maxQuantity = countInStock
  const decreaseDisabled = quantity === minQuantity
  const increaseDisabled = quantity === maxQuantity

  const decrease = () => setQuantity((prevQuantity) => prevQuantity - 1)
  const increase = () => setQuantity((prevQuantity) => prevQuantity + 1)

  return (
    <Form>
      <div className="product-cart-factor no-select d-inline-block mb-2">
        <QuantityButton
          onClick={decrease}
          disabled={decreaseDisabled}
          label="-"
        />
        <Form.Control
          id={`product-${productId}-quantity-input`}
          value={quantity}
          disabled={outOfStock}
          htmlSize={2}
          readOnly
          className="product-quantity-input d-inline-block text-center"
        />
        <QuantityButton
          onClick={increase}
          disabled={increaseDisabled}
          label="+"
        />
      </div>
      <span className="ml-2">{available}</span>

      <Button className="product-cart-factor btn-block d-block" type="button">
        {'Add to cart'}
      </Button>
    </Form>
  )
}

export default AddToCart
