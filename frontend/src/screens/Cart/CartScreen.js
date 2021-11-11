import { useContext } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

import { BackButton } from 'components/BackButton'
import { CartItem } from 'features/cart/components/CartItem'
import { CartContext } from 'features/cart/useCartContext.hook'

export function CartScreen() {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <h1 className="py-3">{'Your cart'}</h1>
      <BackButton />
      <ListGroup variant="flush">
        {cart.items.map(({ _id }) => (
          <CartItem key={`cart-item-${_id}`} productId={_id} />
        ))}
      </ListGroup>
    </Container>
  )
}
