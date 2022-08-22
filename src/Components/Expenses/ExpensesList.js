import './ExpensesList.css'
import React from 'react';
import ExpenseItem from './ExpesneItem';

const ExpensesList = (props) => {
    if(props.items.length === 0 ) //conditional content
    {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }


    return (
      <ul className="expenses-list">
        {
            props.items.map((expense) => (
                <ExpenseItem 
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                  />
              ))
        }
      </ul>
      )

}

export default ExpensesList;