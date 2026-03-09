import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

apiClient.interceptors.response.use(
  (resp) => resp,
  (err) => {
    return Promise.reject(
      new Error(
        err.response?.data?.message ||
          err.message ||
          'An unexpected error occurred'
      )
    )
  }
)

export default apiClient
