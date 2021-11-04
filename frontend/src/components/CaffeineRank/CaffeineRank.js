import { IconsSet } from '../IconsSet'
import {
  MAX_BEANS,
  toCoffeeBeanTypes,
  typeToIconMap,
} from './CaffeineRank.utils'

export function CaffeineRank({ caffeineRank, className }) {
  return (
    <div className={className}>
      <span>{'Coffeine: '}</span>
      <IconsSet
        maxIcons={MAX_BEANS}
        typeToIconMap={typeToIconMap}
        toTypeReducer={toCoffeeBeanTypes}
        values={caffeineRank}
      />
    </div>
  )
}
