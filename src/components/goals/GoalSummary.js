import React from 'react'
import moment from 'moment'

const GoalSummary = ({ goal }) => {
  return (
    <div className="card z-depth-0 projet-summary">
      <div className="card-content grey-text-darken-3">
        <span className='card-title'>{goal.title}</span>
        <p className='grey-text'>Posted on {moment(goal.createdAt.toDate()).format(`LL`)}</p>
      </div>
    </div>
  )
}

export default GoalSummary