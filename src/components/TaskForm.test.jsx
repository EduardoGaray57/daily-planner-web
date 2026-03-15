import { render, screen, fireEvent } from '@testing-library/react'
import TaskForm from './TaskForm'

const mockCategories = [
    { id: 1, name: 'Trabajo' },
    { id: 2, name: 'Personal' }
]

describe('TaskForm', () => {
    test('muestra el titulo Nueva tarea', () => {
        render(<TaskForm onAdd={() => {}} categories={mockCategories} selectedDate="2026-03-15" />)
        expect(screen.getByText('Nueva tarea')).toBeInTheDocument()
    })

    test('muestra el boton Agregar tarea', () => {
        render(<TaskForm onAdd={() => {}} categories={mockCategories} selectedDate="2026-03-15" />)
        expect(screen.getByText('+ Agregar tarea')).toBeInTheDocument()
    })

    test('muestra las categorias en el select', () => {
        render(<TaskForm onAdd={() => {}} categories={mockCategories} selectedDate="2026-03-15" />)
        expect(screen.getByText('Trabajo')).toBeInTheDocument()
        expect(screen.getByText('Personal')).toBeInTheDocument()
    })

    test('no llama onAdd si el titulo esta vacio', () => {
        const mockOnAdd = vi.fn()
        render(<TaskForm onAdd={mockOnAdd} categories={mockCategories} selectedDate="2026-03-15" />)
        fireEvent.click(screen.getByText('+ Agregar tarea'))
        expect(mockOnAdd).not.toHaveBeenCalled()
    })

    test('llama onAdd con los datos correctos', () => {
        const mockOnAdd = vi.fn()
        render(<TaskForm onAdd={mockOnAdd} categories={mockCategories} selectedDate="2026-03-15" />)
        fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Mi tarea' } })
        fireEvent.click(screen.getByText('+ Agregar tarea'))
        expect(mockOnAdd).toHaveBeenCalledWith(expect.objectContaining({ title: 'Mi tarea' }))
    })
})