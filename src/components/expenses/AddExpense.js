import React, { Component } from 'react'

class AddExpense extends Component {
  state = {
    title: '',
    amount: Number,
    dueDate: Date
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
          <h5 className="grey-text text-darken-3">Add an expense</h5>
          <div className="input-field">
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='amount'>Amount</label>
            <input type='number' id='amount' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='dueDate'>Due Date</label>
            <input type='date' id='dueDate' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Expense</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddExpense
