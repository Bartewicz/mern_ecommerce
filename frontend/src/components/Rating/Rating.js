import IconsSet from '../IconsSet'
import { MAX_STARS, toStarTypes, typeToIconMap } from './Rating.utils'

function Rating({ rating, reviewsNumber }) {
  return (
    <>
      <IconsSet
        maxIcons={MAX_STARS}
        typeToIconMap={typeToIconMap}
        toTypeReducer={toStarTypes}
        values={rating}
        containerClassNames="rating-stars"
      />
      <span className="ml-1">{`${reviewsNumber} reviews`}</span>
    </>
  )
}

export default Rating
