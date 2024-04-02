<script setup lang="ts">
import SingleTask from '@/components/SingleTask.vue'
import { useTasks } from '@/stores/Task'

const taskStore = useTasks()
</script>

<template>
  <div class="flex flex-col gap-2 bg-teal-300">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <SingleTask :task="task" />
    </div>
  </div>
</template>
