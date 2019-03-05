import React from 'react'
import GoalSummary from './GoalSummary'
import { Link } from 'react-router-dom'

const GoalsList = ({ goals, auth }) => {
  return (
    <div className="section">
      {goals && goals.map(goal => {
        const filtered = goals.filter((goal, index) => {
          return goals[index].userId === auth.uid;
        });
        if (goal.userId === auth.uid) {
          return (
            <Link to={'/goal/' + goal.id} key={goal.id}>
              <GoalSummary goal={goal} id={goal.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          goals.length = 0;
          return filtered.length === 0 ? 
            <p key={1} className='white-text'>
            Looks like you don't have any goals. Click the 'Add Goal' button to start!
            </p> :
            null;
        } else {
          return null;
        }
      })}

    </div>
  )
}

export default GoalsList