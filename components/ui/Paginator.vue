<template>
  <div class="my-4 flex items-center justify-between">
    <button
      class="text-preset-4 group flex items-center space-x-2 rounded border border-beige-500 px-4 py-2 text-gray-900 transition hover:bg-beige-500 hover:text-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-gray-500 group-hover:fill-white"
      >
        <path
          d="M10.1466 12.8535L5.14656 7.85353C5.10007 7.8071 5.06319 7.75195 5.03803 7.69125C5.01286 7.63056 4.99991 7.56549 4.99991 7.49978C4.99991 7.43408 5.01286 7.36901 5.03803 7.30831C5.06319 7.24762 5.10007 7.19247 5.14656 7.14603L10.1466 2.14603C10.2165 2.07603 10.3056 2.02834 10.4027 2.00902C10.4997 1.98969 10.6003 1.9996 10.6917 2.03747C10.7831 2.07535 10.8612 2.1395 10.9162 2.22179C10.9711 2.30409 11.0004 2.40084 11.0003 2.49978L11.0003 12.4998C11.0004 12.5987 10.9711 12.6955 10.9162 12.7778C10.8612 12.8601 10.7831 12.9242 10.6917 12.9621C10.6003 13 10.4997 13.0099 10.4027 12.9905C10.3056 12.9712 10.2165 12.9235 10.1466 12.8535Z"
        />
      </svg>
      <div>Prev</div>
    </button>

    <div class="flex space-x-2">
      <button class="page">1</button>
      <button class="page-active">2</button>
      <button class="page">3</button>
      <button class="page">4</button>
      <button class="page">5</button>
    </div>

    <button
      class="text-preset-4 group flex items-center space-x-2 rounded border border-beige-500 px-4 py-2 text-gray-900 transition hover:bg-beige-500 hover:text-white"
    >
      Next
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-gray-500 group-hover:fill-white"
      >
        <path
          d="M5.85351 3.14647L10.8535 8.14647C10.9 8.1929 10.9369 8.24805 10.962 8.30875C10.9872 8.36944 11.0001 8.43451 11.0001 8.50022C11.0001 8.56592 10.9872 8.63099 10.962 8.69169C10.9369 8.75238 10.9 8.80753 10.8535 8.85397L5.85351 13.854C5.78358 13.924 5.69445 13.9717 5.59741 13.991C5.50037 14.0103 5.39977 14.0004 5.30836 13.9625C5.21695 13.9247 5.13883 13.8605 5.0839 13.7782C5.02896 13.6959 4.99968 13.5992 4.99976 13.5002L4.99976 3.50022C4.99968 3.40127 5.02896 3.30452 5.0839 3.22222C5.13883 3.13993 5.21695 3.07578 5.30836 3.0379C5.39977 3.00003 5.50037 2.99013 5.59741 3.00945C5.69445 3.02878 5.78358 3.07646 5.85351 3.14647Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.page {
  @apply transition bg-white hover:bg-beige-500 hover:text-white text-gray-900 rounded border border-beige-500 px-4 py-2;
}

.page-active {
  @apply transition bg-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-default  text-white rounded border border-gray-900 px-4 py-2;
}
</style>
