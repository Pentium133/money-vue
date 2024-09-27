<script lang="ts" setup>
const { transactions, pending, error } = useTransactions();
</script>

<template>
  <div class="px-10 pt-10">
    <h1 class="text-preset-1 mb-10 font-bold text-gray-800">Transactions</h1>

    <UiBlockSecondary class="flex flex-col gap-5">
      <UiTransactionsTable />
    </UiBlockSecondary>
  </div>
</template>
