export function bySameId(productId) {
  return (item) => item.productId === productId
}

export function byDifferentId(productId) {
  return (item) => item.productId !== productId
}
