export function byId(id) {
  return (item) => item._id === id
}

export function byNotEqualId(id) {
  return (item) => item._id !== id
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function joinClassNames(...classes) {
  return classes.filter(isString).join(' ')
}

export function returnData({ data }) {
  return data
}
