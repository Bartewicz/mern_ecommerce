import { defaultsTo } from '@mr-bean/shared'

const defaultConfig = {
  REACT_APP_API_URL: 'http://localhost:5000',
}

const { REACT_APP_API_URL } = process.env

export const config = Object.freeze({
  REACT_APP_API_URL: defaultsTo(
    REACT_APP_API_URL,
    defaultConfig.REACT_APP_API_URL
  ),
})
