import { useHistory } from 'react-router-dom'

import styles from './BackButton.module.css'

export function BackButton() {
  const { goBack } = useHistory()

  return (
    <button
      className={styles.backButton}
      onClick={goBack}
      tabIndex={0}
      type="button"
    >
      {'Go back'}
    </button>
  )
}
