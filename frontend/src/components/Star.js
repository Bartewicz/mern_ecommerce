import { iconByType } from './Star.utils'

const Star = ({ type }) => {
  const icon = iconByType(type)
  return <span>{icon}</span>
}

export default Star
