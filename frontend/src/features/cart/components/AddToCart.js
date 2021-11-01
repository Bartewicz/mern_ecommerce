import React from 'react'

import { Button } from 'react-bootstrap'

function AddToCart({ disabled, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="product-cart-factor btn-block d-block"
      disabled={disabled}
      type="button"
    >
      {'Add to cart'}
    </Button>
  )
}

export default AddToCart
