<script setup lang="ts">
import { defineProps } from 'vue';
import { useTodoStore } from '@/stores/todo'
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
const props = defineProps<{
    todos: Todo[]
}>()

const handleCompletedTask = (todo: Todo) => {
    todo.completed = !todo.completed
}
const handleDeleteTask = (id: number) => {
    const todoStore = useTodoStore()
    todoStore.deleteTask(id)
}
</script>

<template>
    <ul class="list-group shadow todoList">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="todo in props.todos"
            :key="todo.id">
            <p :class="['todo', { 'text-decoration-line-through': todo.completed }]">
                {{ todo.id }}: {{ todo.title }}
            </p>
            <div>
                <input type="checkbox" class="form-check-input me-2" :checked="todo.completed"
                    @click="handleCompletedTask(todo)" />
                <button class="btn btn-sm btn-outline-danger" @click="handleDeleteTask(todo.id)">Delete</button>
            </div>
        </li>
    </ul>
</template>