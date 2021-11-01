import { useCallback, useReducer, useState } from 'react'

import { defaultsTo } from '@mr-bean/shared'

import { byKeyAndValue } from '../../../utils'
import { addItem, increaseQuantityByAmount } from '../cart.actions'
import { cartInitialState, cartReducer } from '../cart.reducer'
import AddToCart from './AddToCart'
import CountInStock from './CountInStock'
import Quantity from './Quantity'

function CartFactors({ productId, countInStock }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)
  const [amount, setAmount] = useState(1)

  const productInCart = defaultsTo(
    cart.items.find(byKeyAndValue({ productId })),
    {}
  )
  const cartQuantity = defaultsTo(productInCart.quantity, 0)

  const isOutOfStock = countInStock === 0
  const maxAvailable = countInStock - cartQuantity
  const isAddDisabled = isOutOfStock || cartQuantity === countInStock

  const onAddToCart = useCallback(() => {
    if (maxAvailable - amount < amount) {
      setAmount(maxAvailable - amount)
    }
    if (cartQuantity === countInStock) return
    if (cartQuantity === 0) {
      dispatch(addItem(productId, amount))
      return
    }
    dispatch(increaseQuantityByAmount(productId, amount))
  }, [amount, cartQuantity, countInStock, dispatch, productId])

  return (
    <>
      <div className="no-select d-inline-block mb-2">
        <Quantity.Specifier
          amount={amount}
          alreadyInCart={cartQuantity}
          countInStock={countInStock}
          maxAvailable={maxAvailable}
          isOutOfStock={isOutOfStock}
          productId={productId}
          setAmount={setAmount}
        />
        <CountInStock countInStock={countInStock} />
      </div>
      <div className="d-inline-flex product-cart-factor">
        <AddToCart disabled={isAddDisabled} onClick={onAddToCart} />
      </div>
    </>
  )
}

export default CartFactors
