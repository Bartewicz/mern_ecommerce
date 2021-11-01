import { Col, Container, Row } from 'react-bootstrap'

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
