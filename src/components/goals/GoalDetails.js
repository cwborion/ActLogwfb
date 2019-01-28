import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const GoalDetails = (props) => {
  const { goal } = props;
  if (goal) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{goal.title}</span>
            <p>{goal.description}</p>
            <p>I would like to achieve this goal by: {goal.completeDate}</p>
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
        <p>Loading Goal...</p>
      </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const goals = state.firestore.data.goals;
  const goal = goals ? goals[id] : null;
  return {
    goal: goal
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'goals' }
  ])
)(GoalDetails)