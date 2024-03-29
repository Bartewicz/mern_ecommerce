import { useQuery } from 'react-query/react'

import axios from 'axios'

import { queryClient } from '../../../apiClient'
import { config } from '../../../config'
import { byId, extractData } from 'utils'

const PRODUCTS_URL = `${config.REACT_APP_API_URL}/api/products`

const allProducts = () => PRODUCTS_URL
const productById = (id) => `${PRODUCTS_URL}/${id}`

export function useGetProducts() {
  return useQuery('products', () => axios.get(allProducts()).then(extractData))
}

export function useGetProductById(productId) {
  return useQuery(
    ['product', productId],
    () => axios.get(productById(productId)).then(extractData),
    {
      initialData: () => {
        return queryClient.getQueryData('products')?.find(byId(productId))
      },
    }
  )
}
