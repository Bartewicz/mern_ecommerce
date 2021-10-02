import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <header>
      <Navbar
        className="fixed-top"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">P. Kaffka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="mr-4">
                <i className="fas fa-shopping-cart" />
                Koszyk
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user" />
                Zaloguj
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
