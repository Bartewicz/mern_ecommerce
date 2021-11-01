import { memo } from 'react'

export const IconsSet = memo(
  ({
    maxIcons,
    values,
    typeToIconMap,
    toTypeReducer,
    containerTagName = 'span',
    iconTagName = 'span',
    containerClassNames = '',
    iconClassNames = '',
  }) => {
    const Container = containerTagName
    const Icon = iconTagName

    const iconByType = (map) => {
      return (type, key) => (
        <Icon key={key} className={`${map[type]} ${iconClassNames}`} />
      )
    }

    const iconsSet = new Array(maxIcons)
      .fill(undefined)
      .reduce(toTypeReducer(values), [])
      .map(iconByType(typeToIconMap))

    return <Container className={containerClassNames}>{iconsSet}</Container>
  }
)
