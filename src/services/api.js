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

//Auth
export const register = (data) => api.post('/auth/register/', data)
export const login = (data) => api.post('/auth/login/', data)

//Tasks
export const getTasks = (date) => api.get(`/tasks/?date=${date}`)
export const createTask = (data) => api.post('/tasks/', data)
export const updateTask = (id, data) => api.put(`/tasks/${id}/`, data)
export const deleteTask = (id) => api.delete(`/tasks/${id}/`)

//Categories
export const getCategories = () => api.get('/categories/')
export const createCategory = (data) => api.post('/categories/',data)