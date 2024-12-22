
import { useState } from 'react';
import './notesController.css';


function NoteController({notes, setNote}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    }
    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const handleSubmit = () => {
        const note = {
            id: Date.now(),
            title: title,
            description: description,
            date: Date.now()
        };
        setNote([...notes, note]);
        setTitle('');
        setDescription('');
    }

    return (
        <div className="container">
            <input value={title} placeholder="Enter Title" onChange={handleTitleChange}></input>
            <textarea value={description} placeholder="Enter Description" onChange={handleDescriptionChange}></textarea>
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default NoteController;