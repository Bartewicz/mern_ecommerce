import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ReactComponent as NotFoundIcon } from './assets/undraw_coffee_break.svg'

export function NotFound() {
  return (
    <Container className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <NotFoundIcon
        className="main-content-image"
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
