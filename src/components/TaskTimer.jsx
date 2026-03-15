import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer.js";
import { colors, common } from "../styles/theme.js";

function TaskTime({ task, onComplete }){
    const { display, running, start, pause, reset, finished } = useTimer(task.duration)

    useEffect(() => {
        if (finished) onComplete(task.id)
    }, [finished])

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: finished ? colors.primary : colors.text }}>
                {display}
            </span>
            {!finished && (
                <>
                    <button
                        style={{ ...common.button, padding: '0.35rem 0.75rem', fontSize: '0.85rem' }}
                        onClick={running ? pause : start}
                    >
                        {running ? '⏸' : '▶'}
                    </button>
                    <button
                        style={{ ...common.button, padding: '0.35rem 0.75rem', fontSize: '0.85rem', backgroundColor: '#30363d' }}
                        onClick={reset}
                    >
                        ↺
                    </button>
                </>
            )}
            {finished && <span style={{ color: colors.primary, fontSize: '0.85rem' }}>✓ Completado</span>}
        </div>
    )
}

export default TaskTime