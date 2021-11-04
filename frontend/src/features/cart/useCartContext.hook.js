/* eslint-disable no-param-reassign */
import { createContext, useContext, useMemo, useReducer } from 'react'

import produce from 'immer'

import { byId, byNotEqualId } from 'utils'

export const CartContext = createContext()

const initialState = {
  items: [],
}

const cartRecipes = {
  addItem: (action) => (draft) => {
    const { productId: _id, countInStock, amount: quantity } = action
    draft.items.push({ _id, countInStock, quantity })
  },
  removeItem: (action) => (draft) => {
    draft.items = draft.items.filter(byNotEqualId(action.productId))
  },
  decreaseQuantity: (action) => (draft) => {
    const product = draft.items.find(byId(action.productId))
    if (product.quantity > 1) product.quantity -= 1
  },
  increaseQuantity: (action) => (draft) => {
    const product = draft.items.find(byId(action.productId))
    if (product.quantity < product.countInStock) product.quantity += 1
  },
  increaseQuantityByAmount: (action) => (draft) => {
    const { productId, amount } = action
    const product = draft.items.find(byId(productId))
    if (product.quantity + amount <= product.countInStock) {
      product.quantity += amount
    }
  },
}

function createReducer(recipes) {
  return (state, action) => {
    return produce(state, recipes[action.type](action.payload))
  }
}

function composeActions(recipes, dispatch) {
  return Object.keys(recipes).reduce((actions, actionType) => {
    actions[actionType] = (payload) => dispatch({ type: actionType, payload })
    return actions
  }, {})
}

export function useCartContext() {
  const cartReducer = createReducer(cartRecipes)
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const actions = composeActions(cartRecipes, dispatch)

  return useMemo(() => ({ ...actions, cart: state }), [actions, state])
}

export function useCart(cartContext) {
  return useContext(cartContext)
}
