import React from 'react'
import IncomeSummary from './IncomeSummary'
import { Link } from 'react-router-dom'

const IncomeList = ({ income, auth }) => {
  return (
    <div className="section">
      {income && income.map((incomeObj, index ) => {
        console.log('income is', income);
        const filtered = income.filter((value, index) => {
          return income[index].userId === auth.uid;
        });
        console.log('filtered income array is', filtered)
        if (incomeObj.userId === auth.uid) {
          // used slightly different naming convention 'incomes' being plural to
          // differentiate between the array and the individual income as 'incomeObj'
          return (
            <Link to={'/income/' + incomeObj.id} key={incomeObj.id}>
              <IncomeSummary income={incomeObj} id={incomeObj.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          income.length = 0;
          // For some reason when the 'Todos' navlink is clicked in the navbar when the 'no todos' 
          // message is already rendering, it disappears. Try to fix this.
          return filtered.length === 0 ? 
            <p key={1} className='white-text'>
            Looks like you don't have any income. Click the 'Add Iodo' button to start!
            </p> :
            null;
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default IncomeList