export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const SET_QUANTITY = 'SET_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const INCREASE_QUANTITY_BY_AMOUNT = 'INCREASE_QUANTITY_BY_AMOUNT'

export const addItem = (productId, quantity) => ({
  type: ADD_ITEM,
  payload: { productId, quantity },
})

export const increaseQuantityByAmount = (productId, amount) => ({
  type: INCREASE_QUANTITY_BY_AMOUNT,
  payload: { productId, amount },
})
