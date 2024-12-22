import { useState } from 'react';
import './App.css';
import NoteController from './components/NoteController/NoteController';
import NoteTable from './components/NotesTable/NoteTable';

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <div className='note-container'>
      <h1>Notes app</h1>
      <div className="note-controller"> 
        <NoteController notes={notes} setNote={setNotes}/>
      </div>
      <div className="notes-table">
        <NoteTable notes={notes}/>
      </div>
    </div>
  )
}

export default App
