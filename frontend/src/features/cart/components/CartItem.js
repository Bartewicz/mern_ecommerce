import { useState, useContext } from 'react'
import { Col, FormCheck, Image, ListGroupItem } from 'react-bootstrap'

import { CartContext } from '../useCart.hook'
import { isNullOrUndefined } from '@mr-bean/shared'
import { CaffeineRank } from 'components/CaffeineRank'
import { TrashIcon } from 'components/Icons/Trash'
import { CountInStock, QuantitySpecifier } from 'features/cart/components'
import { useGetProductById } from 'features/products/api/products.hooks'
import { byId } from 'utils'

export function CartItem({ productId, checked, onToggleChecked }) {
  const { cart, decreaseQuantity, increaseQuantity, removeItem } =
    useContext(CartContext)
  const { quantity: alreadyInCart, countInStock } = cart.items.find(
    byId(productId)
  )
  const [amount, setAmount] = useState(alreadyInCart)

  const { data: product } = useGetProductById(productId)

  const maxAvailable = countInStock - alreadyInCart

  if (isNullOrUndefined(product)) {
    return null
  }

  const onDecrease = () => {
    decreaseQuantity({ productId })
    setAmount((prevAmount) => prevAmount - 1)
  }
  const onIncrease = () => {
    increaseQuantity({ productId })
    setAmount((prevAmount) => prevAmount + 1)
  }
  const onRemove = () => removeItem({ productId })

  return (
    <ListGroupItem className="row d-flex align-items-center p-4">
      <Col sm={3} className="d-flex align-items-center justify-content-center">
        <FormCheck
          id={`cart-item-checkbox-${productId}`}
          onChange={() => onToggleChecked(productId)}
          checked={checked}
          type="checkbox"
        />
        <Image
          className="cart-item-image"
          src={product.image}
          alt={product.name}
          fluid
        />
      </Col>
      <Col sm={8}>
        <h3 className="mt-3 mb-1">{product.name}</h3>
        <span>{product.brand}</span>
        <CaffeineRank caffeineRank={product.caffeine} className="mb-2" />
        <QuantitySpecifier
          amount={amount}
          maxAvailable={maxAvailable}
          productId={productId}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
        <CountInStock count={product.countInStock} />
      </Col>
      <Col sm={1} className="d-flex justify-content-end">
        <TrashIcon onClick={onRemove} />
      </Col>
    </ListGroupItem>
  )
}
