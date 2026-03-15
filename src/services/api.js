import axios from 'axios'

const BASE_URL = 'https://daily-planner-api-production.up.railway.app/api'

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    response => response,
    async error => {
        const original = error.config
        if (error.response?.status === 401 && !original._retry) {
            original._retry = true
            try {
                const refresh = localStorage.getItem('refresh_token')
                const res = await axios.post(`${BASE_URL}/auth/refresh/`, { refresh })
                localStorage.setItem('access_token', res.data.access)
                original.headers.Authorization = `Bearer ${res.data.access}`
                return api(original)
            } catch {
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                window.location.href = '/'
            }
        }
        return Promise.reject(error)
    }
)

// Auth
export const register = (data) => api.post('/auth/register/', data)
export const login = (data) => api.post('/auth/login/', data)

// Tasks
export const getTasks = (date) => api.get(`/tasks/?date=${date}`)
export const createTask = (data) => api.post('/tasks/', data)
export const updateTask = (id, data) => api.put(`/tasks/${id}/`, data)
export const deleteTask = (id) => api.delete(`/tasks/${id}/`)

// Categories
export const getCategories = () => api.get('/categories/')
export const createCategory = (data) => api.post('/categories/', data)

// History
export const getHistory = () => api.get('/history/')