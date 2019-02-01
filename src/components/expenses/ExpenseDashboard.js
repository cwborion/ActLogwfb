import React, { Component } from 'react'
import ExpenseList from './ExpenseList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class ExpenseDashboard extends Component {
  render() {
    console.log(this.props);
    const { expenses, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <h3 className='white-text'>Manage your expenses here!</h3>
        <Link className="white-text small-add-buttons" to='/add-expense'>Add Expense</Link>

        <ExpenseList expenses={expenses} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: state.firestore.ordered.expenses,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'expenses'}
  ])
)(ExpenseDashboard)