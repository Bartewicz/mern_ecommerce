import Link from 'react-router-dom/Link'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'

function NotFound() {
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

export default NotFound
