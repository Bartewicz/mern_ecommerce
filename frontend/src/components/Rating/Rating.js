import { IconsSet } from '../IconsSet'
import { MAX_STARS, toStarTypes, typeToIconMap } from './Rating.utils'
import { joinClassNames } from 'utils'

export function Rating({ rating, reviewsNumber, className }) {
  const containerClassNames = joinClassNames(className, 'rating-stars')

  return (
    <>
      <IconsSet
        maxIcons={MAX_STARS}
        typeToIconMap={typeToIconMap}
        toTypeReducer={toStarTypes}
        values={rating}
        containerClassNames={containerClassNames}
      />
      <span className="ml-1">{`${reviewsNumber} reviews`}</span>
    </>
  )
}
