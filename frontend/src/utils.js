export function byId(id) {
  return (item) => item._id === id
}

export function byKeyAndValue(object) {
  const [key, value] = Object.entries(object)[0]
  return (item) => item[key] === value
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function joinClassNames(...classes) {
  return classes.filter(isString).join(' ')
}
