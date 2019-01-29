import React from 'react'
import IncomeSummary from './IncomeSummary'
import { Link } from 'react-router-dom'

const IncomeList = ({ income }) => {
  return (
    <div className="section">

      {income && income.map(income => {
        return (
          <Link to={'/income/' + income.id} key={income.id}>
            <IncomeSummary income={income} />
          </Link>
        )
      })}

    </div>
  )
}

export default IncomeList