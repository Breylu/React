import ExpenseTracker from "./components/ExpenseTracker";
import Transactions from "./components/Transactions";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <>
      <div className="container">
        <ExpenseTracker />
        <Transactions />
        <AddTransaction />
      </div>
    </>
  );
}
export default App;
