import { defineStore } from "pinia";
import { ref } from "vue";

// Определение стора с состоянием и действием
export const useMenuStore = defineStore("menuStore", () => {
  const menuExpanded = ref(true);

  // Действие для переключения состояния
  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value;
  };

  return {
    menuExpanded,
    toggleMenu,
  };
});
