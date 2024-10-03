<script lang="ts" setup>
// Определение props для объекта
const props = defineProps({
  pot: {
    type: Object,
    required: true,
  },
});
const calculateProgress = (total: number, target: number): number => {
  if (target === 0) return 0;
  const progress = Math.round((total / target) * 100);
  return progress > 100 ? 100 : progress;
};
</script>

<template>
  <UiBlockSecondary class="w-full lg:w-1/2-gap-6">
    <div class="mb-8 flex items-center space-x-3">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        :fill="pot.theme"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>

      <h2 class="text-preset-2">{{ pot.name }}</h2>
    </div>
    <div class="mb-4 flex items-center justify-between">
      <div class="text-preset-4 text-gray-500">Total saved</div>
      <div class="text-preset-1">${{ pot.total }}</div>
    </div>

    <UiProgressBar
      :progress="calculateProgress(pot.total, pot.target)"
      :color="pot.theme"
      :height="6"
      :border="0"
      class="mb-3"
    />

    <div class="mb-10 flex items-center justify-between">
      <div class="text-preset-5 text-bold text-gray-500">
        {{ calculateProgress(pot.total, pot.target) }}%
      </div>
      <div class="text-preset-5 text-gray-500">Target of ${{ pot.target }}</div>
    </div>

    <div class="flex items-center gap-5">
      <UiButtonSecondary class="w-full">+ Add money</UiButtonSecondary>
      <UiButtonSecondary class="w-full">Withdraw money</UiButtonSecondary>
    </div>
  </UiBlockSecondary>
</template>
