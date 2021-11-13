import { memo } from 'react'

import styles from './PrimaryButton.module.css'
import { joinClassNames } from 'utils'

export const PrimaryButton = memo(
  ({ disabled, label, onClick, className = '' }) => {
    const classNames = joinClassNames(styles.primaryButton, className)

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
