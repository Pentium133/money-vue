<template>
  <div
    class="container grid min-h-screen bg-beige-100"
    :class="
      menuStore.menuExpanded ? 'grid-cols-[300px_1fr]' : 'grid-cols-[88px_1fr]'
    "
  >
    <LayoutsSidebar />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/stores/menuStore";
const menuStore = useMenuStore();
</script>
