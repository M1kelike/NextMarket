'use client'

import { Product } from '@/types/api'
import { useAuthStore } from '@/store'
import { formatPrice } from '@/lib/utils'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { user } = useAuthStore()

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.image}
          onError={(e) => {
            e.currentTarget.src = '/product-placeholder.webp'
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        {user && <button className={styles.button}>Add to cart</button>}
      </div>
    </div>
  )
}
