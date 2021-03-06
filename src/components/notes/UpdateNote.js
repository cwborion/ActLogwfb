import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../../store/actions/noteActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class UpdateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.note ? props.note.title : '',
      note: props.note ? props.note.note : ''
    }
    console.log(props.note)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitEnabled() {
    const { title, note } = this.state;
    return (
      title.length > 0 &&
      note.length > 0
    );
  }

  handleSubmit = (e) => {
    if (!this.submitEnabled()) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    // console.log('expense id is ', this.props.match.params.id);
    this.props.updateNote(this.state, this.props.match.params.id);
    this.props.history.push('/note/' + this.props.match.params.id);
  }

  render() {
    const { note, auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />
    console.log('note is', this.props.note);

    if (note) {
      return (
        <div className='container row'>
          <div className='col s12 m10'>
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Update note</h5>
              <div>
                <label htmlFor='title'>Title</label>
                <input defaultValue={note.title} type='text' id='title' onChange={this.handleChange} />
              </div>

              <div>
                <label htmlFor='note'>Note</label>
                <textarea defaultValue={note.note} id='note' className='materialize-textarea' onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field">
                <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Update</button>
              </div>
            </form>
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
}

const mapStateToProps = (state, ownProps) => {
  // props are passed into mapStateToProps as the second argument and I decided to call it ownProps in this case
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
    updateNote: (note, id) => dispatch(updateNote(note, id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(UpdateNote)
