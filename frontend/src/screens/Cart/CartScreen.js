import { useContext, useCallback, useState, useRef } from 'react'
import { Button, Container, FormCheck, ListGroup } from 'react-bootstrap'

import { EmptyCartPlaceholder } from './EmptyCartPlaceholder'
import { BackButton } from 'components/BackButton'
import { CartItem } from 'features/cart/components/CartItem'
import { CartContext } from 'features/cart/useCart.hook'
import { byId } from 'utils'

export function CartScreen() {
  const { cart, isCartEmpty, removeAll, removeMultiple } =
    useContext(CartContext)
  const [checked, setChecked] = useState([])
  const checkboxGroupRef = useRef(null)

  const isNoneChecked = checked.length === 0

  const toggleChecked = useCallback((productId) => {
    if (checked.includes(productId)) {
      setChecked(checked.filter(byId(productId)))
      return
    }
    setChecked(checked.concat(productId).sort())
  })
  const onPartialRemove = () => {
    removeMultiple({ ids: checked })
  }

  return (
    <Container>
      <h1 className="py-3">{'Your cart'}</h1>
      <BackButton />

      <form className="row d-flex align-items-center p-4 pt-0">
        <div className="d-flex align-items-center mb-4">
          <FormCheck
            ref={checkboxGroupRef}
            type="checkbox"
            className="d-inline-block"
            disabled={isCartEmpty}
          />
          <Button
            className="w-auto ml-3"
            tabIndex={0}
            onClick={onPartialRemove}
            disabled={isNoneChecked}
            variant="outline-primary"
          >
            {'Remove selected'}
          </Button>
          <Button
            className="w-auto ml-3"
            tabIndex={0}
            onClick={removeAll}
            disabled={isCartEmpty}
            variant="outline-primary"
          >
            {'Clear cart'}
          </Button>
        </div>
        <EmptyCartPlaceholder />
        <ListGroup variant="flush">
          {cart.items.map(({ _id }) => (
            <CartItem
              key={`cart-item-${_id}`}
              productId={_id}
              onToggleChecked={toggleChecked}
            />
          ))}
        </ListGroup>
      </form>
    </Container>
  )
}
