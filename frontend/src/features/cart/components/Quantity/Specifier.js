import React from 'react'

import { QuantityButton } from './Button'
import { QuantityInput } from './Input'

export function QuantitySpecifier({
  amount,
  alreadyInCart,
  countInStock,
  isOutOfStock = false,
  maxAvailable,
  productId,
  onDecrease,
  onIncrease,
}) {
  const isDecreaseDisabled = amount <= 1
  const isIncreaseDisabled = countInStock - alreadyInCart - amount <= 0

  return (
    <div className="d-inline-flex product-cart-factor">
      <QuantityButton
        onClick={onDecrease}
        disabled={isDecreaseDisabled}
        variant="-"
      />
      <QuantityInput
        productId={productId}
        disabled={isOutOfStock}
        max={maxAvailable}
        value={amount}
      />
      <QuantityButton
        onClick={onIncrease}
        disabled={isIncreaseDisabled}
        variant="+"
      />
    </div>
  )
}
