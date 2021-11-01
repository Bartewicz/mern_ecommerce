export function byId(id) {
  return (item) => item._id === id
}

export function byKeyAndValue(object) {
  const [key, value] = Object.entries(object)[0]
  return (item) => item[key] === value
}
