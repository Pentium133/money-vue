<script lang="ts" setup>
const { pots, pending, error } = usePots();
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <UiPotsBlock v-for="pot in pots" :key="pot.name" :pot="pot"></UiPotsBlock>
  </div>
</template>
