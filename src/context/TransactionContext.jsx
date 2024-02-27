import { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

export const useTransactions = () => {
  return useContext(TransactionsContext);
};

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  function removeTransaction(index) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
