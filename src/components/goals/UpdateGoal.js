import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGoal } from '../../store/actions/goalActions'
import { Redirect } from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class UpdateGoal extends Component {
  state = {
    title: '',
    description: '',
    completeDate: Date
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
    const { goal, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add a goal</h5>
          <div className="input-field">
            <label htmlFor='title'>Title</label>
            <input defaultValue={goal.title} type='text' id='title' onChange={this.handleChange} />
          </div>
          
          <div className="input-field">
            <label htmlFor='description'>Description</label>
            <textarea defaultValue={goal.description} id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <label htmlFor='completeDate'>Date for intended completion</label>
            <input defaultValue={moment(goal.completeDate).format(`YYYY-MM-DD`)} type='date' id='completeDate' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Goal</button>
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
  const goals = state.firestore.data.goals;
  const goal = goals ? goals[id] : null;
  return {
    goal: goal,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGoal: (goal) => dispatch(updateGoal(goal))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'goals' }
  ])
)(UpdateGoal)
