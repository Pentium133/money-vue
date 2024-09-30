export const useBudgets = () => {
  const { data, pending, error } = useFetch("http://localhost:3000/data.json");

  // Извлекаем только ключ transactions
  const budgets = computed(() => (data.value?.budgets || []).slice(0, 10));

  return {
    budgets,
    pending,
    error,
  };
};
