import { useCallback, useState, useContext } from 'react'

import { CartContext } from '../useCart.hook'
import { AddToCart } from './AddToCart'
import { CountInCart } from './CountInCart'
import { CountInStock } from './CountInStock'
import { QuantitySpecifier } from './Quantity'
import { defaultsTo } from '@mr-bean/shared'
import { byId } from 'utils'

export function CartFactors({ productId, countInStock }) {
  const { cart, addItem, increaseQuantityByAmount } = useContext(CartContext)
  const [amount, setAmount] = useState(1)
  const productInCart = defaultsTo(cart.items.find(byId(productId)), {})
  const cartQuantity = defaultsTo(productInCart.quantity, 0)

  const isOutOfStock = countInStock === 0
  const maxAvailable = countInStock - cartQuantity
  const isAddDisabled = isOutOfStock || cartQuantity === countInStock

  const onDecrease = () => setAmount((previous) => previous - 1)
  const onIncrease = () => setAmount((previous) => previous + 1)

  const onAddToCart = useCallback(() => {
    if (maxAvailable - amount < amount) {
      setAmount(maxAvailable - amount || 1)
    }
    if (cartQuantity === countInStock) return
    if (cartQuantity === 0) {
      addItem({ amount, countInStock, productId })
      return
    }
    increaseQuantityByAmount({ productId, amount })
  }, [amount, cartQuantity, countInStock, productId])

  return (
    <>
      <div className="d-flex mb-2">
        <div className="d-flex align-items-center">
          <QuantitySpecifier
            amount={amount}
            alreadyInCart={cartQuantity}
            countInStock={countInStock}
            maxAvailable={maxAvailable}
            isOutOfStock={isOutOfStock}
            productId={productId}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <CountInStock count={countInStock} />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <AddToCart disabled={isAddDisabled} onClick={onAddToCart} />
        <CountInCart count={cartQuantity} />
      </div>
    </>
  )
}
