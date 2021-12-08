export function defaultsTo(value, defaultValue) {
  const isInvalid = Number.isNaN(value) || isNull(value) || isUndefined(value)
  return isInvalid ? defaultValue : value
}

export function isNull(value) {
  return value === null
}

export function isNotNull(value) {
  return value !== null
}

export function isUndefined(value) {
  return value === undefined
}

export function isNotUndefined(value) {
  return value !== undefined
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}
