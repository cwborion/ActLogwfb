import React from 'react'
import NoteSummary from './NoteSummary'
import { Link } from 'react-router-dom'

const NoteList = ({ notes, auth }) => {
  return (
    <div className="section">

      {notes && notes.map(note => {
        const filtered = notes.filter((note, index) => {
          return notes[index].userId === auth.uid;
        });
        if (note.userId === auth.uid) {
          return (
            <Link to={'/note/' + note.id} key={note.id}>
              <NoteSummary note={note} id={note.id} />
            </Link>
          )
        } else if (filtered.length === 0) {
          notes.length = 0;
          // For some reason when the 'Notes' navlink is clicked in the navbar when the 'no notes' 
          // message is already rendering, it disappears. Try to fix this.
          return filtered.length === 0 ? 
            <p key={1} className='white-text'>
            Looks like you don't have any notes. Click the 'Add Note' button to start!
            </p> :
            null;
        } else {
          return null;
        }
      })}
    </div>
  )
}

export default NoteList