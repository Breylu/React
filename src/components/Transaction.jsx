import { useTransactions } from "../context/TransactionContext";

function Transaction() {
  const { transactions, removeTransaction } = useTransactions();

  const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}
      <span>
        {sign}
        {transactions.amount}
      </span>
      <button className="delete-btn" onClick={removeTransaction}>
        x
      </button>
    </li>
  );
}
//Money formatter function
// function moneyFormatter(num) {
//   let p = num.toFixed(2).split(".");
//   return (
//     "$ " +
//     p[0]
//       .split("")
//       .reverse()
//       .reduce(function (acc, num, i, orig) {
//         return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
//       }, "") +
//     "." +
//     p[1]
//   );
// }
export default Transaction;
