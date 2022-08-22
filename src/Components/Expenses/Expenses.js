import ExpenseItem from "./ExpesneItem";
import './Expenses.css'
import Card from "../UI/Card";
import React from 'react';
import ExpensesFilter from "../NewExpense/ExpensesFilter";


const Expenses = (props) => {
    
    return(
        
        <div>
            <Card className="expenses">
                <ExpensesFilter/>
        <ExpenseItem 
        title={props.expenses[0].title} 
        amount={props.expenses[0].amount} 
        date={props.expenses[0].data}
        />
        <ExpenseItem
        title={props.expenses[1].title} 
        amount={props.expenses[1].amount} 
        date={props.expenses[1].data}
        />
        <ExpenseItem 
        title={props.expenses[2].title} 
        amount={props.expenses[2].amount} 
        date={props.expenses[2].data}
        />
        <ExpenseItem 
        title={props.expenses[3].title} 
        amount={props.expenses[3].amount} 
        date={props.expenses[3].data}
        />
        </Card>
        </div>
        )
      
}

export default Expenses;