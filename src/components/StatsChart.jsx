import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { colors, common } from '../styles/theme'

const COLORS = ['#238636', '#1f6feb', '#a371f7', '#f78166', '#e3b341', '#39d353']

function StatsChart({ tasks }) {
    const categoryMap = tasks.reduce((acc, task) => {
        if (task.status === 'done') {
            const name = task.category_name || 'Sin categoría'
            acc[name] = (acc[name] || 0) + task.duration
        }
        return acc
    }, {})

    const data = Object.entries(categoryMap).map(([name, value]) => ({ name, value}))

    if (data.length === 0) {
        return(
            <div style={{ ...common.card, textAlign: 'center', color: colors.textMuted }}>
                Completa tareas para ver estadísticas
            </div>
        )
    }
    return (
        <div style={{ ...common.card, marginBottom: '1.5rem' }}>
            <h3 style={{ color: colors.text, margin: '0 0 1rem 0' }}>Tiempo por categoría</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name} (${value}min)`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} minutos`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default StatsChart