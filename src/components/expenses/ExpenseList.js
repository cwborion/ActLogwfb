import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import { Link } from 'react-router-dom'

const ExpenseList = ({ expenses }) => {
  return (
    <div className="section">

      {expenses && expenses.map(expense => {
        return (
          <Link to={'/expense/' + expense.id} key={expense.id}>
            <ExpenseSummary expense={expense} />
          </Link>
        )
      })
    }

    </div>
  )
}

export default ExpenseList