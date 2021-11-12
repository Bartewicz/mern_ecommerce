import { memo } from 'react'

export const CountInCart = memo(({ count }) => {
  if (count === 0) {
    return null
  }

  return <p className="text-nowrap ml-2 mb-0">{`In cart: ${count}`}</p>
})
