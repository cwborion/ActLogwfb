import React, { Component } from 'react'
import ExpenseList from './ExpenseList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'

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
  return {
    expenses: state.expenses.expenses
  }
}

export default connect(mapStateToProps)(ExpenseDashboard)