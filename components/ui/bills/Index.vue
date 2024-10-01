<template>
  <div class="flex flex-col gap-6 lg:flex-row">
    <div class="flex flex-col flex-wrap gap-5 lg:w-1/3-gap-6">
      <UiBlockPrimary>
        <UiBillsTotal />
      </UiBlockPrimary>

      <UiBlockSecondary>
        <UiBillsSummary />
      </UiBlockSecondary>
    </div>

    <div class="w-full lg:w-2/3-gap-6">
      <UiBlockSecondary>
        <UiBillsTransactions />
      </UiBlockSecondary>
    </div>
  </div>
</template>
