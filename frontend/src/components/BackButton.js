import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function BackButton() {
  const { goBack } = useHistory()

  return (
    <Button
      className="btn btn-light px-0 my-3"
      onClick={goBack}
      as="span"
      tabIndex={0}
    >
      {'Go back'}
    </Button>
  )
}

export default BackButton
