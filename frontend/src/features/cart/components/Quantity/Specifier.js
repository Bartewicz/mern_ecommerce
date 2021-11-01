import React from 'react'

import QuantityButton from './Button'
import QuantityInput from './Input'

function QuantitySpecifier({
  amount,
  alreadyInCart,
  countInStock,
  maxAvailable,
  isOutOfStock,
  productId,
  setAmount,
}) {
  const decreaseDisabled = amount <= 1
  const increaseDisabled =
    alreadyInCart === 0
      ? amount === countInStock
      : countInStock - alreadyInCart - amount === 0

  const onDecrease = () => setAmount((previous) => previous - 1)
  const onIncrease = () => setAmount((previous) => previous + 1)
  return (
    <div className="d-inline-flex product-cart-factor">
      <QuantityButton
        onClick={onDecrease}
        disabled={decreaseDisabled}
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
        disabled={increaseDisabled}
        variant="+"
      />
    </div>
  )
}

export default QuantitySpecifier
