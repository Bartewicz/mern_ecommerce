export function defaultsTo(value, defaultValue) {
  const isInvalid = Number.isNaN(value) || isNull(value) || isUndefined(value)
  return isInvalid ? defaultValue : value
}

export function isNullOrUndefined(value) {
  return isNull(value) || isUndefined(value)
}

export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return value === undefined
}
