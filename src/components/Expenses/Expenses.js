import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState('2020');

  const onChangeFilter = (year) => {
    setFilterValue(year);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterValue
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onChangeFilter}
        yearSelected={filterValue}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            year={filterValue}
          />
        );
      })}
    </Card>    
  );
}

export default Expenses;
