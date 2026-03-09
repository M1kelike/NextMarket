import { Product } from '@/types/api'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { Loader } from '@/components/Loader/Loader'
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage'
import styles from './ProductsGrid.module.scss'

interface ProductsGridProps {
  products: Product[]
  isLoading: boolean
  error: string | null
}

export const ProductsGrid = ({
  products,
  isLoading,
  error,
}: ProductsGridProps) => {
  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (products.length === 0) {
    return <p className={styles.empty}>No products found</p>
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
