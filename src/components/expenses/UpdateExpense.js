import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExpense } from '../../store/actions/expenseActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import numeral from 'numeral'

class UpdateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.title : '',
      amount: props.expense ? props.expense.amount : '',
      dueDate: props.expense ? props.expense.dueDate : Date
    }
    console.log(props.expense)
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
    // console.log('expense id is ', this.props.match.params.id);
    this.props.updateExpense(this.state, this.props.match.params.id);
    this.props.history.push('/expense/' + this.props.match.params.id);
  }

  render() {
    const { expense, auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />
    console.log('expense is', this.props.expense);
    console.log('this.state is ', this.state)

    if (expense) {
      return (
        <div className='container row'>
            <div className='col s12 m8'>
              <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Update your expense</h5>
                <div>
                  <label htmlFor='title'>Title</label>
                  <input defaultValue={expense.title} type='text' id='title' onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor='amount'>
                    Amount <span className='amount-hint'>
                      *(example: '1,200,300.05'. be sure to properly place commas and decimals)
                </span>
                  </label>
                  <input defaultValue={numeral(expense.amount).format('0,0.00')} type='text' id='amount' onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor='dueDate'>Due Date</label>
                  <input defaultValue={moment(expense.dueDate).format(`YYYY-MM-DD`)} type='date' id='dueDate' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Update</button>
                </div>
              </form>
            </div>
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
    updateExpense: (expense, id) => dispatch(updateExpense(expense, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'expenses' }
  ])
)(UpdateExpense)
