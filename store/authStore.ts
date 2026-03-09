import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/types/api'
import * as authApi from '@/lib/api/auth'

interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  clearError: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null })

        try {
          const resp = await authApi.login(username, password)

          if (typeof window !== 'undefined') {
            localStorage.setItem('token', resp.accessToken)
          }

          const user: User = {
            id: resp.id,
            username: resp.username,
            email: resp.email,
            firstName: resp.firstName,
            lastName: resp.lastName,
            gender: resp.gender,
            image: resp.image,
          }

          set({ user, isLoading: false, error: null })
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'Login failed',
          })
          throw error
        }
      },

      logout: () => {
        authApi.logout()
        set({ user: null, error: null })
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
)
