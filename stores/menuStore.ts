import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const useMenuStore = defineStore("menuStore", () => {
  const menuExpanded = ref(true); // По умолчанию меню развернуто
  const isInitialized = ref(false); // Флаг для контроля инициализации

  // Читаем состояние из localStorage при монтировании
  onMounted(() => {
    const storedState = localStorage.getItem("menuExpanded");
    if (storedState !== null) {
      menuExpanded.value = storedState === "true";
    }
    isInitialized.value = true; // Состояние инициализировано
  });

  // Функция для переключения состояния
  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value;
    localStorage.setItem("menuExpanded", String(menuExpanded.value));
  };

  return {
    menuExpanded,
    toggleMenu,
    isInitialized,
  };
});
