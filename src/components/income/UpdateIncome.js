import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateIncome } from '../../store/actions/incomeActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class UpdateIncome extends Component {
  state = {
    employment: '',
    amount: Number,
    beginPayPeriod: Date,
    endPayPeriod: Date
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('expense is', this.props.expense);
    // this.props.updateExpense(this.state);

    // this.props.history.push('/expense/' + expense.id);
  }

  render() {
    const { income, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add pay period income</h5>
          <div className="input-field">
            <label htmlFor='employment'>Employment (however you refer to a specific job or income)</label>
            <input defaultValue={income.employment} type='text' id='employment' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='amount'>Amount earned</label>
            <input defaultValue={income.amount} type='number' id='amount' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='beginPayPeriod'>Beginning date of pay period</label>
            <input defaultValue={moment(income.beginPayPeriod).format(`YYYY-MM-DD`)} type='date' id='beginPayPeriod' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='endPayPeriod'>Ending date of pay period</label>
            <input defaultValue={moment(income.endPayPeriod).format(`YYYY-MM-DD`)} type='date' id='endPayPeriod' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Income</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // props are passed into mapStateToProps as the second argument and I decided to call it ownProps in this case
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
    updateIncome: (income) => dispatch(updateIncome(income))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'income' }
  ])
)(UpdateIncome)
