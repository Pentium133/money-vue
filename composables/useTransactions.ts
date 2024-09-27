export const useTransactions = () => {
  const { data, pending, error } = useFetch("http://localhost:3000/data.json");

  // Извлекаем только ключ transactions
  const transactions = computed(() =>
    (data.value?.transactions || []).slice(0, 10)
  );

  return {
    transactions,
    pending,
    error,
  };
};
