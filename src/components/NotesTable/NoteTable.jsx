import "./notesTable.css";
function NoteTable({ notes }) {
  return (
    <div className="main-container">
      <table>
        <thead className="table-header">
          <tr className="tr-heading">
            <th>Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
            {notes.map((note) => {
              return (
                <tr className="tr-body">
                  <td>{note.title}</td>
                  <td>{note.date}</td>
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
