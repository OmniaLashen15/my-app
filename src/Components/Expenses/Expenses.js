import ExpenseItem from "./ExpesneItem";
import './Expenses.css'
import Card from "../UI/Card";
import React,{useState} from 'react';
import ExpensesFilter from "../NewExpense/ExpensesFilter";


const Expenses = (props) => {
    
    const [filteredYear,setFilteredYear] = useState('2020');
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return(
        
        <div>
            <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler}/>
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