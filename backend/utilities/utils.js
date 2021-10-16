export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return value === undefined
}

function toVerdict(value) {
  return (verdict, validator) => verdict || validator(value)
}

export function defaultsTo(value, defaultValue) {
  const isInvalid = [Number.isNaN, isNull, isUndefined].reduce(
    toVerdict(value),
    false
  )
  return isInvalid ? defaultValue : value
}
