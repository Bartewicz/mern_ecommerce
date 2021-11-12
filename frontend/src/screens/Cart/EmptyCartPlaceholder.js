import { useContext } from 'react'
import { Container } from 'react-bootstrap'

import { ReactComponent as EmptyCartSVG } from './assets/undraw_empty_cart.svg'
import { CartContext } from 'features/cart/useCart.hook'

export const EmptyCartPlaceholder = () => {
  const { isCartEmpty } = useContext(CartContext)

  if (!isCartEmpty) return null

  return (
    <Container className="text-center mt-4">
      <h3>{'Your cart is empty'}</h3>
      <p>{'Add some items to the cart first'}</p>
      <EmptyCartSVG className="main-content-image" />
    </Container>
  )
}
