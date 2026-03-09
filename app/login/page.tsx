'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'
import { LoginForm } from '@/components/LoginForm/LoginForm'

export default function LoginPage() {
  const router = useRouter()
  const user = useAuthStore((s) => s.user)

  useEffect(() => {
    if (user) router.push('/')
  }, [user, router])

  if (user) {
    return null
  }

  return (
    <div style={{ paddingTop: '3rem' }}>
      <LoginForm />
    </div>
  )
}
