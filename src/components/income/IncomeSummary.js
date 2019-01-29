import React from 'react'
import moment from 'moment'

const IncomeSummary = ({ income }) => {
  return (
    <div className="card z-depth-0 projet-summary">
      <div className="card-content grey-text-darken-3">
        <span className='card-title'>{income.employment}</span>
        <p className='grey-text'>Posted on {moment(income.createdAt.toDate()).format(`LL`)}</p>
      </div>
    </div>
  )
}

export default IncomeSummary