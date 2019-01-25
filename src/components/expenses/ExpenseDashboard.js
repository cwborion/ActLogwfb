import React, { Component } from 'react'
import ExpenseList from './ExpenseList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class ExpenseDashboard extends Component {
  render() {
    console.log(this.props);
    const { expenses } = this.props;

    return (
      <div className="dashboard container">

        <ExpenseList expenses={expenses} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: state.firestore.ordered.expenses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'expenses'}
  ])
)(ExpenseDashboard)