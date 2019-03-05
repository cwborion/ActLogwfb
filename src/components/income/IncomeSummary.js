import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteIncome } from '../../store/actions/incomeActions'

class IncomeSummary extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    // console.log(this.props.id);
    this.props.deleteIncome(this.props.id);
  }

  render() {
    const { income } = this.props;
    return (
      <div className="card z-depth-0 list-opac">
        <div className="card-content">
          <span className='card-title'>{income.employment}</span>
          <p className='grey-text text-darken-2'>Posted on {moment(income.createdAt.toDate()).format(`LL`)}</p>
          <button onClick={this.handleDelete}>Delete Income</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteIncome: (income) => dispatch(deleteIncome(income))
  }
}

export default connect(null, mapDispatchToProps)(IncomeSummary)