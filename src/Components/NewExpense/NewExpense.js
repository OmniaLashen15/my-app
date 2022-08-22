import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // pass data from child to parent
        props.onAddExpense(expenseData);     ///lifting state up
    };
    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseData} />
    </div>
    );
};

export default NewExpense;