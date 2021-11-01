export function PriceAndSize({ price, size }) {
  return (
    <div className="my-3">
      <h3 className="d-inline align-baseline">{`$${price}`}</h3>
      <span className="align-baseline text-muted ml-2">{`${size}kg`}</span>
    </div>
  )
}
