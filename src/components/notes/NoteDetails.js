import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const NoteDetails = (props) => {
  const { note } = props;
  if (note) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{note.title}</span>
            <p>{note.note}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>14th January, 5pm</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Note...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes ? notes[id] : null;
  return {
    note: note
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(NoteDetails)