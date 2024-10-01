export const usePots = () => {
  const { data, pending, error } = useFetch("http://localhost:3000/data.json");

  // Извлекаем только ключ transactions
  const pots = computed(() => (data.value?.pots || []).slice(0, 10));

  return {
    pots,
    pending,
    error,
  };
};
