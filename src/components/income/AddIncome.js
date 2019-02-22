import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addIncome } from '../../store/actions/incomeActions'
import { Redirect } from 'react-router-dom'

class AddIncome extends Component {
  state = {
    employment: '',
    amount: '',
    beginPayPeriod: Date,
    endPayPeriod: Date
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitEnabled() {
    const { employment, amount, beginPayPeriod, endPayPeriod } = this.state;
    return (
      employment.length > 0 &&
      amount.length > 0 &&
      beginPayPeriod !== Date &&
      endPayPeriod !== Date 
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    this.props.addIncome(this.state);
    this.props.history.push('/income-dashboard');
  }

  render() {
    const { auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

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
            <input type='text' id='amount' onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor='beginPayPeriod'>Beginning date of pay period</label>
            <input type='date' id='beginPayPeriod' onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor='endPayPeriod'>Ending date of pay period</label>
            <input type='date' id='endPayPeriod' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Add Income</button>
          </div>
        </form>
      </div>
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
    addIncome: (income) => dispatch(addIncome(income))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIncome)
