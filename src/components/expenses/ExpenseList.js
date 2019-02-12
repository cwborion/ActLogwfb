import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import { Link } from 'react-router-dom'

const ExpenseList = ({ expenses, auth }) => {
  return (
    <div className="section">
      {expenses && expenses.map(expense => {
        const filtered = expenses.filter((expense, index) => {
          return expenses[index].userId === auth.uid;
        });
        if (expense.userId === auth.uid) {
          return (
            <Link to={'/expense/' + expense.id} key={expense.id}>
              <ExpenseSummary expense={expense} id={expense.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          expenses.length = 0;
          // For some reason when the 'Expenses' navlink is clicked in the navbar when the 'no expenses' 
          // message is already rendering, it disappears. Try to fix this.
          return filtered.length === 0 ? 
            <p key={1} className='white-text'>
            Looks like you don't have any expenses. Click the 'Add Expense' button to start!
            </p> :
            null;
        } else {
          return null;
        }
      })}

    </div>
  )
}

export default ExpenseList