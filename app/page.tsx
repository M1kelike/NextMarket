'use client'

import { useEffect } from 'react'
import { useProductsStore } from '@/store'
import { ProductsGrid } from '@/components/ProductsGrid/ProductsGrid'

export default function HomePage() {
  const products = useProductsStore((s) => s.products)
  const isLoading = useProductsStore((s) => s.isLoading)
  const error = useProductsStore((s) => s.error)
  const fetchProducts = useProductsStore((s) => s.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div>
      <h1
        style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}
      >
        Products
      </h1>
      <ProductsGrid products={products} isLoading={isLoading} error={error} />
    </div>
  )
}
