<template>
  <aside
    class="relative h-full w-full rounded-r-[1rem] bg-gray-900 pt-4 text-gray-500"
  >
    <NuxtLink to="/">
      <NuxtImg
        v-if="menuStore.menuExpanded"
        height="102"
        width="300"
        src="/assetss/logo-full.svg"
      />
      <NuxtImg v-else height="102" width="88" src="/assetss/logo-mini.svg" />
    </NuxtLink>
    <LayoutsSideMenu />
  </aside>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/stores/menuStore";

// Создаем экземпляр стора
const menuStore = useMenuStore();
</script>
