import Button from 'react-bootstrap/Button'

function AddToCartButton({ label, disabled, onClick }) {
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

export default AddToCartButton
