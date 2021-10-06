import { iconByType, toCoffeeBeanTypes } from './CaffeineRank.utils'

const MAX_BEANS = 7

function CaffeineRank({ caffeineRank }) {
  const beans = new Array(MAX_BEANS)
    .fill(undefined)
    .reduce(toCoffeeBeanTypes(caffeineRank), [])
    .map(iconByType)

  return beans
}

export default CaffeineRank
