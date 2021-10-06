import { iconByType, toStarTypes } from './Rating.utils'

const MAX_STARS = 5

function Rating({ rating, reviewsNumber }) {
  const stars = new Array(MAX_STARS)
    .fill(undefined)
    .reduce(toStarTypes(rating), [])
    .map(iconByType)

  return (
    <div className="rating">
      <span className="stars">{stars}</span>
      <span className="ml-1">{`${reviewsNumber} reviews`}</span>
    </div>
  )
}

export default Rating
