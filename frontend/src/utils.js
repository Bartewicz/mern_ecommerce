import { isString } from '@mr-bean/shared'

export function byId(id) {
  return (item) => item._id === id
}

export function byNotEqualId(id) {
  return (item) => item._id !== id
}

export function joinClassNames(...classes) {
  return classes.filter(isString).join(' ')
}

export function extractData({ data }) {
  return data
}

export function isSuccess(status) {
  return status === 'success'
}
