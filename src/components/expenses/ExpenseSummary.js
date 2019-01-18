import React from 'react'

const ExpenseSummary = ({ expense }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text-darken-3">
        <span className='card-title'>{expense.title}</span>
        <p className='grey-text'>14th January, 5pm</p>
      </div>
    </div>
  )
}

export default ExpenseSummary