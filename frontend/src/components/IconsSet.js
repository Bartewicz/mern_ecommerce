import React, { memo } from 'react'

function IconsSet({
  maxIcons,
  values,
  typeToIconMap,
  toTypeReducer,
  containerTagName = 'span',
  iconTagName = 'span',
  containerClassNames = '',
  iconClassNames = '',
}) {
  const Container = containerTagName
  const Icon = iconTagName

  const iconByType = (typeToIconMap) => {
    return (type, key) => (
      <Icon key={key} className={`${typeToIconMap[type]} ${iconClassNames}`} />
    )
  }

  const iconsSet = new Array(maxIcons)
    .fill(undefined)
    .reduce(toTypeReducer(values), [])
    .map(iconByType(typeToIconMap))

  return <Container className={containerClassNames}>{iconsSet}</Container>
}

export default memo(IconsSet)
