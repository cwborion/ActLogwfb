import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../../store/actions/goalActions'

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

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addGoal(this.state);
  }

  render() {
    return (
      <div className='container'>
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

          <div className="input-field">
            <label htmlFor='completeDate'>Date for intended completion</label>
            <input type='date' id='completeDate' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Goal</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGoal: (goal) => dispatch(addGoal(goal))
  }
}

export default connect(null, mapDispatchToProps)(AddGoal)