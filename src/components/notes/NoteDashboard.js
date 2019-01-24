import React, { Component } from 'react'
import NoteList from './NoteList'
// may be able to make this component stateless fucntional
import { connect } from 'react-redux'

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
  return {
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps)(NoteDashboard)

