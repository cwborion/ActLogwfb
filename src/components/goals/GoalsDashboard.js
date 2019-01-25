import React, { Component } from 'react'
import GoalsList from './GoalsList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
  console.log(state);
  return {
    goals: state.firestore.ordered.goals
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'goals' }
  ])
)(GoalsDashboard)