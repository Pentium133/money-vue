<template>
  <div
    class="w-full rounded border-beige-100 bg-beige-100"
    :style="{ borderWidth: border + 'px' }"
  >
    <div
      class="h-full rounded"
      :style="{
        width: progress + '%',
        backgroundColor: color,
        height: height + 'px',
      }"
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
  height: {
    type: Number,
    default: 32, // Значение по умолчанию для высоты (в пикселях)
  },
  border: {
    type: Number,
    default: 4, // Значение по умолчанию для высоты (в пикселях)
  },
});
</script>
