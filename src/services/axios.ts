import axios from 'axios'

import { notify } from 'utils/toast'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('teste')
    notify('Erro na busca', 'error')

    return Promise.reject(error)
  },
)

export { api }
