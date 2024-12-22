import "./notesTable.css";
function NoteTable({ notes, sortByDate }) {
  return (
    <div className="main-container">
      <table>
        <thead className="table-header">
          <tr className="tr-heading">
            <th>Name</th>
            <th onClick={sortByDate}>Date</th> 
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
            {notes.map((note) => {
              return (
                <tr className="tr-body" key={note.date}>
                  <td>{note.title}</td>
                  <td>{new Date(note.date).toLocaleString()}</td>
                  <td>Actions</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default NoteTable;
