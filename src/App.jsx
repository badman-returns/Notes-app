import './App.css';
import NoteController from './components/NoteController/NoteController';

function App() {

  return (
    <div className='note-container'>
      <h1>Notes app</h1>
      <div className="note-controller"> 
        <NoteController />
      </div>
      <div className="notes-table">
        
      </div>
    </div>
  )
}

export default App
