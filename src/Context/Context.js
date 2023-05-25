import { createContext } from "react";

export const NotesContext = createContext({
  notes: [],
  selectedNoteId: "",
  isNoteEditing: false,
});
