import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    todo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add to your todo list</h5>
          <div className="input-field">
            <label htmlFor='todo'>Todo</label>
            <input type='text' id='todo' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo