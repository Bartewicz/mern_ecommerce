import React from 'react'

import { QuantityButton } from './Button'
import { QuantityInput } from './Input'

export function QuantitySpecifier({
  amount,
  isOutOfStock = false,
  maxAvailable,
  productId,
  onDecrease,
  onIncrease,
}) {
  const isDecreaseDisabled = amount <= 1
  const isIncreaseDisabled = maxAvailable - amount <= 0

  return (
    <div className="product-cart-factor d-inline-flex no-select">
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
