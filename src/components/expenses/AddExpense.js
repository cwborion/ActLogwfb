import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../../store/actions/expenseActions'
import { Redirect } from 'react-router-dom'

class AddExpense extends Component {
  state = {
    title: '',
    amount: '',
    dueDate: Date
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitEnabled() {
    const { title, amount, dueDate } = this.state;
    const regex = /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/;
    return (
      title.length > 0 &&
      amount.length > 0 &&
      regex.test(amount) &&
      dueDate.length === 10
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    this.props.addExpense(this.state);
    this.props.history.push('/expense-dashboard');
  }

  render() {
    const { auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add an expense</h5>
          <div className="input-field">
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='amount'>
              Amount <span className='amount-hint'>
                *(example: '1,200,300.05'. be sure to properly place commas and decimals)
              </span>
            </label>
            <input type='text' id='amount' onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor='dueDate'>Due Date</label>
            <input type='date' id='dueDate' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Add Expense</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense)
