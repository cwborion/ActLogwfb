import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteNote } from '../../store/actions/noteActions'

class NoteSummary extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    // console.log(this.props.id);
    this.props.deleteNote(this.props.id);
  }

  render() {
    const { note } = this.props;
    return (
      <div className="card z-depth-0 list-opac">
        <div className="card-content">
          <span className='card-title'>{note.title}</span>
          <p className='grey-text text-darken-2'>Posted on {moment(note.createdAt.toDate()).format(`LL`)}</p>
          <button onClick={this.handleDelete}>Delete Note</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (note) => dispatch(deleteNote(note))
  }
}

export default connect(null, mapDispatchToProps)(NoteSummary)