import ExpenseTracker from "./components/ExpenseTracker";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <div className="container">
        <ExpenseTracker />
        <TransactionList />
        <AddTransaction />
        <Transaction />
      </div>
    </>
  );
}
export default App;
