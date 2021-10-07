export const MAX_BEANS = 7
export const COFFEE_BEAN_TYPE = {
  FULL: 'full',
  EMPTY: 'empty',
}

export const typeToIconMap = {
  [COFFEE_BEAN_TYPE.FULL]: 'fas fa-circle',
  [COFFEE_BEAN_TYPE.EMPTY]: 'far fa-circle',
}

export function toCoffeeBeanTypes(caffeineRank) {
  const rankString = caffeineRank.toString()
  const full = Number(rankString[0])
  return (coffeeBeanTypes, current, index) => {
    if (index < full) {
      coffeeBeanTypes.push(COFFEE_BEAN_TYPE.FULL)
    } else {
      coffeeBeanTypes.push(COFFEE_BEAN_TYPE.EMPTY)
    }
    return coffeeBeanTypes
  }
}
