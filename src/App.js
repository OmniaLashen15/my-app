import './App.css';
import React from 'react';
import Expenses from './Components/Expenses';

function App() {
  ///imperative approach
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById('root').append(para);
  const expenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount:94.12,
      data:new Date(2021, 7, 14)
    },
    { 
      id:"e2", 
      title:'New TV',
      amount:799.49,
      data:new Date(2021, 2, 12)
    },
    {
      id:'e3',
      title:'Car Insurance',
      amount:294.67,
      data:new Date(2021, 2, 28)
    },
    {
      id:'e4',
      title:'New Desk (Wooden)',
      amount:450,
      data:new Date(2021, 5, 12)}  
  ];
  return React.createElement(     //this is the alternative way for returning the tags below
    'div',
    {}, ///empty because it doesn't have attributes
    React.createElement('h2',{},"Let's get started!"),
    React.createElement(Expenses,{expenses:expenses})
  );
  // return (
  //   <div>
  //   <h2>Let's get started!</h2>
  //   <Expenses expenses={expenses}/>
  //   </div>
  // );
}

export default App;
