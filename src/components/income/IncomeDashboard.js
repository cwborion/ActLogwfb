import React, { Component } from 'react'
import IncomeList from './IncomeList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class IncomeDashboard extends Component {
  render() {
    // console.log(this.props);
    const { income, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <h3 className='white-text dash-h3'>Manage your income here!</h3>
        <div className='row'>
          <div className='col s12 m8'>
            <Link className="white-text blue darken-4 small-add-buttons" to='/add-income'>Add Income</Link>
            <IncomeList income={income} auth={auth} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    income: state.firestore.ordered.income,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'income', orderBy: ['createdAt', 'desc'] }
  ])
)(IncomeDashboard)