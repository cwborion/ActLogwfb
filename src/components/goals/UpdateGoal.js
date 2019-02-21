import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGoal } from '../../store/actions/goalActions'
import { Redirect } from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

class UpdateGoal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.goal ? props.goal.title : '',
      description: props.goal ? props.goal.description : Number,
      completeDate: props.goal ? props.goal.completeDate : Date
    }
    console.log(props.goal)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('goal id is ', this.props.match.params.id);
    this.props.updateGoal(this.state, this.props.match.params.id);
    this.props.history.push('/goal/' + this.props.match.params.id);
  }

  render() {
    const { goal, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (goal) {
      return (
        <div className='container'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add a goal</h5>
            <div>
              <label htmlFor='title'>Title</label>
              <input defaultValue={goal.title} type='text' id='title' onChange={this.handleChange} />
            </div>
            
            <div>
              <label htmlFor='description'>Description</label>
              <textarea defaultValue={goal.description} id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
            </div>
  
            <div>
              <label htmlFor='completeDate'>Date for intended completion</label>
              <input defaultValue={moment(goal.completeDate).format(`YYYY-MM-DD`)} type='date' id='completeDate' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0">Update Goal</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="container center">
        <p className='white-text'>Loading Goal...</p>
      </div>
      )
    } 
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
    updateGoal: (goal, id) => dispatch(updateGoal(goal, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'goals' }
  ])
)(UpdateGoal)
