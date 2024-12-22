import { useState } from "react";
import "./App.css";
import NoteController from "./components/NoteController/NoteController";
import NoteTable from "./components/NotesTable/NoteTable";

function App() {
  const [notes, setNotes] = useState([]);
  const [latest, setLatest] = useState(true);

  const sortByLatest = () => {
    const noteList = [...notes].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setNotes(noteList);
  };
  const sortByOldest = () => {
    const noteList = [...notes].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setNotes(noteList);
  };

  const sortByDate = () => {
    if (!latest) {
      sortByLatest();
      setLatest(true);
    } else {
      sortByOldest();
      setLatest(false);
    }
  };

  return (
    <div className="note-container">
      <h1>Notes app</h1>
      <div className="note-controller">
        <NoteController notes={notes} setNote={setNotes} />
      </div>
      <div className="notes-table">
        <NoteTable notes={notes} sortByDate={sortByDate} />
      </div>
    </div>
  );
}

export default App;
