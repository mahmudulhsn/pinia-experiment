<script setup lang="ts">
import SingleTask from '@/components/SingleTask.vue'
import { useTasks } from '@/stores/Task'
import { storeToRefs } from 'pinia';

const taskStore = useTasks()
const {filteredTasks} = storeToRefs(taskStore)
</script>

<template>
  <div class="flex flex-col gap-2 bg-teal-300">
    <div v-for="task in filteredTasks" :key="task.id">
      <SingleTask :task="task" />
    </div>
  </div>
</template>
