import { defineStore } from 'pinia'

interface State {
    todos: Todo[]
    filter: 'all' | 'active' | 'completed'
    nextId: number
}

interface Todo {
    id: number
    title: string
    completed: boolean
}

export const useTodoStore = defineStore('todo', {
    
    state: (): State => ({
        todos: [],
        filter: 'all',
        nextId: 1,
    }),

    getters: {
        completedTodo(state):Todo[] {
            return state.todos.filter(todo => todo.completed)
        },

        activeTodo(state):Todo[] {
            return state.todos.filter(todo => !todo.completed)
        },

        filteredTodos():Todo[] {
            switch (this.filter) {
                case 'active': return this.activeTodo
                case 'completed' : return this.completedTodo
                default: return this.todos  

            }
        }
    },
    actions: {
        addTask(title: string) {
            this.todos.push({ id: this.nextId++, title, completed: false})
        },
        deleteTask(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    }
})