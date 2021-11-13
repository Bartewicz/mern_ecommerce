import { PrimaryButton } from 'components/Buttons/PrimaryButton'

export const AddToCart = ({ disabled, onClick }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      disabled={disabled}
      className="product-cart-factor"
      label="Add to cart"
    />
  )
}
