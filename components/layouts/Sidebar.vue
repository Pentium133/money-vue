<template>
  <aside
    class="relative h-full w-full rounded-r-[1rem] bg-gray-900 pt-4 text-gray-500"
  >
    <NuxtLink to="/">
      <NuxtImg
        v-if="menuStore.menuExpanded"
        width="300"
        class="pl-1"
        height="102"
        src="/assetss/logo-full.svg"
      />
      <NuxtImg
        v-else
        width="88"
        height="102"
        class="pl-1"
        src="/assetss/logo-mini.svg"
      />
    </NuxtLink>
    <LayoutsSideMenu />
  </aside>
</template>

<script lang="ts" setup>
import { useMenuStore } from "@/stores/menuStore";

// Создаем экземпляр стора
const menuStore = useMenuStore();
</script>
