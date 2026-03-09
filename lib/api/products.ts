import apiClient from './client'
import { ProductsResponse } from '@/types/api'

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await apiClient.get<ProductsResponse>('/products', {
    params: { limit: 12 },
  })

  return response.data
}
