import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export function BackButton() {
  const { goBack } = useHistory()

  return (
    <Button
      className="btn btn-light bg-transparent px-0"
      onClick={goBack}
      as="span"
      tabIndex={0}
    >
      {'Go back'}
    </Button>
  )
}
