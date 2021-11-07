import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Insert id into expense data array 
    const enteredData = {
      ...enteredExpenseData,
      id: Math.random().toString
    };

    // "Send" data to App.js
    props.onAddExpenseHandler(enteredData);

    // Hide expense form after save a new one
    toogleFormVisibility();
  };

  const [visibleForm, setVisibleForm] = useState(false);

  const toogleFormVisibility = () => {
    setVisibleForm(!visibleForm);
  }

  let content = <button type="button" onClick={toogleFormVisibility}>Add New Expense</button>;

  if (visibleForm) {
    content = <ExpenseForm changeView={toogleFormVisibility} onSaveExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
}

export default NewExpense;