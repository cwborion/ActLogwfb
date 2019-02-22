import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateIncome } from '../../store/actions/incomeActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import numeral from 'numeral'

class UpdateIncome extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      employment: props.income ? props.income.employment : '',
      amount: props.income ? props.income.amount : '',
      beginPayPeriod: props.income ? props.income.beginPayPeriod : Date,
      endPayPeriod: props.income ? props.income.endPayPeriod : Date
    }
    console.log(props.income)
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
    // console.log('income id is ', this.props.match.params.id);
    this.props.updateIncome(this.state, this.props.match.params.id);
    this.props.history.push('/income/' + this.props.match.params.id);
  }

  render() {
    const { income, auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    if (income) {
      return (
        <div className='container'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Update pay period income</h5>
            <div>
              <label htmlFor='employment'>Employment (however you refer to a specific job or income)</label>
              <input defaultValue={income.employment} type='text' id='employment' onChange={this.handleChange} />
            </div>
  
            <div>
              <label htmlFor='amount'>Amount earned</label>
              <input defaultValue={numeral(income.amount).format('$0,0.00')} type='text' id='amount' onChange={this.handleChange} />
            </div>
  
            <div>
              <label htmlFor='beginPayPeriod'>Beginning date of pay period</label>
              <input defaultValue={moment(income.beginPayPeriod).format(`YYYY-MM-DD`)} type='date' id='beginPayPeriod' onChange={this.handleChange} />
            </div>
  
            <div>
              <label htmlFor='endPayPeriod'>Ending date of pay period</label>
              <input defaultValue={moment(income.endPayPeriod).format(`YYYY-MM-DD`)} type='date' id='endPayPeriod' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Update</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="container center">
        <p className='white-text'>Loading Income...</p>
      </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // props are passed into mapStateToProps as the second argument and I decided to call it ownProps in this case
  // console.log(state);
  const id = ownProps.match.params.id;
  const incomes = state.firestore.data.income;
  const income = incomes ? incomes[id] : null;
  return {
    income: income,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateIncome: (income, id) => dispatch(updateIncome(income, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'income' }
  ])
)(UpdateIncome)
