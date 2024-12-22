import './notesTable.css';
function NoteTable(){
    return(
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
                <tr className="tr-body">
                    <td>Name</td>
                    <td>Date</td>
                    <td>Actions</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default NoteTable;