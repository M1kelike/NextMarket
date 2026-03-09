import { create } from 'zustand'
import { Product } from '@/types/api'
import * as productsApi from '@/lib/api/products'

interface ProductsState {
  products: Product[]
  isLoading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
}

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })

    try {
      const resp = await productsApi.getProducts()

      set({ products: resp.products, isLoading: false })
    } catch (error) {
      set({
        isLoading: false,
        error:
          error instanceof Error ? error.message : 'Failed to fetch products',
      })
    }
  },
}))
