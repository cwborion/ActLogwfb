import React from 'react'
import moment from 'moment'

const ExpenseSummary = ({ expense }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text-darken-3">
        <span className='card-title'>{expense.title}</span>
        <p className='grey-text'>Posted on {moment(expense.createdAt.toDate()).format(`LL`)}</p>
      </div>
    </div>
  )
}

export default ExpenseSummary