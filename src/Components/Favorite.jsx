
//!Favorite.jsx Component for the AiNotes app
import React from "react";
import { ContentCopy, Delete, Edit } from "@mui/icons-material";
import "./Notes.css";

const Favorite = ({ notes, setNotes }) => {
  const favoriteNotes = notes.filter((note) => note.favorite);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const deleteNote = async (id) => {
    await Services.deleteNote(id); // ✅ Ensure it updates the backend
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); // ✅ Remove from state
  };


  const renameNote = (id) => {
    const newText = prompt("Enter new name:");
    if (newText !== null) {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, text: newText } : note
        )
      );
    }
  };

  return (
    <div className="notes-container">
      {favoriteNotes.length > 0 ? (
        favoriteNotes.map((note) => (
          <div key={note.id} className="notecard favorite">
            <p>{note.text}</p>
            <div className="note-actions">
              <button onClick={() => copyToClipboard(note.text)}>
                <ContentCopy />
              </button>
              <button onClick={() => deleteNote(note.id)}>
                <Delete />
              </button>
              <button onClick={() => renameNote(note.id)}>
                <Edit />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No favorite notes available</p>
      )}
    </div>
  );
};

export default Favorite;
