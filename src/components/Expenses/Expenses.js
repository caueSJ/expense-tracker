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

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onChangeFilter}
        yearSelected={filterValue}
      />
      {props.items.map((expense, index) => {
        return (
          <ExpenseItem
            key={index}
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
