import { useEffect, useReducer } from 'react'

const ACTION = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
}

const initialState = (initialData) => ({
  data: initialData,
  isError: false,
  isLoading: false,
})

function asyncCallReducer(state, action) {
  const { SUCCESS, ERROR, LOADING } = ACTION
  switch (action.type) {
    case SUCCESS:
      return { ...initialState(), data: action.payload }
    case ERROR:
      return { ...state, isError: true, isLoading: false }
    case LOADING:
      return { ...state, isLoading: true, isError: false }
    default:
      throw new Error(
        'Attempt to dispatch not covered action type on asyncCallReducer'
      )
  }
}

function success(data) {
  return { type: ACTION.SUCCESS, payload: data }
}

function error() {
  return { type: ACTION.ERROR, payload: null }
}

function loading() {
  return { type: ACTION.ERROR, payload: null }
}

function abortNotFullfilledRequest(abortController) {
  if (!abortController.signal.aborted) {
    abortController.abort()
  }
}

export function useAsync(asyncFn, initialData) {
  const [state, dispatch] = useReducer(
    asyncCallReducer,
    initialState(initialData)
  )
  const abortController = new AbortController()
  const options = {
    signal: abortController.signal,
    mode: 'cors',
  }

  useEffect(() => {
    async function makeCall() {
      dispatch(loading(true))
      dispatch(error(false))

      try {
        const response = await asyncFn(options)
        const data = await response.json()

        dispatch(success(data))
      } catch (e) {
        dispatch(error(true))
        abortNotFullfilledRequest(abortController)
      } finally {
        dispatch(loading(false))
      }
      return () => {
        abortNotFullfilledRequest(abortController)
      }
    }
    makeCall()
  }, [])

  return {
    data: state.data,
    isLoading: state.isLoading,
    isError: state.isError,
  }
}
