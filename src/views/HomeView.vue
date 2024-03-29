<script setup lang="ts">
import CreateTodo from '@/components/CreateTodo.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <h1>Pinia test</h1>
    <div class="w-1/4 flex flex-col gap-4">
      <div class="bg-gray-300 p-4 rounded">
        <CreateTodo />
      </div>

      <TodoList />
    </div>
  </div>
</template>
