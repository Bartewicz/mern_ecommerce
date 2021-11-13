import { useCallback, memo } from 'react'

import styles from './Trash.module.css'
import { joinClassNames } from 'utils'

export const TrashIcon = memo(({ onClick }) => {
  const handleKeyPress = useCallback((event) => {
    event.preventDefault()
    if (event.keyCode === 13) onClick()
  }, [])

  const icon = 'far fa-trash-alt'
  const classNames = joinClassNames(icon, styles.trash)

  return (
    <span
      className={classNames}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      aria-label="Delete"
      role="button"
      tabIndex={0}
    />
  )
})
