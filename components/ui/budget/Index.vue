<script lang="ts" setup>
const { budgets, pending, error } = useBudgets();
// Функция для вычисления класса границы
const getBorderColorClass = (theme: string) => {
  return `border-color: ${theme}`; // Используем значение из переменной для создания класса
};
</script>

<template>
  <div>
    <UiBlockSecondary
      class="mb-6"
      v-for="budget in budgets"
      :key="budget.category"
    >
      <div class="mb-5 flex items-center space-x-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          :fill="budget.theme"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>

        <h2 class="text-preset-2">{{ budget.category }}</h2>
      </div>
      <p class="text-preset-4 mb-4 text-gray-500">
        Maximum of ${{ budget.maximum }}
      </p>

      <UiProgressBar :progress="75" :color="budget.theme" class="mb-5" />

      <div class="mb-4 flex items-center">
        <div
          class="flex-1 border-l-4 px-4"
          :style="getBorderColorClass(budget.theme)"
        >
          <p class="text-preset-5 text-gray-500">Spend</p>
          <p class="text-preset-5 font-bold">${{ budget.maximum }}</p>
        </div>
        <div class="flex-1 border-l-4 border-gray-100 px-4">
          <p class="text-preset-5 text-gray-500">Remaining</p>
          <p class="text-preset-5 font-bold">${{ budget.maximum }}</p>
        </div>
      </div>

      <UiBlockBeige>
        <div class="mb-5 flex justify-between">
          <h2 class="text-preset-3">Latest Spending</h2>
          <a class="flex items-center gap-x-3" href="/transactions">
            <p class="text-preset-4 text-gray-500 hover:text-gray-900">
              View All
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.76531 1.98468L8.51531 5.73468C8.55018 5.76951 8.57784 5.81087 8.59671 5.85639C8.61558 5.90192 8.62529 5.95071 8.62529 5.99999C8.62529 6.04927 8.61558 6.09807 8.59671 6.1436C8.57784 6.18912 8.55018 6.23048 8.51531 6.26531L4.76531 10.0153C4.71287 10.0678 4.64602 10.1036 4.57324 10.1181C4.50046 10.1326 4.42501 10.1251 4.35645 10.0967C4.28789 10.0683 4.22931 10.0202 4.1881 9.95849C4.1469 9.89677 4.12494 9.82421 4.125 9.74999L4.125 2.24999C4.12494 2.17578 4.1469 2.10322 4.1881 2.0415C4.22931 1.97978 4.28789 1.93167 4.35645 1.90326C4.42501 1.87485 4.50046 1.86743 4.57324 1.88192C4.64602 1.89641 4.71287 1.93218 4.76531 1.98468Z"
                fill="#696868"
              />
            </svg>
          </a>
        </div>

        <div>
          <UiBudgetSpendLine>
            <template #name>Emma Richardson</template>
            <template #sum>-75.50</template>
            <template #date>19 Aug 2024</template>
          </UiBudgetSpendLine>
          <UiBudgetSpendLine>
            <template #name>Pixel Playground</template>
            <template #sum>-10.00</template>
            <template #date>19 Aug 2024</template>
          </UiBudgetSpendLine>
          <UiBudgetSpendLine>
            <template #name>Rina Sato</template>
            <template #sum>-$75.50</template>
            <template #date>19 Aug 2024</template>
          </UiBudgetSpendLine>
        </div>
      </UiBlockBeige>
    </UiBlockSecondary>
  </div>
</template>
