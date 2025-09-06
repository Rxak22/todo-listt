<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/todoItem.vue'

const todoStore = useTodoStore()

const newTask = ref('')

const handleAddTask = () => {
    if (newTask.value.trim()) {
        todoStore.addTask(newTask.value.trim())
        newTask.value = ''
    }
}

</script>

<template>
    <div class="my-3">
        <input type="text" class="form-control" placeholder="Add a new task" v-model="newTask"
            @keyup.enter="handleAddTask()" />
    </div>
    <div>
        <TodoItem :todos="todoStore.filteredTodos" />
    </div>
</template>