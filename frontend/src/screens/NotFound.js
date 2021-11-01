import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <Container className="text-center">
      <Image
        className="not-found"
        src="/images/coffee-break.png"
        title="Time for a little coffee break."
        alt="Two people wearing reflective vests stand and talk during a coffee break."
      />
      <h3>{"Sorry, we didn't find what you were looking for..."}</h3>
      <p>
        {"But it's always a good opportunity to have a little coffee break!"}
      </p>
      <p>
        {'You can find your favourite coffee '}
        <Link to="/">{'here'}</Link>
        {'.'}
      </p>
    </Container>
  )
}
