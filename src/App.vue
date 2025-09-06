<script setup lang="ts">
import TodoTracker from './components/todoTracker.vue';
import TodoPage from './views/TodoPage.vue';
</script>

<template>
  <div class="mt-2 p-1 mb-2 pb-2 container d-flex alingn-items-center justify-content-center flex-column">
    <h1 class="text-center">Todo List</h1>
    <TodoTracker />
  </div>

  <div class="container">
    <TodoPage />
  </div>
</template>
