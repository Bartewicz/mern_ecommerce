import { memo } from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Header = memo(() => {
  return (
    <header role="banner">
      <Navbar
        className="fixed-top"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <Image src="/images/logo-60x60.png" className="logo" />
              {'Mr. Caffeinov'}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="mr-4">
                  <span className="fas fa-shopping-cart" />
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
