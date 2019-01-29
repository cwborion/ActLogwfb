import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ExpenseDetails = (props) => {
  const { expense, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />

  if (expense) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{expense.title}</span>
            <p>Amount: {expense.amount}</p>
            <p>Due by: {moment(expense.dueDate).format(`LL`)}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted on {moment(expense.createdAt.toDate()).format(`LL`)}</div>
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
  // props are passed into mapStateToProps as the second argument and I decided to call it ownProps in this case
  // console.log(state);
  const id = ownProps.match.params.id;
  const expenses = state.firestore.data.expenses;
  const expense = expenses ? expenses[id] : null;
  return {
    expense: expense,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'expenses' }
  ])
)(ExpenseDetails)