import TaskTimer from './TaskTimer'
import { colors, common } from "../styles/theme.js";

function TaskList({ tasks, onComplete, onDelete }){
    if (tasks.length === 0) {
        return (
            <div style={{ ...common.card, textAlign: 'center', color: colors.textMuted }}>
                No hay tareas para este día
            </div>
        )
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tasks.map(task => (
                <div key={task.id} style={{
                    ...common.card,
                    opacity: task.status === 'done' ? 0.6 : 1
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                            <h4 style={{
                                margin: '0 0 0.25rem 0',
                                color: task.status === 'done' ? colors.textMuted : colors.text,
                                textDecoration: task.status === 'done' ? 'line-through' : 'none'
                            }}>
                                {task.title}
                            </h4>
                            {task.description && (
                                <p style={{ margin: '0 0 0.5rem 0', color: colors.textMuted, fontSize: '0.85rem' }}>
                                    {task.description}
                                </p>
                            )}
                            <p style={{ margin: '0 0 0.75rem 0', color: colors.textSecondary, fontSize: '0.85rem' }}>
                                ⏱ {task.duration} minutos
                            </p>
                            {task.status !== 'done' && (
                                <TaskTimer task={task} onComplete={onComplete} />
                            )}
                        </div>
                        <button
                            onClick={() => onDelete(task.id)}
                            style={{ ...common.button, backgroundColor: 'transparent', color: colors.error, padding: '0.25rem 0.5rem', fontSize: '1rem' }}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskList