import React, { Component } from 'react'
import GoalsList from './GoalsList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class GoalsDashboard extends Component {
  render() {
    console.log(this.props);
    const { goals, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <h3 className='white-text dash-h3'>Manage your goals here!</h3>
        <div className='row'>
          <div className='col s12 m8'>
            <Link className="white-text blue darken-4 small-add-buttons" to='/add-goal'>Add goal</Link>
            <GoalsList goals={goals} auth={auth} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    goals: state.firestore.ordered.goals,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'goals', orderBy: ['createdAt', 'desc'] }
  ])
)(GoalsDashboard)