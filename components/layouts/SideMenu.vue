<script lang="ts" setup>
import { MENU_ITEMS } from "./menu.data";

// Получаем текущий маршрут
const route = useRoute();

// Функция для определения класса активного элемента
const getLinkClass = (url: string): string => {
  // Возвращаем вычисленный класс в зависимости от текущего маршрута
  return computed(() => {
    const isActive = route.path === url;
    return isActive
      ? "flex w-[276px] items-center gap-x-4 rounded-e-xl border-l-4 border-green bg-beige-100 py-4 pl-8"
      : "flex w-[276px] items-center gap-x-4 bg-gray-900 py-4 pl-8 text-gray-300 hover:text-gray-100";
  }).value;
};

const getIconPath = (iconName: string): string => {
  return `/assetss/menu/${iconName}.svg`; // Путь к файлу иконки
};

const getImgClass = (url: string): string => {
  return computed(() => {
    const isActive = route.path === url;
    return isActive ? "fill-green" : "fill-gray-300 hover:fill-gray-100";
  }).value;
};
</script>

<template>
  <nav class="mt-10">
    <ul class="">
      <li>
        <NuxtLink
          v-for="item in MENU_ITEMS"
          :key="item.url"
          :to="item.url"
          :class="getLinkClass(item.url)"
        >
          <img
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            :class="getImgClass(item.url)"
            :src="getIconPath(item.icon)"
          />
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <div class="absolute bottom-8">
      <div
        class="flex w-[276px] items-center gap-x-4 bg-gray-900 py-4 pl-8 text-gray-300 hover:text-gray-100"
      >
        <NuxtImg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          class="rotate-180 fill-gray-300 hover:fill-gray-100"
          src="/assetss/menu/minimize.svg"
        />
        Minimize Menu
      </div>
    </div>
  </nav>
</template>
