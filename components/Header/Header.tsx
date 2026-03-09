'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'
import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Items Market
        </Link>
        <nav className={styles.nav}>
          {user ? (
            <div className={styles.userSection}>
              <span className={styles.userName}>
                {user.firstName} {user.lastName}
              </span>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.loginLink}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
