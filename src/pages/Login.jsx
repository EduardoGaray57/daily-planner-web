import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { login, register } from "../services/api.js"
import { colors, common } from "../styles/theme.js";

function Login() {
    const [isRegister, setIsRegister] = useState(false)
    const [form, setFrom] = useState({ username: '', email: '', password: '' })
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        setError(null)
        try {
            if (isRegister) {
                await register(form)
                setIsRegister(false)
            } else {
                const res = await login(form)
                localStorage.setItem('access_token', res.data.access)
                localStorage.setItem('refresh_token', res.data.refresh)
                navigate('/dashboard')
            }
        } catch (error) {
            setError('Credenciales incorrectas o usuario ya existe')
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: colors.bg}}>
            <div style={{ ...common.card, width:'100%', maxWidth: '400px', display:'flex', flexDirection:'column', gap:'1rem' }}>
                <h1 style={{ color: colors.text, textAlign:'center', margin: 0}}>📅 Daily Planner</h1>
                <h2 style={{ color: colors.textMuted, textAlign: 'center', margin:0, fontSize: '1rem'}}>
                    {isRegister ? 'Crear cuenta' : 'Iniciar sesión'}
                </h2>

                {error && <p style={{ color: colors.error, textAlign: 'center', margin:0, fontSize: '0.9rem'}}>{error}</p>}

                <input 
                    style={common.input}
                    placeholder="Usuario"
                    value={form.username}
                    onChange={e => setFrom({ ...form, username: e.target.value})}
                />
                {isRegister && (
                    <input
                        style={common.input}
                        placeholder="Email"
                        value={form.email}
                        onChange={e => setFrom({ ...form, email: e.target.value })}
                    />
                )}
                <input
                    style={common.input}
                    placeholder="Contraseña"
                    type="password"
                    value={form.password}
                    onChange={e => setFrom({ ...form, password: e.target.value})}
                />

                <button style={common.button} onClick={handleSubmit}>
                    {isRegister ? 'Registrarse' : 'Entrar'}
                </button>

                <p style={{ color: colors.textMuted, textAlign: 'center', margin:0, fontSize:'0.9rem'}}>
                    {isRegister ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?' }
                    <span style={{ color: colors.link, cursor:'pointer', }} onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? 'Inicia sesión' : 'Regístrate'}
                    </span>
                </p>

            </div>
        </div>
    )
}

export default Login