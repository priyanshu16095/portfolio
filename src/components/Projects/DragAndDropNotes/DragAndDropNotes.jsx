import React, { useState } from 'react'
import Notes from './Notes'
import '../projects.css'

function DragAndDropNotes() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Tomorrow is EEP112 practical examination.",
        },
        {
            id: 2,
            text: "Take a bath",
        },
    ]);

    const [note, setNote] = useState("");

    return (
        <div className='dadnotes'>

            <div className="dadnotesBody flex-v">
                    <p className="title">Drag and Drop Notes</p>
                <div className="dadnotesContainer bigContainer">
                    <div className='inputBox'>
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <button
                            className='button'
                            onClick={() => {
                                setNotes([...notes, { id: notes.length + 1, text: note }]);
                                setNote("");
                            }}
                        >
                            Add Note
                        </button>
                    </div>
                    <Notes notes={notes} setNotes={setNotes} />
                </div>
            </div>
        </div>
    );
}

export default DragAndDropNotes
