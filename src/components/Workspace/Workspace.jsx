import React, { useContext } from "react";
import { NotesContext } from "../../Context/Context";
import css from "./Workspace.module.css";

const Workspace = ({
  isNoteEditing,
  editingNoteText,
  editNote,
  startNoteEditing,
  saveNote,
}) => {
  const notesContext = useContext(NotesContext);
  const notes = notesContext.notes;
  const selectedNoteId = notesContext.selectedNoteId;
  const selectedNoteText = notes.find((record) => record.id === selectedNoteId)
    ?.values.dcP3fzA8nmE4oVWQxdJmky;
  const selectedNoteDate = notes.find(
    (note) => note.id === selectedNoteId
  )?.updated_at;
  if (!isNoteEditing) {
    return (
      <div
        className={css.workspace}
        onClick={() => (selectedNoteId ? startNoteEditing() : null)}
      >
        {selectedNoteId && (
          <div className={css.workspaceData}>
            {new Date(Date.parse(selectedNoteDate)).toLocaleDateString()}{" "}
            {new Date(Date.parse(selectedNoteDate)).toLocaleTimeString()}
          </div>
        )}

        {selectedNoteText?.split("\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div className={css.workspaceWrapper}>
        <div className={css.workspaceData}>
          {new Date(Date.parse(selectedNoteDate)).toLocaleDateString()}{" "}
          {new Date(Date.parse(selectedNoteDate)).toLocaleTimeString()}
        </div>{" "}
        <textarea
          className={css.textArea}
          wrap="soft"
          autoFocus
          onChange={(e) => editNote(e.target.value)}
          value={editingNoteText ? editingNoteText : selectedNoteText}
          onBlur={saveNote}
        ></textarea>
      </div>
    );
  }
};

export default Workspace;
