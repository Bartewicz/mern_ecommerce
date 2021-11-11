/* eslint-disable no-param-reassign */
import { createContext, useMemo, useReducer } from 'react'

import produce from 'immer'

import { byId, byNotEqualId } from 'utils'

export const CartContext = createContext()

const initialState = {
  items: [],
}

const cartRecipes = {
  addItem: (action) => (draft) => {
    const { productId: _id, countInStock, amount: quantity } = action.payload
    draft.items.push({ _id, countInStock, quantity })
  },
  removeItem: (action) => (draft) => {
    const { productId } = action.payload
    draft.items = draft.items.filter(byNotEqualId(productId))
  },
  removeMultiple: (action) => (draft) => {
    const { ids: idsToBeRemoved } = action.payload
    draft.items = draft.items.filter(({ _id }) => !idsToBeRemoved.includes(_id))
  },
  removeAll: () => (draft) => {
    draft.items = []
  },
  decreaseQuantity: (action) => (draft) => {
    const { productId } = action.payload
    const product = draft.items.find(byId(productId))
    if (product.quantity > 1) product.quantity -= 1
  },
  increaseQuantity: (action) => (draft) => {
    const { productId } = action.payload
    const product = draft.items.find(byId(productId))
    if (product.quantity < product.countInStock) product.quantity += 1
  },
  increaseQuantityByAmount: (action) => (draft) => {
    const { productId, amount } = action.payload
    const product = draft.items.find(byId(productId))
    if (product.quantity + amount <= product.countInStock) {
      product.quantity += amount
    }
  },
}

function createReducer(recipes) {
  return (state, action) => {
    return produce(state, recipes[action.type](action))
  }
}

function composeActions(recipes, dispatch) {
  return Object.keys(recipes).reduce((actions, actionType) => {
    actions[actionType] = (payload) => dispatch({ type: actionType, payload })
    return actions
  }, {})
}

const cartReducer = createReducer(cartRecipes)

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const isCartEmpty = useMemo(() => state.items.length === 0, [state])
  const actions = useMemo(
    () => composeActions(cartRecipes, dispatch),
    [dispatch]
  )

  return useMemo(
    () => ({
      ...actions,
      isCartEmpty,
      cart: state,
    }),
    [actions, state]
  )
}
