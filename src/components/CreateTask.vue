<script setup lang="ts">
import { useTasks } from '@/stores/Task'
import { ref } from 'vue'

const task = ref('')
const createTask = () => {
  if (task.value.length > 0) {
    let newTask = {
      title: task.value,
      is_completed: false
    }
    const taskStore = useTasks()
    taskStore.addTask(newTask)
    task.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="createTask" class="flex gap-2 justify-between items-center">
    <input v-model="task" type="text" class="w-[80%] px-2 py-1 rounded" />
    <button class="bg-teal-800 px-2 py-1 rounded text-white cursor-pointer">Submit</button>
  </form>
</template>
