import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteIncome } from '../../store/actions/incomeActions'

const IncomeDetails = (props) => {
  const { income, auth } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteIncome(props.match.params.id);
    props.history.push('/income-dashboard');
  }

  const goToUpdate = () => {
    props.history.push('/update-income/' + props.match.params.id);
  }

  if(!auth.uid) return <Redirect to='/signin' />

  if (income) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{income.employment}</span>
            <p>Amount Earned: {income.amount}</p>
            <p>Beginning of pay period: {moment(income.beginPayPeriod).format(`LL`)}</p>
            <p>End of pay period: {moment(income.endPayPeriod).format(`LL`)}</p>
            <button onClick={goToUpdate}>Update Income</button> <button onClick={handleDelete}>Delete Income</button>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted on {moment(income.createdAt.toDate()).format(`LL`)}</div>
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
    income: income,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIncome: (expense) => dispatch(deleteIncome(expense))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'income' }
  ])
)(IncomeDetails)