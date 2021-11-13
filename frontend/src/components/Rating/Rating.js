import { IconsSet } from '../IconsSet'
import styles from './Rating.module.css'
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
      <span className={styles.rating}>{`${reviewsNumber} reviews`}</span>
    </>
  )
}
