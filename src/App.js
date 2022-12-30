import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "294.67",
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "New Desk", amount: "24.67", date: new Date(2020, 2, 8) },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: "4.67",
      date: new Date(2021, 2, 28),
    },
    { id: "e4", title: "New TV", amount: "94.67", date: new Date(2020, 9, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
