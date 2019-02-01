import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteGoal } from '../../store/actions/goalActions'

class GoalSummary extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    // console.log(this.props.id);
    this.props.deleteGoal(this.props.id);
  }

  render() {
    const { goal } = this.props;
    return (
      <div className="card z-depth-0 projet-summary">
        <div className="card-content grey-text-darken-3">
          <span className='card-title'>{goal.title}</span>
          <p className='grey-text'>Posted on {moment(goal.createdAt.toDate()).format(`LL`)}</p>
          <button onClick={this.handleDelete}>Delete Goal</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGoal: (goal) => dispatch(deleteGoal(goal))
  }
}

export default connect(null, mapDispatchToProps)(GoalSummary)