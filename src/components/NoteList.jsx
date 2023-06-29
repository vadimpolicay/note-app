import React from 'react'




const NoteList = () => {
  return (
    <div className='app-noteList'>

      <div className="app-noteList-header">
        <h1>Notes</h1>
        <div className='search'>
          <input type='text' placeholder='Search...'></input>
        </div>
       
      </div>
      <div className="app-noteList-body">
        <div className="note">
          <div className="note-title">title</div>
          <p>descriptityeujykit,myfdnthbgbstryndtmufyuig,fymntdbgnhdfjon</p>
          <small className='note-info'>current date</small>
        </div>

        <div className="note">
          <div className="note-title">title</div>
          <p>description</p>
          <small className='note-info'>current date</small>
        </div>

        <div className="note">
          <div className="note-title">title</div>
          <p>description</p>
          <small className='note-info'>current date</small>
        </div>
      </div>
      
    </div>
  )
}

export default NoteList
