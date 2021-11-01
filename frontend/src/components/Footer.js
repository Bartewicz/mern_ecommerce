import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export function Footer() {
  return (
    <footer role="contentinfo">
      <Container>
        <Row>
          <Col className="text-center py-3">&copy;{' 2021 MR. CAFFEINOV'}</Col>
        </Row>
      </Container>
    </footer>
  )
}
