import React from 'react'

const ExpenseDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className='card-title'>Expense Title - {id}</span>
          <p>**Expense Description goes here**</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>14th January, 5pm</div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseDetails