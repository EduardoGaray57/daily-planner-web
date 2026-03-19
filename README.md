# 📅 Daily Planner Web
 
Aplicación web fullstack para organizar el día, gestionar tareas con timer integrado y visualizar estadísticas de productividad por categoría.
![Daily Planner App](./public/Captura de pantalla 2026-03-19 113325.png)
 
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/Auth-JWT-orange)](https://jwt.io/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://daily-planner-web-coral.vercel.app)
 
## 🔗 Demo en vivo
 
👉 **[https://daily-planner-web-coral.vercel.app](https://daily-planner-web-coral.vercel.app)**
 
> Puedes registrarte con cualquier correo y comenzar a usarlo de inmediato.
 
---
 
## ✨ Funcionalidades
 
- 🔐 **Autenticación completa** — registro, inicio de sesión y cierre de sesión con JWT
- ✅ **Gestión de tareas** — crea tareas con duración, categoría y fecha
- ⏱️ **Timer de cuenta regresiva** — temporizador automático por tarea activa
- 📊 **Estadísticas de productividad** — gráficos de tiempo invertido por categoría
- 📆 **Selector de fecha** — visualiza las tareas de cualquier día
 
---
 
## 🛠️ Stack tecnológico
 
| Capa | Tecnología |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router DOM |
| HTTP | Axios |
| Gráficos | Recharts |
| Auth | JWT (Bearer token) |
| Deploy | Vercel |
 
---
 
## 🔗 Backend
 
Este proyecto consume una API REST construida con Django REST Framework.
 
👉 **[daily-planner-api](https://github.com/EduardoGaray57/daily-planner-api)** — repositorio del backend
 
---
 
## ⚙️ Correr localmente
 
```bash
# 1. Clonar el repositorio
git clone https://github.com/EduardoGaray57/daily-planner-web.git
cd daily-planner-web
 
# 2. Instalar dependencias
npm install
 
# 3. Iniciar servidor de desarrollo
npm run dev
 
# 4. Abrir en el navegador
# http://localhost:5173
```
 
> Para conectar con el backend local, configura la URL base en `src/api/` apuntando a `http://localhost:8000`.
 
---
 
## 🧪 Tests
 
```bash
npm test
```
 
---
 
## 📁 Estructura del proyecto
 
```
daily-planner-web/
├── public/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Vistas principales
│   ├── api/            # Configuración de Axios y llamadas al backend
│   └── main.jsx        # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```
 
---
 
## 👨‍💻 Autor
 
**Eduardo Garay**
- 📍 Quilicura, Santiago, Chile
- 🔗 [LinkedIn](https://www.linkedin.com/in/eduardo-garay-9b067b16b)
- 🐙 [GitHub](https://github.com/EduardoGaray57)
