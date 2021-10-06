import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AddToCartButton from './AddToCartButton'

function AddToCart({ countInStock, productId }) {
  const [quantity, setQuantity] = useState(1)

  const outOfStock = countInStock === 0
  const available = outOfStock ? 'Out of stock' : `${countInStock} available`
  const minQuantity = 1
  const maxQuantity = countInStock
  const decreaseDisabled = quantity === minQuantity
  const increaseDisabled = quantity === maxQuantity

  const decrease = () => setQuantity((quantity) => --quantity)
  const increase = () => setQuantity((quantity) => ++quantity)

  return (
    <Form>
      <div className="mb-2 no-select">
        <AddToCartButton
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
        <AddToCartButton
          onClick={increase}
          disabled={increaseDisabled}
          label="+"
        />
        <span className="ml-2">{available}</span>
      </div>

      <Button className="product-add-to-cart-btn btn-block" type="button">
        {'Add to cart'}
      </Button>
    </Form>
  )
}

export default AddToCart
