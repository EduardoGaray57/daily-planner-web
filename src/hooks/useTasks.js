import { useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api.js";

export const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTasks = async (date) => {
        setLoading(true)
        try {
            const res = await getTasks(date)
            setTasks(res.data)
        } catch (err) {
            setError('Error al cargar las tareas')
        } finally {
            setLoading(false)
        }
    }

    const addTask = async (data) => {
        const res = await createTask(data)
        setTasks(prev => [...prev, res.data])
    }

    const editTask = async (id, data) => {
        const task = tasks.find(t => t.id === id)
        const res = await updateTask(id, { ...task, ...data })
        setTasks(prev => prev.map(t => t.id === id ? res.data : t))
    }

    const removeTask = async (id) => {
        await deleteTask(id)
        setTasks(prev => prev.filter(t => t.id !== id))
    }

    return { tasks, loading, error, fetchTasks, addTask, editTask, removeTask }
}