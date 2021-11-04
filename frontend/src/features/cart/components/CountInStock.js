import { memo } from 'react'

export const CountInStock = memo(({ count }) => {
  const label = count === 0 ? 'Out of stock' : `In stock: ${count}`

  return <span className="ml-2 mb-0">{label}</span>
})
