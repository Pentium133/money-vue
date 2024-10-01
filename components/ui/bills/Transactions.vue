<script lang="ts" setup>
const { transactions, pending, error } = useBills();
</script>

<template>
  <div>
    <div>Transactions</div>
    <table class="min-w-full table-auto border-collapse border-0">
      <thead>
        <tr>
          <th
            class="text-preset-5 border-0 border-gray-300 px-4 py-3 text-left text-gray-500"
          >
            Bill Title
          </th>
          <th
            class="text-preset-5 border-0 border-gray-300 px-4 py-3 text-left text-gray-500"
          >
            Due Date
          </th>
          <th
            class="text-preset-5 border-0 border-gray-300 px-4 py-3 text-right text-gray-500"
          >
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.name">
          <td
            class="text-preset-4 border-t border-gray-100 px-4 py-4 font-bold text-gray-900"
          >
            <div class="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="20" cy="20" r="20" fill="#93664F" />
              </svg>

              {{ transaction.name }}
            </div>
          </td>
          <td
            class="text-preset-5 border-t border-gray-100 px-4 py-4 text-gray-500"
          >
            {{ transaction.date }}
          </td>
          <td
            class="text-preset-4 border-t border-gray-100 px-4 py-4 text-right font-bold"
          >
            {{ transaction.amount }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
