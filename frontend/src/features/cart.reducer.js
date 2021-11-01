import {
  ADD_ITEM,
  REMOVE_ITEM,
  SET_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  INCREASE_ITEM_QUANTITY,
} from './cart.actions'
import { byDifferentId, bySameId } from './cart.utils'

export const initialState = {
  items: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { productId, quantity } = action.payload
      return state.cart.concat({ productId, quantity })
    }
    case REMOVE_ITEM: {
      return state.cart.filter(byDifferentId(action.payload.productId))
    }
    case SET_ITEM_QUANTITY: {
      const product = state.cart.find(bySameId(action.payload.productId))
      product.quantity = action.payload.quantity
      return state
    }
    case DECREASE_ITEM_QUANTITY: {
      const product = state.cart.find(bySameId(action.payload.productId))
      product.quantity -= 1
      return state
    }
    case INCREASE_ITEM_QUANTITY: {
      const product = state.cart.find(bySameId(action.payload.productId))
      product.quantity += 1
      return state
    }
    default:
      return state
  }
}
