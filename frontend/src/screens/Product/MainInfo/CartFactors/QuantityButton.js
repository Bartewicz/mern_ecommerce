import Button from 'react-bootstrap/Button'

function QuantityButton({ label, disabled, onClick }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline-primary"
      size="sm"
      className="product-quantity-btn"
    >
      {label}
    </Button>
  )
}

export default QuantityButton
