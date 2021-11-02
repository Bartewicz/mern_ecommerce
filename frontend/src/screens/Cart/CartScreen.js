import { CloseButton, Col, Container, Image, Row } from 'react-bootstrap'

import { isNullOrUndefined } from '@mr-bean/shared'
import { useGetProducts } from 'api/products.hooks'
import { BackButton } from 'components/BackButton'
import { Spinner } from 'components/Spinner'
import { CountInStock, QuantitySpecifier } from 'features/cart/components'
import { useCart } from 'features/cart/useCart.hook'
import { CartContext } from 'features/cart/useCartContext.hook'
import { byId } from 'utils'

export const CartScreen = () => {
  const { cart, decreaseQuantity, increaseQuantity, removeItem } =
    useCart(CartContext)
  const { data: products } = useGetProducts()

  if (isNullOrUndefined(products)) {
    return <Spinner centered />
  }

  return (
    <Container>
      <h1 className="py-3">{'Your cart'}</h1>
      <BackButton />
      {cart.items.map(({ _id: productId, quantity }) => {
        const product = products.find(byId(productId))

        return (
          <Row
            key={`cart-item-${productId}`}
            className="d-flex align-items-center"
          >
            <Col md={3} className="d-flex justify-content-center">
              <Image
                className="cart-item-image"
                src={product.image}
                alt={product.name}
                fluid
              />
            </Col>
            <Col md={8}>
              <h3 className="my-4">{product.name}</h3>
              <QuantitySpecifier
                alreadyInCart={quantity}
                amount={quantity}
                countInStock={product.countInStock}
                maxAvailable={product.countInStock}
                productId={productId}
                onDecrease={() => decreaseQuantity({ productId })}
                onIncrease={() => increaseQuantity({ productId })}
              />
              <CountInStock countInStock={product.countInStock} />
            </Col>
            <Col md={1}>
              <CloseButton onClick={() => removeItem({ productId })} />
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}
