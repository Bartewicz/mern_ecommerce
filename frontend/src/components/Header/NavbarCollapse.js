import styles from './Navbar.module.css'
import { joinClassNames } from 'utils'

export const NavbarCollapse = ({ collapsed, children }) => {
  const classNames = joinClassNames(
    styles.navbarCollapse,
    collapsed && styles.navbarCollapseOpen
  )

  return <div className={classNames}>{children}</div>
}
