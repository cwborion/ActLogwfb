import React from 'react'

const NoteSummary = ({ note }) => {
  return (
    <div className="card z-depth-0 projet-summary">
      <div className="card-content grey-text-darken-3">
        <span className='card-title'>{note.title}</span>
        <p className='grey-text'>14th January, 5pm</p>
      </div>
    </div>
  )
}

export default NoteSummary