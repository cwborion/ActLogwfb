import React from 'react'
import IncomeSummary from './IncomeSummary'
import { Link } from 'react-router-dom'

const IncomeList = ({ income, auth }) => {
  return (
    <div className="section">
      {income && income.map(income => {
        if (income.userId === auth.uid) {
          return (
            <Link to={'/income/' + income.id} key={income.id}>
              <IncomeSummary income={income} id={income.id} />
            </Link>
          )
        } else {
          return null;
        }
      })}

    </div>
  )
}

export default IncomeList