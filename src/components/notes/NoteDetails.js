import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteNote } from '../../store/actions/noteActions'

const NoteDetails = (props) => {
  const { note, auth } = props;

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteNote(props.match.params.id);
    props.history.push('/note-dashboard');
  }

  const goToUpdate = () => {
    props.history.push('/update-note/' + props.match.params.id);
  }

  if (!auth.uid) return <Redirect to='/signin' />

  if (note) {
    return (
      <div className="container section row">
        <div className='col s12 m8'>
          <div className="card z-depth-0">
            <div className="card-content">
              <span className='card-title'>{note.title}</span>
              <p>{note.note}</p>
              <button onClick={goToUpdate}>Update Note</button> <button onClick={handleDelete}>Delete Note</button>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted on {moment(note.createdAt.toDate()).format(`LL`)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p className='white-text'>Loading Note...</p>
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
    note: note,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (note) => dispatch(deleteNote(note))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(NoteDetails)