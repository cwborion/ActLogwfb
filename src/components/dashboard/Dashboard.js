import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">

        <h4 className="white-text">Welcome to your own, all-in-one, customizable activity and information logger!</h4>
        <div className='dash-outline'>
          <h4 className="dash-font dash-prompt">What would you like to do?</h4>
          <hr />
          <div className="row">
            <div className="col s12 m6">
              <h4>
                <Link className="white-text dash-h4" to='/add-expense'>Add Expense</Link>
              </h4>
              <p className="dash-font flow-text">
                List and calculate your expenses (rent, utiliites, subscriptions...)
              </p>
            </div>
            <div className="col s12 m5 offset-m1">
              <h4>
                <Link className="white-text dash-h4" to='/add-income'>Add Income</Link>
              </h4>
              <p className="dash-font flow-text">Record income collected between particular dates</p>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <h4>
                <Link className="white-text dash-h4" to='/add-goal'>Add Goal</Link>
              </h4>
              <p className="dash-font flow-text">Long (or short) term goals you're working towards</p>
            </div>
            <div className="col s12 m5 offset-m1">
              <h4>
                <Link className="white-text dash-h4" to='/add-note'>Add Note</Link>
              </h4>
              <p className="dash-font flow-text">
                Bookmarks, websites, quotes, various account info, things to keep in mind, etc...
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <h4>
                <Link className="white-text dash-h4" to='/add-todo'>Add Todo</Link>
              </h4>
              <p className="dash-font flow-text">
                Short term tasks and reminders
              </p>
            </div>
            <div className="col s12 m5 offset-m1">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state is', state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard)