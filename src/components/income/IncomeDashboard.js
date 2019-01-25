import React, { Component } from 'react'
import IncomeList from './IncomeList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class IncomeDashboard extends Component {
  render() {
    console.log(this.props);
    const { income } = this.props;

    return (
      <div className="dashboard container">

        <IncomeList income={income} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    income: state.firestore.ordered.income
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'income' }
  ])
)(IncomeDashboard)