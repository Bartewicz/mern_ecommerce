import { useHistory } from 'react-router-dom'

function BackButton() {
  const { goBack } = useHistory()

  return (
    <span className="btn btn-light px-0 my-3" onClick={goBack}>
      {'Go back'}
    </span>
  )
}

export default BackButton
