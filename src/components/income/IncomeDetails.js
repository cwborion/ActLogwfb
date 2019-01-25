import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const IncomeDetails = (props) => {
  const { income } = props;
  if (income) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{income.employment}</span>
            <p>Amount Earned: {income.amount}</p>
            <p>Beginning of pay period: {income.beginPayPeriod}</p>
            <p>End of pay period: {income.endPayPeriod}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>14th January, 5pm</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Income...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const incomes = state.firestore.data.income;
  const income = incomes ? incomes[id] : null;
  return {
    income: income
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'income' }
  ])
)(IncomeDetails)