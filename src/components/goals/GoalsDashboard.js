import React, { Component } from 'react'
import GoalsList from './GoalsList'
// may be able to make this component stateless fucntional

class GoalsDashboard extends Component {
  render() {

    return (
      <div className="dashboard container">

        <GoalsList />

      </div>
    )
  }
}

export default GoalsDashboard