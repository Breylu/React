import Transaction from "./Transaction";
import { useTransactions } from "../context/TransactionContext";

function TransactionList() {
  const { transactions } = useTransactions();
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
export default TransactionList;
