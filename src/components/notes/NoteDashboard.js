import React, { Component } from 'react'
import NoteList from './NoteList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

class NoteDashboard extends Component {
  render() {
    // console.log(this.props);
    const { notes, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <h3 className='white-text dash-h3'>Manage your notes here!</h3>
        <div className='row'>
          <div className='col s12 m8'>
            <Link className="white-text blue darken-4 small-add-buttons" to='/add-note'>Add Note</Link>
            <NoteList notes={notes} auth={auth} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes', orderBy: ['createdAt', 'desc'] }
  ])
)(NoteDashboard)

