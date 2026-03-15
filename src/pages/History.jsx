import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHistory } from '../services/api'
import { colors, common } from '../styles/theme'

function History() {
    const [days, setDays] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (!token) navigate('/')
        getHistory()
            .then(res => setDays(res.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div style={{ ...common.pageContainer, maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ margin: 0, color: colors.text }}>📅 Historial</h1>
                <button
                    style={{ ...common.button, backgroundColor: '#30363d', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                    onClick={() => navigate('/dashboard')}
                >
                    ← Volver
                </button>
            </div>

            {loading ? (
                <p style={{ color: colors.textMuted }}>Cargando...</p>
            ) : days.length === 0 ? (
                <div style={{ ...common.card, textAlign: 'center', color: colors.textMuted }}>
                    No hay días con tareas completadas aún
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {days.map(day => (
                        <div
                            key={day}
                            style={{ ...common.card, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                            onClick={() => navigate(`/dashboard?date=${day}`)}
                        >
                            <span style={{ color: colors.text, fontSize: '1rem' }}>📆 {day}</span>
                            <span style={{ color: colors.primary, fontSize: '0.85rem' }}>Ver tareas →</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default History