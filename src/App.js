import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'
import Remaining from './components/Remaining';
import Expenses from './components/Expenses';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (

    <AppProvider>
      <div className="container">
      <h1 className='m-3'>My Budget Plannar</h1>
      <div className='row m-3'>
        <div className='col-sm'>
          <Budget />

        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <Expenses />
        </div>
      </div>
      <h3 className='m-3'>Expenses</h3>
      <div className='row m-3'>
        <div className="col-sm">
          <ExpenseList/>
        </div>
      </div>
      <h3 className='m-3'>Add Expense</h3>
      <div className="m-3">
        <div className="col-sm">
          <AddExpense/>
        </div>
      </div>
      
    </div>

    </AppProvider>

    
  )
}
