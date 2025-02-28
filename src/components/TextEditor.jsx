import { useState } from "react";
import "../styles/text-editor.css";

export default function TextEditor({ groupId, notes, setNotes }) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");

  function onSend() {
    console.log(text);
    
    if (text) {
      const note = {
        id: "note-" + Date.now(),
        content: text,
        dateTime: new Date().toISOString(),
        groupId: groupId,
      };
      const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
      allNotes.push(note);
      localStorage.setItem("notes", JSON.stringify(allNotes));
      notes.splice(0, 0, note);
      setNotes([...notes]);

      setText("");
      setIsActive(false);
    }
  }

  return (
    <div id="text-editor-container">
      <textarea
        id="text-editor"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsActive(e.target.value.length ? true : false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        placeholder="Enter your text here..."
      ></textarea>

      {isActive ? (
        <img
          id="send-icon"
          onClick={onSend}
          src="../assets/send-active.svg"
          alt="send button"
        />
      ) : (
        <img
          id="send-icon"
          src="../assets/send-inactive.svg"
          alt="send button"
        />
      )}
    </div>
  );
}
