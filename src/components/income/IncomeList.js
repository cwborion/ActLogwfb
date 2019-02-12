import React from 'react'
import IncomeSummary from './IncomeSummary'
import { Link } from 'react-router-dom'

const IncomeList = ({ incomes, auth }) => {
  return (
    <div className="section">
      {incomes && incomes.map((income, index ) => {
        console.log('incomes is', incomes);
        const filtered = incomes.filter((income, index) => {
          return incomes[index].userId === auth.uid;
        });
        console.log('filtered income array is', filtered)
        if (income.userId === auth.uid) {
          return (
            <Link to={'/income/' + income.id} key={income.id}>
              <IncomeSummary income={income} id={income.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          incomes.length = 0;
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