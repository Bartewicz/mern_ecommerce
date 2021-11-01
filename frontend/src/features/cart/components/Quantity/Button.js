import Button from 'react-bootstrap/Button'

function QuantityButton({ variant, disabled, onClick }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline-primary"
      size="sm"
      className="product-quantity-btn"
    >
      {variant}
    </Button>
  )
}

export default QuantityButton
