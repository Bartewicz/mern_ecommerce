import { useContext } from 'react'

export function useCart(cartContext) {
  const cart = useContext(cartContext)

  return cart
}
