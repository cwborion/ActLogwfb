import React from 'react'
import GoalSummary from './GoalSummary'
import { Link } from 'react-router-dom'

const GoalsList = ({ goals, auth }) => {
  return (
    <div className="section">
      {goals && goals.map(goal => {
        if (goal.userId === auth.uid) {
          return (
            <Link to={'/goal/' + goal.id} key={goal.id}>
              <GoalSummary goal={goal} id={goal.id} />
            </Link>
          )
        } else {
          return null;
        }
      })}

    </div>
  )
}

export default GoalsList