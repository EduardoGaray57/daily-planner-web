export const colors = {
    bg: '#0d1117',
    surface: '#161b22',
    border: '#30363d',
    text: '#ffffff',
    textMuted: '#8b949e',
    textSecondary: '#c9d1d9',
    primary: '#238636',
    link: '#58a6ff',
    error: '#f78166'
}

export const common = {
    input: {
        padding: '0.75rem',
        borderRadius: '8px',
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.bg,
        color: colors.text,
        fontSize: '1rem'
    },
    button: {
        padding: '0.75rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: colors.primary,
        color: colors.text,
        fontSize: '1rem',
        cursor: 'pointer'
    },
    card: {
        backgroundColor: colors.surface,
        padding: '1.5rem',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`
    },
    pageContainer: {
        backgroundColor: colors.bg,
        minHeight: '100vh',
        color: colors.text,
        padding: '2rem'
    }
}