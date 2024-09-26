<template>
  <div class="px-10 pt-10">
    <h1 class="text-preset-1 mb-10 font-bold text-gray-800">Transactions</h1>

    <UiBlockSecondary class="flex flex-col gap-5">
      <UiIndexTransactionLine>
        <template #name>Emma Richardson</template>
        <template #sum>+$75.50</template>
        <template #date>19 Aug 2024</template>
      </UiIndexTransactionLine>
      <UiIndexTransactionLine>
        <template #name>Savory Bites Bistro</template>
        <template #sum>-$55.50</template>
        <template #date>19 Aug 2024</template>
      </UiIndexTransactionLine>
      <UiIndexTransactionLine>
        <template #name>Daniel Carter</template>
        <template #sum>-$42.30</template>
        <template #date>18 Aug 2024</template>
      </UiIndexTransactionLine>
      <UiIndexTransactionLine>
        <template #name>Sun Park</template>
        <template #sum>+$150.00</template>
        <template #date>17 Aug 2024</template>
      </UiIndexTransactionLine>
      <UiIndexTransactionLine>
        <template #name>Urban Services Hub</template>
        <template #sum>-$65.00</template>
        <template #date>17 Aug 2024</template>
      </UiIndexTransactionLine>
    </UiBlockSecondary>
  </div>
</template>
