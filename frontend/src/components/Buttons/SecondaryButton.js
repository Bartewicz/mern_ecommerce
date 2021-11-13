import { memo } from 'react'

import styles from './SecondaryButton.module.css'
import { joinClassNames } from 'utils'

export const SecondaryButton = memo(
  ({ disabled, label, onClick, className = '' }) => {
    const classNames = joinClassNames(styles.secondaryButton, className)

    return (
      <button
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    )
  }
)
