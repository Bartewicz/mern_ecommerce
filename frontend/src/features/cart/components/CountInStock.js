export function CountInStock({ countInStock }) {
  const available =
    countInStock === 0 ? 'Out of stock' : `${countInStock} available`

  return <span className="ml-2">{available}</span>
}
