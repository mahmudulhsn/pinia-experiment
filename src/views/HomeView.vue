<script setup lang="ts">
import CreateTask from '@/components/CreateTask.vue'
import TaskFilter from '@/components/TaskFilter.vue'
import TaskList from '@/components/TaskList.vue'
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <h1 class="text-2xl py-4 text-bold">Pinia Experiment</h1>
    <div class="w-1/2 flex flex-col gap-4">
      <div class="bg-gray-300 p-4 rounded">
        <CreateTask />
      </div>
      <TaskList />
      <TaskFilter />
    </div>
  </div>
</template>
