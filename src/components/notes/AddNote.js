import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../store/actions/noteActions'
import { Redirect } from 'react-router-dom'

class AddExpense extends Component {
  state = {
    title: '',
    note: ''
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
    this.props.addNote(this.state);
    this.props.history.push('/note-dashboard');
  }

  render() {
    const { auth } = this.props;
    const isEnabled = this.submitEnabled();
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container row'>
        <div className='col s12 m10'>
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add a note</h5>
            <div className="input-field">
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor='note'>Note</label>
              <textarea id='note' className='materialize-textarea' onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
              <button className="btn blue darken-3 z-depth-0" disabled={!isEnabled}>Add Note</button>
            </div>
          </form>
        </div>
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
    addNote: (note) => dispatch(addNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense)
