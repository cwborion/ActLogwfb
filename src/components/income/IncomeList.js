import React from 'react'
import IncomeSummary from './IncomeSummary'
import { Link } from 'react-router-dom'

const IncomeList = ({ income }) => {
  return (
    <div className="section">

      {income && income.map(income => {
        return (
          <Link to={'/income/' + income.id} key={income.id}>
            <IncomeSummary income={income} key={income.id} />
          </Link>
        )
      })}

    </div>
  )
}

export default IncomeList