import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ExpenseDetails = (props) => {
  const { expense } = props;
  if (expense) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{expense.title}</span>
            <p>Amount: {expense.amount}</p>
            <p>Due by: {expense.dueDate}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>14th January, 5pm</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Expense...</p>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const expenses = state.firestore.data.expenses;
  const expense = expenses ? expenses[id] : null;
  return {
    expense: expense
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'expenses' }
  ])
)(ExpenseDetails)