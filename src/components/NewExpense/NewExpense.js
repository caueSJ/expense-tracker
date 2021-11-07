import React from 'react';
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
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;