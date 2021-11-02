import { Container } from 'react-bootstrap'

import { BackButton } from 'components/BackButton'

export const CartScreen = () => {
  return (
    <Container>
      <h1 className="py-3">{'Your cart'}</h1>
      <BackButton />
    </Container>
  )
}
