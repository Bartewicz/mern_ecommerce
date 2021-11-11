import { useCallback, memo } from 'react'

export const TrashIcon = memo(({ onClick }) => {
  const handleKeyPress = useCallback((event) => {
    event.preventDefault()
    if (event.keyCode === 13) onClick()
  }, [])

  return (
    <span
      className="trash-icon far fa-trash-alt"
      onClick={onClick}
      onKeyPress={handleKeyPress}
      aria-label="Delete"
      role="button"
      tabIndex={0}
    />
  )
})
