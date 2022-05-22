import React from 'react'
import Expenses from "./Components/Expenses/Expenses";
const app=() => {
  let expenses = [
    {
      id: "e1",
      date: new Date(2022, 3, 13),
      title: "School fee",
      amount: 300,
    },
    {
      id: "e2",
      date: new Date(2022, 3, 13),
      title: "Tuition fee",
      amount: 500,
    },
    {
      id: "e3",
      date: new Date(2022, 3, 13),
      title: "Bus fee",
      amount: 30,
    },
    {
      id: "e4",
      date: new Date(2022, 3, 13),
      title: "Electricty fee",
      amount: 300,
    },
  ];

  return (
    <>
      <h2>Lets get started </h2>
      <Expenses item={expenses}/>
    </>
  );
}
export default app;
