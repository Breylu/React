function Transaction() {
  //Money formatter function
  function moneyFormatter(num) {
    let p = num.toFixed(2).split(".");
    return (
      "$ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  }

  function handleRemoveTransaction(index) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  }

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={sign}>
        {transaction.text}{" "}
        <span>
          {sign}
          {moneyFormatter(transaction.amount)}
        </span>
        <button onClick={handleRemoveTransaction} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
}
export default Transaction;
