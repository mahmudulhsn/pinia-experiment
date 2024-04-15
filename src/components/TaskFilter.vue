
<script setup lang="ts">
import { useTasks } from '@/stores/Task'
import { storeToRefs } from 'pinia';

const store = useTasks()
const {countCompletedTasks, countTotalTasks, countPendingTasks, sortable} = storeToRefs(store)
</script>

<style scoped></style>
<template>
  <div class="flex items-center justify-end gap-3">
    <div class="flex gap-1">
      <input type="radio" name="sortable" value="all" v-model="sortable" id="All" /> <label for="All">All({{ countTotalTasks }})</label>
    </div>
    <div class="flex gap-1">
      <input type="radio" name="sortable" value="completed" v-model="sortable" id="Completed" />
      <label for="Completed">Competed({{ countCompletedTasks }})</label>
    </div>
    <div class="flex gap-1">
      <input type="radio" name="sortable" value="pending" v-model="sortable" id="Pending" />
      <label for="Pending">Pending({{ countPendingTasks }})</label>
    </div>
  </div>
</template>

