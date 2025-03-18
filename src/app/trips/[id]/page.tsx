"use client";
import { useState } from "react";

export default function TripDetails({ params }: { params: { id: string } }) {
  const [expenses, setExpenses] = useState([
    { id: "1", name: "Hotel", amount: 2000 },
    { id: "2", name: "Food", amount: 1000 },
  ]);

  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });
  const [peopleCount, setPeopleCount] = useState(2); // Default: 2 people

  const addExpense = () => {
    if (!newExpense.name || !newExpense.amount) return;

    setExpenses([...expenses, { 
      id: (expenses.length + 1).toString(),
      name: newExpense.name, 
      amount: Number(newExpense.amount) 
    }]);
    setNewExpense({ name: "", amount: "" });
  };

  const totalAmount = expenses.reduce((total, exp) => total + exp.amount, 0);
  const amountPerPerson = peopleCount > 0 ? (totalAmount / peopleCount).toFixed(2) : 0;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">Trip Details</h1>
      <p className="text-gray-600">Trip ID: {params.id}</p>

      {/* Expenses List */}
      <div className="mt-4 space-y-3">
        {expenses.map((expense) => (
          <div key={expense.id} className="p-3 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">{expense.name}</h2>
            <p className="text-gray-600">₹{expense.amount}</p>
          </div>
        ))}
      </div>

      {/* Add Expense */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <input
          type="text"
          placeholder="Expense Name"
          className="p-2 border rounded w-full mb-2"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          className="p-2 border rounded w-full mb-2"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={addExpense} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Add Expense
        </button>
      </div>

      {/* People Count & Split Calculation */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <label className="block text-gray-600 font-medium">Number of People:</label>
        <input
          type="number"
          min="1"
          className="p-2 border rounded w-full mt-2"
          value={peopleCount}
          onChange={(e) => setPeopleCount(Number(e.target.value))}
        />
      </div>

      {/* Total & Per Person Split */}
      <h3 className="mt-4 text-xl font-bold">Total: ₹{totalAmount}</h3>
      <h3 className="mt-2 text-xl font-bold">Each Person Pays: ₹{amountPerPerson}</h3>
    </div>
  );
}
