import { useCallback, useState } from 'react'

import { useCart } from '../useCart.hook'
import { CartContext } from '../useCartContext.hook'
import { AddToCart } from './AddToCart'
import { CountInStock } from './CountInStock'
import { QuantitySpecifier } from './Quantity'
import { defaultsTo } from '@mr-bean/shared'
import { byId } from 'utils'

export function CartFactors({ productId, countInStock }) {
  const { cart, addItem, increaseQuantityByAmount } = useCart(CartContext)
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
      <div className="no-select d-inline-block mb-2">
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
        <CountInStock countInStock={countInStock} />
      </div>
      <div className="d-inline-flex product-cart-factor">
        <AddToCart disabled={isAddDisabled} onClick={onAddToCart} />
      </div>
    </>
  )
}
