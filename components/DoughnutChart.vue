<template>
  <div>
    <canvas ref="doughnutChart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Регистрация необходимых контроллеров и элементов Chart.js
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default defineComponent({
  name: "DoughnutChart",
  props: {
    data: {
      type: Object as () => Chart.ChartData,
      required: true,
    },
    options: {
      type: Object as () => Chart.ChartOptions,
      required: true,
    },
    text: {
      type: String,
      default: "$338", // Устанавливаем текст по умолчанию
    },
  },
  setup(props) {
    const doughnutChart = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (doughnutChart.value) {
        const ctx = doughnutChart.value.getContext("2d")!;
        new Chart(ctx, {
          type: "doughnut",
          data: props.data,
          options: {
            ...props.options,
            plugins: {
              legend: {
                display: false,
              },
              beforeDraw: (chart) => {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                ctx.restore();
                const fontSize = (height / 114).toFixed(2);
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";

                const text = props.text;
                const textX = Math.round(width / 2);
                const textY = height / 2;

                ctx.fillText(text, textX, textY);
                ctx.save();
              },
            },
            cutout: "70%", // Размер отверстия в центре диаграммы
          },
        });
      }
    });

    return {
      doughnutChart,
    };
  },
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
