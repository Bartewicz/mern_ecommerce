export const MAX_STARS = 5
export const STAR_TYPE = {
  FULL: 'full',
  HALF: 'half',
  EMPTY: 'empty',
}

export const typeToIconMap = {
  [STAR_TYPE.FULL]: 'fas fa-star',
  [STAR_TYPE.HALF]: 'fas fa-star-half-alt',
  [STAR_TYPE.EMPTY]: 'far fa-star',
}

export function toStarTypes(rating) {
  try {
    const ratingString = rating.toString()
    const full = Number(ratingString[0])
    const hasHalf = ratingString.endsWith('.5')
    return (starTypes, current, index) => {
      if (index < full) {
        starTypes.push(STAR_TYPE.FULL)
      } else if (index === full && hasHalf) {
        starTypes.push(STAR_TYPE.HALF)
      } else {
        starTypes.push(STAR_TYPE.EMPTY)
      }
      return starTypes
    }
  } catch {
    return (initialValue) => initialValue
  }
}
