import {
  MAX_BEANS,
  toCoffeeBeanTypes,
  typeToIconMap,
} from './CaffeineRank.utils'
import IconsSet from './IconsSet'

function CaffeineRank({ caffeineRank }) {
  return (
    <>
      <span>{'Coffeine: '}</span>
      <IconsSet
        maxIcons={MAX_BEANS}
        typeToIconMap={typeToIconMap}
        toTypeReducer={toCoffeeBeanTypes}
        values={caffeineRank}
      />
    </>
  )
}

export default CaffeineRank
