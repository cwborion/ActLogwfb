import React, { Component } from 'react'
import NoteList from './NoteList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class NoteDashboard extends Component {
  render() {
    console.log(this.props);
    const { notes } = this.props;

    return (
      <div className="dashboard container">
        <NoteList notes={notes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    notes: state.firestore.ordered.notes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes'}
  ])
)(NoteDashboard)

