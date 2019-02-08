import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import { Link } from 'react-router-dom'

const ExpenseList = ({ expenses, auth }) => {
  return (
    <div className="section">

      {expenses && expenses.map(expense => {
        if (expense.userId === auth.uid) {
          return (
            <Link to={'/expense/' + expense.id} key={expense.id}>
              <ExpenseSummary expense={expense} id={expense.id} />
            </Link>
          )
        } else {
          return null;
        }
      })}

    </div>
  )
}

export default ExpenseList