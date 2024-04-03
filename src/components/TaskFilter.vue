<template>
  <div class="flex items-center justify-end gap-3">
    <div class="flex gap-1">
      <input type="radio" id="All" /> <label for="All">All({{ store.countTotalTasks }})</label>
    </div>
    <div class="flex gap-1">
      <input type="radio" id="Completed" />
      <label for="Completed">Competed({{ store.countCompletedTasks }})</label>
    </div>
    <div class="flex gap-1">
      <input type="radio" id="Pending" />
      <label for="Pending">Pending({{ store.countPendingTasks }})</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasks } from '@/stores/Task'

const store = useTasks()
</script>

<style scoped></style>
