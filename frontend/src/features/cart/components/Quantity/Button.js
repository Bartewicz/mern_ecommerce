import { SecondaryButton } from 'components/Buttons/SecondaryButton'

export function QuantityButton({ variant, disabled, onClick }) {
  return (
    <SecondaryButton
      onClick={onClick}
      disabled={disabled}
      className="product-quantity-btn"
      label={variant}
    />
  )
}
