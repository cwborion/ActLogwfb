import React from 'react'
import NoteSummary from './NoteSummary'
import { Link } from 'react-router-dom'

const NoteList = ({ notes, auth }) => {
  return (
    <div className="section">

      {notes && notes.map(note => {
        if (note.userId === auth.uid) {
          return (
            <Link to={'/note/' + note.id} key={note.id}>
              <NoteSummary note={note} id={note.id} />
            </Link>
          )
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default NoteList