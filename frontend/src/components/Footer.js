import { memo } from 'react'

import styles from './Footer.module.css'

export const Footer = memo(() => {
  return (
    <footer className={styles.footer} role="contentinfo">
      &copy;{' 2021 MR. CAFFEINOV'}
    </footer>
  )
})
