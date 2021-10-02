import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; 2021 Pan Kaffka</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
