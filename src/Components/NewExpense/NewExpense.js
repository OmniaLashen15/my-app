import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = () => {
//     const saveExpenseData = (enteredExpenseData) => {
//         const expenseData = {
//             ...enteredExpenseData,
//             id:Math.random().toString()
//         };
//         console.log(expenseData);
//     };
    return (
    <div className="new-expense">
        <ExpenseForm />
    </div>
    );
};

export default NewExpense;