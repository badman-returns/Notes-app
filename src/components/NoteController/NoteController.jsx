
import './notesController.css';

function NoteController() {

    return (
        <div className="container">
            <input placeholder="Enter Title"></input>
            <textarea placeholder="Enter Description"></textarea>
            <button className='submit-btn'>Submit</button>
        </div>
    )
}


export default NoteController;