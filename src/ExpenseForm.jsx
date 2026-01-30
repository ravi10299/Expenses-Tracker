import { useRef, useState } from "react";
import "./App.css";

function ExpenseForm({ onAddExpenses }) {
  const [title, setTitele] = useState("");
  const [amount, setAmount] = useState("");
  const titelRef = useRef();

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      return alert("please fill all fields");
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    onAddExpenses(newExpense);
    setTitele("");
    setAmount("");
  };
  return (
    <>
      <form className="expense-form" onSubmit={HandleOnSubmit}>
        <input
          placeholder="Expence Title"
          type="text"
          value={title}
          onChange={(e) => setTitele(e.target.value)}
          ref={titelRef}
        />
        <input
          placeholder="Amount Rs"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}

export default ExpenseForm;
