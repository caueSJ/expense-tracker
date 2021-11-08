import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
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
    <li>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={onChangeFilter}
          yearSelected={filterValue}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
