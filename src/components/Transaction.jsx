// import { useTransactions } from "../context/TransactionContext";
import { useContext } from "react";
import { useTransaction } from "./TransactionList";
// import PropTypes from "prop-types";

function Transaction() {
  const transaction = useContext(useTransaction);

  // const { transaction, removeTransaction } = useTransactions();

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} €{Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => transaction.id}>
        ✖
      </button>
    </li>
  );
}

// Transaction.propTypes = {
//   transaction: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//   }).isRequired,
//   removeTransaction: PropTypes.func.isRequired,
// };

export default Transaction;
