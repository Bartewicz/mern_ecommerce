import { memo, useContext } from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { Badge } from './Badge'
import { CartContext } from 'features/cart/useCart.hook'

export const Header = memo(() => {
  const { cart } = useContext(CartContext)
  const itemsInCart = cart.items.length
  const hasCartItems = itemsInCart > 0

  return (
    <header role="banner">
      <Navbar className="fixed-top" variant="dark" expand="lg" collapseOnSelect>
        <Container className="px-4">
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <Image src="/images/logo-60x60.png" className="logo" />
              {'Mr. Bean'}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="mr-4">
                  <span className="fas fa-shopping-cart">
                    <Badge value={itemsInCart} visible={hasCartItems} />
                  </span>
                  {'Cart'}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <span className="fas fa-user" />
                  {'Login'}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
})
