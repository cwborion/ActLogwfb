import React, { Component } from 'react'

class AddIncome extends Component {
  state = {
    employment: '',
    amount: Number,
    beginPayPeriod: Date,
    endPayPeriod: Date
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
          <h5 className="grey-text text-darken-3">Add pay period income</h5>
          <div className="input-field">
            <label htmlFor='employment'>Employment (however you refer to a specific job or income)</label>
            <input type='text' id='employment' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='amount'>Amount earned</label>
            <input type='number' id='amount' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='beginPayPeriod'>Beginning date of pay period</label>
            <input type='date' id='beginPayPeriod' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor='endPayPeriod'>Ending date of pay period</label>
            <input type='date' id='endPayPeriod' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Income</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddIncome
