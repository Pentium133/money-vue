<template>
  <div class="px-10 pt-10">
    <div class="mb-5 flex items-center justify-between">
      <h1 class="text-preset-1 font-bold text-gray-800">Budget</h1>
      <a href="/budget/create" class="button-primary">+ Add New Budget</a>
    </div>

    <div class="flex flex-col items-start gap-5 lg:flex-row">
      <UiBlockSecondary class="basis-5/12">
        <UiBudgetChartBlock />
      </UiBlockSecondary>
      <div class="basis-7/12">
        <UiBudgetBlocks />
      </div>
    </div>
  </div>
</template>
