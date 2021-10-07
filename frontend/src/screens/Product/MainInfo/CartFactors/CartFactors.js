import AddToCart from './AddToCart'
import PriceAndSize from './PriceAndSize'

function CartFactors({ productId, countInStock, price, size }) {
  return (
    <>
      <PriceAndSize price={price} size={size} />
      <AddToCart countInStock={countInStock} productId={productId} />
    </>
  )
}

export default CartFactors
