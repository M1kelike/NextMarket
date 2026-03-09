'use client'

import { useAuthStore } from '@/store'
import { getCurrentYear } from '@/lib/utils'
import styles from './Footer.module.scss'

export const Footer = () => {
  const user = useAuthStore((s) => s.user)
  const year = getCurrentYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          {year}
          {user && ` • Logged as ${user.email}`}
        </p>
      </div>
    </footer>
  )
}
