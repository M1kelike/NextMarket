'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const router = useRouter()
  const login = useAuthStore((s) => s.login)
  const isLoading = useAuthStore((s) => s.isLoading)
  const error = useAuthStore((s) => s.error)
  const clearError = useAuthStore((s) => s.clearError)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ username: '', password: '' })

  const validate = (): boolean => {
    const newErrors = { username: '', password: '' }
    let isValid = true

    if (!username.trim()) {
      newErrors.username = 'Username is required'
      isValid = false
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
      isValid = false
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    clearError()

    if (!validate()) return

    try {
      await login(username, password)
      router.push('/')
    } catch {
      // We handle error in store, so I'll leave this as is
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Login</h1>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.field}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          disabled={isLoading}
        />
        {errors.username && (
          <span className={styles.fieldError}>{errors.username}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          disabled={isLoading}
        />
        {errors.password && (
          <span className={styles.fieldError}>{errors.password}</span>
        )}
      </div>

      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>

      <p className={styles.hint}>
        [<i>Test credentials</i>] username: <strong>emilys</strong>, password:{' '}
        <strong>emilyspass</strong>
      </p>
    </form>
  )
}
