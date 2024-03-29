<script setup lang="ts">
import SingleTodo from '@/components/SingleTodo.vue'
import { useTasks } from '@/stores/Task'

const { tasks } = useTasks()
</script>

<template>
  <div class="flex flex-col gap-2 bg-teal-300">
    <div v-for="task in tasks" :key="task.id">
      <SingleTodo :task="task" />
    </div>
  </div>
</template>
