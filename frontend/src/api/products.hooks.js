import axios from 'axios'
import { useQuery } from 'react-query/react'

import { config } from '../config'
import { queryClient } from './client'

const PRODUCTS_URL = `${config.REACT_APP_API_URL}/api/products`

const allProducts = () => PRODUCTS_URL
const productById = (id) => `${PRODUCTS_URL}/${id}`

export function useGetProducts() {
  return useQuery(
    'products',
    () => axios.get(allProducts()).then(({ data }) => data),
    {
      initialData: [],
    }
  )
}

export function useGetProductById(productId) {
  return useQuery(
    ['product', productId],
    () => axios.get(productById(productId)).then(({ data }) => data),
    {
      initialData: () => {
        return queryClient.getQueryData('products')?.find(byId(productId))
      },
    }
  )
}

function byId(id) {
  return (item) => item._id === id
}
