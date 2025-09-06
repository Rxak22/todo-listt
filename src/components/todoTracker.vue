<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()

</script>

<template>
    <div class="d-flex align-items-center justify-content-center flex-row mt-3 gap-3">
        <div class="border border-2 cursor-pointer border-primary-subtle rounded px-4 py-2"
            @click="todoStore.filter = 'all'">
            All Task: {{ todoStore.todos.length }}
        </div>
        <div class="border border-2 cursor-pointer border-primary-subtle rounded px-4 py-2"
            @click="todoStore.filter = 'active'">
            Unfinish: {{ todoStore.activeTodo.length }}
        </div>
        <div class="border border-2 cursor-pointer border-primary-subtle rounded px-4 py-2"
            @click="todoStore.filter = 'completed'">
            Finished Task: {{ todoStore.completedTodo.length }}
        </div>
    </div>
</template>
