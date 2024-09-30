<template>
  <div
    class="flex w-full items-center justify-between border-b border-gray-200 py-2.5 last:border-b-0"
  >
    <div class="text-preset-5 font-bold"><slot name="name"></slot></div>
    <div class="flex flex-col items-end">
      <div class="text-preset-5 font-bold text-gray-900">
        <slot name="sum"></slot>
      </div>
      <div class="text-preset-5 text-gray-500"><slot name="date"></slot></div>
    </div>
  </div>
</template>
