import { memo } from 'react'

import styles from './Badge.module.css'
import { joinClassNames } from 'utils'

export const Badge = memo(({ value, visible, variant = 'left' }) => {
  if (!visible) {
    return null
  }
  console.log(`styles.badge`, styles.badge)

  const className = joinClassNames(
    styles.badge,
    variant === 'left' ? styles.left : styles.right
  )

  return (
    <div className={styles.container}>
      <strong className={className}>{value}</strong>
    </div>
  )
})
