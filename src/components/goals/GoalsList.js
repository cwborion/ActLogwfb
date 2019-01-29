import React from 'react'
import GoalSummary from './GoalSummary'
import { Link } from 'react-router-dom'

const GoalsList = ({ goals }) => {
  return (
    <div className="section">

      {goals && goals.map(goal => {
        return (
          <Link to={'/goal/' + goal.id} key={goal.id}>
            <GoalSummary goal={goal} />
          </Link>
        )
      })}

    </div>
  )
}

export default GoalsList