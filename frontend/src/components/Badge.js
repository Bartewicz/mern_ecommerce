import { memo } from 'react'

import { joinClassNames } from 'utils'

export const Badge = memo(({ value, visible, variant = 'left' }) => {
  if (!visible) {
    return null
  }

  const className = joinClassNames(
    'cart-items-badge',
    `cart-items-badge--${variant}`
  )

  return (
    <div className="w-100 h-100 position-relative">
      <strong className={className}>{value}</strong>
    </div>
  )
})
