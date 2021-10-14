export function defaultsTo(value, defaultValue) {
  const isInvalid = [isNaN, isNull, isUndefined].reduce(toVerdict(value), false)
  return isInvalid ? defaultValue : value
}

function toVerdict(value) {
  return (verdict, validator) => verdict || validator(value)
}

export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return value === undefined
}
