import { render, screen, fireEvent } from '@testing-library/react'
import TaskList from './TaskList'

const mockTasks = [
    {
        id: 1,
        title: 'Estudiar React',
        description: 'Repasar hooks',
        duration: 25,
        status: 'pending'
    },
    {
        id: 2,
        title: 'Hacer ejercicio',
        description: '',
        duration: 30,
        status: 'done'
    }
]

describe('TaskList', () => {
    test('muestra mensaje cuando no hay tareas', () => {
        render(<TaskList tasks={[]} onComplete={() => {}} onDelete={() => {}} />)
        expect(screen.getByText('No hay tareas para este día')).toBeInTheDocument()
    })

    test('muestra los titulos de las tareas', () => {
        render(<TaskList tasks={mockTasks} onComplete={() => {}} onDelete={() => {}} />)
        expect(screen.getByText('Estudiar React')).toBeInTheDocument()
        expect(screen.getByText('Hacer ejercicio')).toBeInTheDocument()
    })

    test('muestra la descripcion de la tarea', () => {
        render(<TaskList tasks={mockTasks} onComplete={() => {}} onDelete={() => {}} />)
        expect(screen.getByText('Repasar hooks')).toBeInTheDocument()
    })

    test('llama onDelete al hacer click en el boton eliminar', () => {
        const mockOnDelete = vi.fn()
        render(<TaskList tasks={mockTasks} onComplete={() => {}} onDelete={mockOnDelete} />)
        const deleteButtons = screen.getAllByText('✕')
        fireEvent.click(deleteButtons[0])
        expect(mockOnDelete).toHaveBeenCalledWith(1)
    })
})