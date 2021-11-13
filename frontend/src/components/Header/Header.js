import { memo, useContext, useState } from 'react'

import { Badge } from '../Badge'
import styles from './Navbar.module.css'
import { NavbarCollapse } from './NavbarCollapse'
import { NavbarToggler } from './NavbarToggler'
import { NavBrand } from './NavBrand'
import { NavLink } from './NavLink'
import { CartContext } from 'features/cart/useCart.hook'

export const Header = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const { cart } = useContext(CartContext)
  const itemsInCart = cart.items.length
  const hasCartItems = itemsInCart > 0

  const toggleCollapsed = () => setCollapsed((prev) => !prev)
  const preventScrolling = (event) => event.preventDefault()

  return (
    <header role="banner">
      <nav className={styles.navbar} onTouchMove={preventScrolling}>
        <NavBrand />
        <NavbarToggler onClick={toggleCollapsed} />
        <NavbarCollapse collapsed={collapsed}>
          <div className={styles.navbarNav}>
            <NavLink to="/cart">
              <span className="fas fa-shopping-cart">
                <Badge value={itemsInCart} visible={hasCartItems} />
              </span>
              {'Cart'}
            </NavLink>
            <NavLink to="/login">
              <span className="fas fa-user" />
              {'Login'}
            </NavLink>
          </div>
        </NavbarCollapse>
      </nav>
    </header>
  )
})
