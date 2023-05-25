import { useContext } from "react";
import { NotesContext } from "../../Context/Context";
import css from "./Notes.module.css";

const NotesList = ({ selectNote, searchInputState }) => {
  const notesContext = useContext(NotesContext);
  const selectedNoteID = notesContext.selectedNoteID;
  const notes = (
    searchInputState
      ? notesContext.notes.filter((note) =>
          note.values.dcP3fzA8nmE4oVWQxdJmky
            .toLocaleLowerCase()
            .includes(searchInputState.toLowerCase())
        )
      : notesContext.notes
  ).sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
  return (
    <div className={css.notesContainer}>
      {searchInputState && (
        <p className={css.findResult}>
          {notes?.length === 0
            ? `Can't find "${searchInputState}" in any note`
            : `"${searchInputState}" was found in ${
                notes?.length % 10 === 1 ? "note" : "notes"
              }`}
        </p>
      )}

      <ul>
        {notes.map(({ id, values, updated_at }) => (
          <li
            className={`${css.noteItem} ${
              id === selectedNoteID ? css.selectedNote : ""
            }`}
            key={id}
            onClick={() => selectNote(id)}
          >
            {" "}
            <p className={css.notePreview}>{values?.dcP3fzA8nmE4oVWQxdJmky}</p>
            <p className={css.date}>
              {new Date(Date.parse(updated_at)).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
