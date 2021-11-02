import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_QUANTITY,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  INCREASE_QUANTITY_BY_AMOUNT,
} from './cart.actions'
import { byNotEqualId } from 'utils'

export const cartInitialState = {
  items: [],
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { productId, quantity } = action.payload
      const items = state.items.concat({ productId, quantity })
      return { ...state, items }
    }
    case REMOVE_ITEM: {
      const { productId } = action.payload
      const items = state.items.filter(byNotEqualId(productId))
      return { ...state, items }
    }
    case SET_QUANTITY: {
      const { productId, quantity } = action.payload
      const items = state.items.map((item) => {
        if (item.productId === productId) return { ...item, quantity }
        return item
      })
      return { ...state, items }
    }
    case DECREASE_QUANTITY: {
      const { productId } = action.payload
      const items = state.items.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      return { ...state, items }
    }
    case INCREASE_QUANTITY: {
      const { productId } = action.payload
      const items = state.items.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      return { ...state, items }
    }
    case INCREASE_QUANTITY_BY_AMOUNT: {
      const { productId, amount } = action.payload
      const items = state.items.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + amount }
        }
        return item
      })
      return { ...state, items }
    }
    default:
      return state
  }
}
