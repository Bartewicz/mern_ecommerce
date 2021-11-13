/* eslint-disable jsx-a11y/control-has-associated-label */
import styles from './Navbar.module.css'
import { joinClassNames } from 'utils'

export const NavbarToggler = ({ onClick }) => {
  const togglerIcon = 'fas fa-bars'
  const iconClassNames = joinClassNames(styles.navbarTogglerIcon, togglerIcon)

  return (
    <button className={styles.navbarToggler} onClick={onClick} type="button">
      <span className={iconClassNames} />
    </button>
  )
}
