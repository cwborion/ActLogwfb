import React, { Component } from 'react'
import ExpenseList from './ExpenseList'
// may be able to make this component stateless fucntional

class ExpenseDashboard extends Component {
  render() {

    return (
      <div className="dashboard container">

        <ExpenseList />

      </div>
    )
  }
}

export default ExpenseDashboard