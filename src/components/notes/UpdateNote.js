import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../../store/actions/noteActions'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class UpdateNote extends Component {
  state = {
    title: '',
    note: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('expense is', this.props.expense);
    // this.props.updateExpense(this.state);

    // this.props.history.push('/expense/' + expense.id);
  }

  render() {
    const { note, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    console.log('expense is', this.props.expense);

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add a note</h5>
          <div className="input-field">
            <label htmlFor='title'>Title</label>
            <input defaultValue={note.title} type='text' id='title' onChange={this.handleChange} />
          </div>
          
          <div className="input-field">
            <label htmlFor='note'>Note</label>
            <textarea defaultValue={note.note} id='note' className='materialize-textarea' onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Add Note</button>
          </div>
        </form>
      </div>
    )
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
    updateNote: (note) => dispatch(updateNote(note))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(UpdateNote)
