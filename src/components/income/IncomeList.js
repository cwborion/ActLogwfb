import React from 'react'
import IncomeSummary from './IncomeSummary'

const IncomeList = ({ income }) => {
  return (
    <div className="project-list section">

      {income && income.map(income => {
        return (
          <IncomeSummary income={income} key={income.id} />
        )
      })}

    </div>
  )
}

export default IncomeList