import { createContext, useContext } from "react";
import { useTransactions } from "../context/TransactionContext";
import Transaction from "./Transaction";

export const individualContext = createContext();

export const useTransaction = () => {
  return useContext(individualContext);
};

function TransactionList() {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <individualContext.Provider key={transaction.id} value={transaction}>
            <Transaction
              key={transaction.id}
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          </individualContext.Provider>
        ))}
      </ul>
    </>
  );
}
export default TransactionList;
