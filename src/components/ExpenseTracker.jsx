function ExpenseTracker() {
  function TotalBalance() {
    const balance = "0.00";
    return balance;
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <h4>Your Balance</h4>
      <h1 id="balance">${TotalBalance()}</h1>

      <div className="Income-expense-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseTracker;
