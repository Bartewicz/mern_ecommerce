import { useState } from 'react'
import { Button, Col, Image, ListGroupItem } from 'react-bootstrap'

import { CartContext, useCart } from '../useCartContext.hook'
import { isNullOrUndefined } from '@mr-bean/shared'
import { CaffeineRank } from 'components/CaffeineRank'
import { CountInStock, QuantitySpecifier } from 'features/cart/components'
import { useGetProductById } from 'features/products/api/products.hooks'
import { byId } from 'utils'

export function CartItem({ productId }) {
  const { cart, decreaseQuantity, increaseQuantity, removeItem } =
    useCart(CartContext)
  const { quantity } = cart.items.find(byId(productId))
  const [amount, setAmount] = useState(quantity)

  const { data: product } = useGetProductById(productId)

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
      <Col md={2} className="d-flex justify-content-center">
        <Image
          className="cart-item-image"
          src={product.image}
          alt={product.name}
          fluid
        />
      </Col>
      <Col md={8}>
        <h3 className="mt-3 mb-1">{product.name}</h3>
        <span>{product.brand}</span>
        <CaffeineRank caffeineRank={product.caffeine} className="mb-2" />
        <QuantitySpecifier
          alreadyInCart={quantity}
          amount={amount}
          countInStock={product.countInStock}
          maxAvailable={product.countInStock}
          productId={productId}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
        <CountInStock count={product.countInStock} />
      </Col>
      <Col md={2} className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          size="sm"
          onClick={onRemove}
          aria-label="Delete"
        >
          {'Remove'}
        </Button>
      </Col>
    </ListGroupItem>
  )
}
