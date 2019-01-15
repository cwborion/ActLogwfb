import React, { Component } from 'react'
import NoteList from './NoteList'
// may be able to make this component stateless fucntional

class NoteDashboard extends Component {
  render() {

    return (
      <div className="dashboard container">

        <NoteList />

      </div>
    )
  }
}

export default NoteDashboard