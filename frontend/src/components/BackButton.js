import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export function BackButton() {
  const { goBack } = useHistory()

  return (
    <Button
      className="btn btn-light bg-transparent px-0 mb-3"
      onClick={goBack}
      as="span"
      tabIndex={0}
    >
      {'Go back'}
    </Button>
  )
}
