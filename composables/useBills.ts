export const useBills = () => {
  const { data, pending, error } = useFetch("http://localhost:3000/data.json");

  // Определение типа для транзакции
  interface Transaction {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
  }

  // Извлекаем и фильтруем транзакции, где recurring = true, и ограничиваем результат 10 элементами
  const transactions = computed(() =>
    (data.value?.transactions || [])
      .filter((transaction: Transaction) => transaction.recurring === true)
      .slice(0, 10)
  );

  return {
    transactions,
    pending,
    error,
  };
};
