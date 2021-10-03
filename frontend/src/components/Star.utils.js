export const STAR_TYPE = {
  FULL: 'full',
  HALF: 'half',
  EMPTY: 'empty',
}

export function iconByType(type) {
  switch (type) {
    case STAR_TYPE.FULL:
      return <i className="fas fa-star" />
    case STAR_TYPE.HALF:
      return <i className="fas fa-star-half-alt" />
    case STAR_TYPE.EMPTY:
      return <i className="far fa-star" />
    default:
      return undefined
  }
}

export function toStarTypes(rating) {
  const full = Number(rating[0])
  const hasHalf = rating.endsWith('.5')
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
}
