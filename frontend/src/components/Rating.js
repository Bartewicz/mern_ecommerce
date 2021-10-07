import IconsSet from './IconsSet'
import {
  MAX_STARS,
  STAR_TYPE,
  toStarTypes,
  typeToIconMap,
} from './Rating.utils'

const ratingDeterminants = {
  maxIcons: MAX_STARS,
  values: STAR_TYPE,
  typeToIconMap: typeToIconMap,
  toTypeReducer: toStarTypes,
}

function Rating({ rating, reviewsNumber }) {
  return (
    <>
      <IconsSet
        {...{
          ...ratingDeterminants,
          values: rating,
          containerClassNames: 'rating-stars',
        }}
      />
      <span className="ml-1">{`${reviewsNumber} reviews`}</span>
    </>
  )
}

export default Rating
