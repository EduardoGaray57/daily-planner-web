import { useState } from "react";
import { colors, common } from "../styles/theme.js";

function TaskForm({ onAdd, categories, selectedDate }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        duration: 25,
        category: '',
        status: 'pending'
    })

    const handleSubmit = async () => {
        if (!form.title.trim()) return
        await onAdd({
            ...form,
            date: selectedDate,
            category: form.category || null
        })
        setForm({ title: '', description: '', duration: 25, category: '', status: 'panding'})
    }
    return (
        <div style={{ ...common.card, marginBottom: '1.5rem' }}>
            <h3 style={{ color: colors.text, margin: '0 0 1rem 0' }}>Nueva tarea</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                    style={common.input}
                    placeholder="Título"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                />
                <input
                    style={common.input}
                    placeholder="Descripción (opcional)"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                />
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <input
                        style={{ ...common.input, flex: 1 }}
                        type="number"
                        placeholder="Duración (min)"
                        value={form.duration}
                        onChange={e => setForm({ ...form, duration: parseInt(e.target.value) })}
                    />
                    <select
                        style={{ ...common.input, flex: 1 }}
                        value={form.category}
                        onChange={e => setForm({ ...form, category: e.target.value })}
                    >
                        <option value="">Sin categoría</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <button style={common.button} onClick={handleSubmit}>
                    + Agregar tarea
                </button>
            </div>
        </div>
    )
}

export default TaskForm