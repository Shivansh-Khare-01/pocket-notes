import { useEffect, useState } from "react";
import Note from "../components/Note.jsx";
import NotesHeader from "../components/NotesHeader.jsx";
import TextEditor from "../components/TextEditor.jsx";
import '../styles/notes.css';

export default function Notes({ group, setSelectedGroup }) {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const groupNotes = allNotes?.filter((note) => note.groupId === group.id);
    if (groupNotes) {
      setNotes(groupNotes
        .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
      );
    }
  }, [group.id]);

  return (
      <div id="notes-editor">
        <NotesHeader group={group} setSelectedGroup={setSelectedGroup} />
        <div id="notes-area">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
          <TextEditor groupId={group.id} notes={notes} setNotes={setNotes} />
      </div>
  );
}
