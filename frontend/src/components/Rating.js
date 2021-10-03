import Star from './Star'
import { toStarTypes } from './Star.utils'

const MAX_STARS = 5

const Rating = ({ rating, reviewsNumber }) => {
  function toStarIcon(type, index) {
    return <Star key={index} type={type} />
  }

  const stars = new Array(MAX_STARS)
    .fill(undefined)
    .reduce(toStarTypes(rating), [])
    .map(toStarIcon)

  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <span className="ml-1">{`${reviewsNumber} reviews`}</span>
    </div>
  )
}

export default Rating
