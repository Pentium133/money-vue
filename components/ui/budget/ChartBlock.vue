<script lang="ts" setup>
import DoughnutChart from "~/components/DoughnutChart.vue";

const chartData = {
  labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
  datasets: [
    {
      label: ["Budget"],
      data: [50, 750, 75, 100],
      backgroundColor: ["#287C78", "#82C9D7", "#F2CDAC", "#626070"],
      hoverBackgroundColor: ["#287C78", "#82C9D7", "#F2CDAC", "#626070"],
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="">
    <div class="px-16 py-5">
      <DoughnutChart :data="chartData" :options="chartOptions" text="$338" />
    </div>
    <div class="">
      <h2 class="text-preset-2 pb-6">Spending Summury</h2>
      <div class="flex flex-col gap-4">
        <div
          class="flex flex-row items-center justify-between border-l-4 border-green px-4"
        >
          <p class="text-preset-4 text-gray-500">Saving</p>
          <p class="text-preset-3 font-bold">
            $150
            <span class="text-preset-5 font-normal text-gray-500"
              >of $50.00</span
            >
          </p>
        </div>
        <div
          class="flex flex-row items-center justify-between border-l-4 border-cyan px-4"
        >
          <p class="text-preset-4 text-gray-500">Gift</p>
          <p class="text-preset-3 font-bold">
            $40
            <span class="text-preset-5 font-normal text-gray-500"
              >of $750.00</span
            >
          </p>
        </div>
        <div
          class="flex flex-row items-center justify-between border-l-4 border-yellow px-4"
        >
          <p class="text-preset-4 text-gray-500">Concert Ticket</p>
          <p class="text-preset-3 font-bold">
            $110
            <span class="text-preset-5 font-normal text-gray-500"
              >of $75.00</span
            >
          </p>
        </div>
        <div
          class="flex flex-row items-center justify-between border-l-4 border-navy px-4"
        >
          <p class="text-preset-4 text-gray-500">New Laptop</p>
          <p class="text-preset-3 font-bold">
            $10
            <span class="text-preset-5 font-normal text-gray-500"
              >of $100.00</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
