import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saveData = localStorage.getItem("expenses");
    return saveData ? JSON.parse(saveData) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense]);
    console.log(expenses.length);
  };

  const deleteExpenses = (id) => {
    alert("this expenses is delete" + id);
    setExpenses((prev) => prev.filter((item) => item.id != id));
  };

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  return (
    <>
      <div className="app-container">
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpenses={addExpenses} />
        <h3>Total Expense Rs : {totalExpenses.toFixed(2)}</h3>
        <ExpenseList expenses={expenses} onDelete={deleteExpenses} />
      </div>
    </>
  );
}

export default App;
