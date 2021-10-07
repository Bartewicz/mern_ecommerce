import IconsSet from './IconsSet'
import {
  COFFEE_BEAN_TYPE,
  MAX_BEANS,
  toCoffeeBeanTypes,
  typeToIconMap,
} from './CaffeineRank.utils'

const caffeineRankDeterminants = {
  maxIcons: MAX_BEANS,
  values: COFFEE_BEAN_TYPE,
  typeToIconMap: typeToIconMap,
  toTypeReducer: toCoffeeBeanTypes,
}

function CaffeineRank({ caffeineRank }) {
  return (
    <>
      <span>{'Coffeine: '}</span>
      <IconsSet
        {...{
          ...caffeineRankDeterminants,
          values: caffeineRank,
        }}
      />
    </>
  )
}

export default CaffeineRank
