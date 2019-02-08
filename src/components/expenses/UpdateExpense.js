import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExpense } from '../../store/actions/expenseActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class UpdateExpense extends Component {
  state = {
    title: '',
    amount: Number,
    dueDate: Date
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
    const { expense, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    console.log('expense is', this.props.expense);

    if (expense) {
      return (
        <div className='container'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Update your expense</h5>
            <div className="input-field">
              <label htmlFor='title'>Title</label>
              <input defaultValue={expense.title} type='text' id='title' onChange={this.handleChange} />
            </div>
  
            <div className="input-field">
              <label htmlFor='amount'>Amount</label>
              <input defaultValue={expense.amount}  type='number' id='amount' onChange={this.handleChange} />
            </div>
  
            <div className="input-field">
              <label htmlFor='dueDate'>Due Date</label>
              <input defaultValue={moment(expense.dueDate).format(`YYYY-MM-DD`)} type='date' id='dueDate' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0">Update Expense</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="container center">
        <p className='white-text'>Loading Expense...</p>
      </div>
      )
    }
    
  }
}

const mapStateToProps = (state, ownProps) => {
  // props are passed into mapStateToProps as the second argument and I decided to call it ownProps in this case
  // console.log(state);
  const id = ownProps.match.params.id;
  const expenses = state.firestore.data.expenses;
  const expense = expenses ? expenses[id] : null;
  return {
    expense: expense,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateExpense: (expense) => dispatch(updateExpense(expense))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'expenses' }
  ])
)(UpdateExpense)
