import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New Desk",
    amount: "24.67",
    date: new Date(2020, 2, 8),
  },
  {
    id: "e5",
    title: "New Table",
    amount: "30.67",
    date: new Date(2020, 4, 8),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: "4.67",
    date: new Date(2021, 2, 8),
  },
  { id: "e4", title: "New TV", amount: "94.67", date: new Date(2020, 9, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
