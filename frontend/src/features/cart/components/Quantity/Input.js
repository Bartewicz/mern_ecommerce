import React from 'react'

import { Form } from 'react-bootstrap'

export function QuantityInput({ productId, max, value, disabled }) {
  return (
    <Form.Control
      id={`product-${productId}-quantity-input`}
      max={max}
      min={1}
      value={value}
      disabled={disabled}
      htmlSize={2}
      readOnly
      className="product-quantity-input d-inline-block text-center"
    />
  )
}
