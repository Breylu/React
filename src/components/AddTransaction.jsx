import { useState, useContext } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label> <br />
        <input type="text" placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br /> (negative - expense,positive - income)
        </label>
        <br />
        <input type="number" placeholder="Enter amount..." />
      </div>
    </>
  );
}
export default AddTransaction;
