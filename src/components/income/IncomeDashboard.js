import React, { Component } from 'react'
import IncomeList from './IncomeList'
// may be able to make this component stateless fucntional

class IncomeDashboard extends Component {
  render() {

    return (
      <div className="dashboard container">

        <IncomeList />

      </div>
    )
  }
}

export default IncomeDashboard