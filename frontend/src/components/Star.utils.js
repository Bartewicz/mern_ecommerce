export const STAR_TYPE = {
  FULL: 'full',
  HALF: 'half',
  EMPTY: 'empty',
}

const typeToIconMap = {
  [STAR_TYPE.FULL]: <span className="fas fa-star" />,
  [STAR_TYPE.HALF]: <span className="fas fa-star-half-alt" />,
  [STAR_TYPE.EMPTY]: <span className="far fa-star" />,
}

export function iconByType(type) {
  return typeToIconMap[type]
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
