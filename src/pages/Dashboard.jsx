import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks.js"
import { getCategories } from "../services/api.js";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";
import StatsChart from "../components/StatsChart.jsx";
import { colors, common } from "../styles/theme.js";

function Dashboard() {
    const navigate = useNavigate()
    const { tasks, loading, fetchTasks, addTask, editTask, removeTask } = useTasks()
    const [categories, setCategories] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (!token) navigate('/')
    }, [])

    useEffect(() => {
        fetchTasks(selectedDate)
        getCategories().then(res => setCategories(res.data))
    }, [selectedDate])

    const handleComplete = async (id) => {
        await editTask(id, { status: 'done' })
        fetchTasks(selectedDate)
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/')
    }
    return (
        <div style={{ ...common.pageContainer, maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ margin: 0, color: colors.text }}>📅 Daily Planner</h1>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                        style={{ ...common.button, backgroundColor: '#30363d', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        onClick={() => navigate('/history')}
                    >
                        📋 Historial
                    </button>
                    <button
                        style={{ ...common.button, backgroundColor: '#30363d', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>

            <input
                type="date"
                style={{ ...common.input, marginBottom: '1.5rem', width: '100%' }}
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
            />

            <TaskForm onAdd={addTask} categories={categories} selectedDate={selectedDate} />

            {loading ? (
                <p style={{ color: colors.textMuted }}>Cargando...</p>
            ) : (
                <>
                    <StatsChart tasks={tasks} />
                    <TaskList tasks={tasks} onComplete={handleComplete} onDelete={removeTask} />
                </>
            )}
        </div>
    )
}

export default Dashboard