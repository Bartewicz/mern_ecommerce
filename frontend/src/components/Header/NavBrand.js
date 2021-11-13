import styles from './Navbar.module.css'

export const NavBrand = () => {
  return (
    <a href="/" className={styles.navbarBrand}>
      <img
        src="/images/logo-60x60.png"
        className={styles.navbarLogo}
        alt="Man smoking a pipe."
      />
      {'Mr. Bean'}
    </a>
  )
}
