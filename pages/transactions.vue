<script lang="ts" setup>
const { transactions, pending, error } = useTransactions();
</script>

<template>
  <div class="px-10 pt-10">
    <h1 class="text-preset-1 mb-10 font-bold text-gray-800">Transactions</h1>

    <UiBlockSecondary class="flex flex-col gap-5">
      <div v-if="pending">Loading...</div>
      <div v-if="error">Error loading transactions: {{ error.message }}</div>
      <div v-if="transactions.length > 0">
        <UiIndexTransactionLine
          v-for="transaction in transactions"
          :key="transaction.name"
        >
          <template #name>{{ transaction.name }}</template>
          <template #sum>{{ transaction.amount }}</template>
          <template #date>{{ transaction.date }}</template>
        </UiIndexTransactionLine>
      </div>
      <p v-else>No transactions available</p>
    </UiBlockSecondary>
  </div>
</template>
