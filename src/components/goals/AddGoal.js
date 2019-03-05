import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../../store/actions/goalActions'
import { Redirect } from 'react-router-dom'

class AddGoal extends Component {
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
    this.props.addGoal(this.state);
    this.props.history.push('/goal-dashboard');
  }

  render() {
    const { auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container row'>
        <div className='col s12 m10'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add a goal</h5>
            <div className="input-field">
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor='description'>Description</label>
              <textarea id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
            </div>

            <div>
              <label htmlFor='completeDate'>Date for intended completion</label>
              <input type='date' id='completeDate' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Add Goal</button>
            </div>
          </form>
        </div>
      </div >
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
    addGoal: (goal) => dispatch(addGoal(goal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal)