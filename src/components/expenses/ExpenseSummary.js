import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteExpense } from '../../store/actions/expenseActions'

class ExpenseSummary extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    // console.log('props are', this.props.id);
    this.props.deleteExpense(this.props.id);
  }

  render() {
    const { expense } = this.props;
    return (
      <div className="card z-depth-0">
        <div className="card-content grey-text-darken-3">
          <span className='card-title'>{expense.title}</span>
          <p className='grey-text'>Posted on {moment(expense.createdAt.toDate()).format(`LL`)}</p>
          <button onClick={this.handleDelete}>Delete Expense</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExpense: (expense) => dispatch(deleteExpense(expense))
  }
}

export default connect(null, mapDispatchToProps)(ExpenseSummary)
