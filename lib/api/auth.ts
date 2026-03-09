import apiClient from './client'
import { AuthResponse } from '@/types/api'

export const login = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>('/auth/login', {
    username,
    password,
    expiresInMins: 30,
  })
  return response.data
}

export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }
}
