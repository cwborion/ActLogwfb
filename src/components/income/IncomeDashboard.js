import React, { Component } from 'react'
import IncomeList from './IncomeList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'

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
  return {
    income: state.income.income
  }
}

export default connect(mapStateToProps)(IncomeDashboard)