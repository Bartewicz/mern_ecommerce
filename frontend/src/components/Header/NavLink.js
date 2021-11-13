import styles from './Navbar.module.css'

export const NavLink = ({ children, to }) => {
  return (
    <a href={to} className={styles.navLink}>
      {children}
    </a>
  )
}
