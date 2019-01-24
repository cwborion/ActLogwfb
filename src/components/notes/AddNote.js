import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../../store/actions/noteActions'

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

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className='container'>
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
            <button className="btn blue darken-3 z-depth-0">Add Note</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note))
  }
}

export default connect(null, mapDispatchToProps)(AddExpense)
