export function byId(productId) {
  return (item) => item.productId === productId
}

export function byNotEqualId(productId) {
  return (item) => item.productId !== productId
}
