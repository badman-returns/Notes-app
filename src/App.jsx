import './App.css';
import NoteController from './components/NoteController/NoteController';
import NoteTable from './components/NotesTable/NoteTable';

function App() {

  return (
    <div className='note-container'>
      <h1>Notes app</h1>
      <div className="note-controller"> 
        <NoteController />
      </div>
      <div className="notes-table">
        <NoteTable />
      </div>
    </div>
  )
}

export default App
