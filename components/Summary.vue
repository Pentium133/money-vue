<template>
  <div>
    <div class="mb-8 flex flex-col justify-between gap-6 lg:flex-row">
      <UiBlockPrimary>
        <p class="text-preset-4 mb-3 text-white">Current Balance</p>
        <p class="text-preset-1 font-bold text-white">$4,836.00</p>
      </UiBlockPrimary>
      <UiBlockSecondary class="flex-1">
        <p class="text-preset-4 mb-3 text-gray-500">Income</p>
        <p class="text-preset-1 font-bold text-gray-900">$3,814.25</p>
      </UiBlockSecondary>
      <UiBlockSecondary class="flex-1">
        <p class="text-preset-4 mb-3 text-gray-500">Expenses</p>
        <p class="text-preset-1 font-bold text-gray-900">$1,700.50</p>
      </UiBlockSecondary>
    </div>

    <div class="mb-8 flex flex-col justify-between lg:flex-row">
      <div class="flex basis-7/12 flex-col gap-6">
        <UiBlockSecondary class="flex-1">
          <UiIndexPots />
        </UiBlockSecondary>
        <UiBlockSecondary class="flex-1">
          <UiIndexTransaction />
        </UiBlockSecondary>
      </div>
      <div class="flex basis-5/12 flex-col gap-6">
        <UiBlockSecondary class="flex-1">
          <UiIndexBudget />
        </UiBlockSecondary>
        <UiBlockSecondary class="flex-1">
          <p>6437563564636</p>
          <p>6437563564636</p>
          <p>6437563564636</p>
          <p>6437563564636</p>
          <p>6437563564636</p>
        </UiBlockSecondary>
      </div>
    </div>
  </div>
</template>
