<script setup lang="ts">
const props = defineProps(['task'])
</script>

<template>
  <div class="bg-teal-200 flex justify-between items-center py-4 px-4">
    <div class="flex gap-3">
      <input type="checkbox" />
      <h3>{{ props.task.title }}</h3>
    </div>
    <button>delete</button>
  </div>
</template>
