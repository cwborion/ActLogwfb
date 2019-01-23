import React, { Component } from 'react'
import GoalsList from './GoalsList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'

class GoalsDashboard extends Component {
  render() {
    console.log(this.props);
    const { goals } = this.props;

    return (
      <div className="dashboard container">

        <GoalsList goals={goals} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals
  }
}

export default connect(mapStateToProps)(GoalsDashboard)