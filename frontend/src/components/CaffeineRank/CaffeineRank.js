import { IconsSet } from '../IconsSet'
import {
  MAX_BEANS,
  toCoffeeBeanTypes,
  typeToIconMap,
} from './CaffeineRank.utils'

export function CaffeineRank({ caffeineRank }) {
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
