<template>
  <div class="h-8 w-full rounded border-4 border-beige-100 bg-beige-100">
    <div
      class="h-full rounded"
      :style="{ width: progress + '%', backgroundColor: color }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  progress: {
    type: Number,
    required: true, // Процент прогресса обязателен
    validator: (value: number) => value >= 0 && value <= 100, // Прогресс должен быть от 0 до 100
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
