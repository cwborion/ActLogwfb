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
      description: props.goal ? props.goal.description : '',
      completeDate: props.goal ? props.goal.completeDate : Date
    }
    console.log(props.goal)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {
    // localStorage.setItem(e.target.id, e.target.value)
    // use local storage with this to get props/state to persist on refreshes from update pages?
    console.log('comonentDidMount is firing', this.props)
  }

  submitEnabled() {
    const { title, description, completeDate } = this.state;
    return (
      title.length > 0 &&
      description.length > 0 &&
      completeDate.length === 10
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    // console.log('goal id is ', this.props.match.params.id);
    this.props.updateGoal(this.state, this.props.match.params.id);
    this.props.history.push('/goal/' + this.props.match.params.id);
  }

  // goBack = () => {
  //   window.history.back();
  // }
  // part of attempted handling of loss of state in update form when update page is refreshed.
  // worth using, or should use other technology like localStorage or data persisting?
  // or does it matter at all?

  render() {
    const { goal, auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    if (goal) {
      return (
        <div className='container row'>
          <div className='col s12 m10'>
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Update goal</h5>
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
                <input defaultValue={moment(goal.completeDate).format(`YYYY-MM-DD`)}
                  type='date' id='completeDate'
                  onChange={this.handleChange}
                />
              </div>
              {/* <p className='update-hint center'>
                * do not refresh this page before updating, it will result in loss of form info, in that
                event <button className='update-hint-btn blue-text' onClick={this.goBack}>go back</button> 
                &nbsp;to start over
              </p> */}
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
