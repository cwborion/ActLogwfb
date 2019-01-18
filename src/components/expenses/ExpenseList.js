import React from 'react'
import ExpenseSummary from './ExpenseSummary'

const ExpenseList = ({ expenses }) => {
  return (
    <div className="section">

      { expenses && expenses.map(expense => {
        return (
          <ExpenseSummary expense={expense} key={expense.id} />
        )
      })}

    </div>
  )
}

export default ExpenseList