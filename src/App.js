import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import {
  addNote,
  deleteNoteAPI,
  getNotes,
  updateNoteAPI,
} from "./services/API.js";
import { NotesContext } from "./Context/Context";
import Notes from "./components/Notes/Notes";
import Menu from "./components/Menu/Menu";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [refreshPage, setRefreshPage] = useState(Date.now());
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [deleteNoteById, setDeleteNoteById] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isNoteEditing, setIsNoteEditing] = useState(false);
  const [isNoteChanged, setIsNoteChanged] = useState(false);
  const [editingNoteText, setEditingNoteText] = useState("");
  const [searchInputState, setSearchInputState] = useState("");
  useEffect(() => {
    getNotes().then((res) => {
      setNotes(res.records);
    });
  }, [refreshPage]);
  useEffect(() => {
    if (searchInputState) {
      setSelectedNoteId("");
      setIsNoteEditing(false);
    }
  }, [searchInputState]);

  const addNewNote = (note = "New note") => {
    addNote(note).then((res) => {
      setRefreshPage(Date.now());
      setSelectedNoteId(res.record.id);
      setIsNoteEditing(true);
    });
  };

  const confirmDeleteNote = (noteID) => {
    setDeleteNoteById(noteID);
    setOpenModal(true);
  };
  const deleteNote = () => {
    deleteNoteAPI(deleteNoteById).then(() => {
      setDeleteNoteById("");
      setRefreshPage(Date.now());
    });
    setOpenModal(false);
  };
  const cancelDeletionNote = () => {
    setDeleteNoteById("");
    setOpenModal(false);
  };
  const startNoteEditing = () => {
    setIsNoteEditing(true);
  };

  const selectNote = (noteID) => {
    setIsNoteEditing(false);
    setEditingNoteText("");
    setSelectedNoteId(noteID);
  };
  const editNote = (noteText) => {
    setEditingNoteText(noteText);
    const editedNote = notes.find((note) => note.id === selectedNoteId)?.values
      .dcP3fzA8nmE4oVWQxdJmky;
    if (editedNote !== noteText) setIsNoteChanged(true);
    setNotes((notes) => {
      const newNotes = [...notes];
      const editedNote = newNotes.find((note) => note.id === selectedNoteId);
      editedNote.values.dcP3fzA8nmE4oVWQxdJmky = noteText;
      return newNotes;
    });
  };
  const saveNote = () => {
    const editedNote = notes.find((note) => note.id === selectedNoteId);
    const noteText = editedNote.values.dcP3fzA8nmE4oVWQxdJmky;
    if (isNoteChanged) {
      updateNoteAPI(selectedNoteId, noteText).then(() => {
        setIsNoteChanged(false);
      });
    }
    setIsNoteEditing(false);
    setEditingNoteText("");
  };

  return (
    <NotesContext.Provider value={{ notes, selectedNoteId, isNoteEditing }}>
      <div className="app__wrapper container">
        <Header>
          <Menu
            deleteFunc={confirmDeleteNote}
            editFunc={startNoteEditing}
            addNewNote={addNewNote}
          />
          <SearchBox
            searchInputState={searchInputState}
            setSearchInputState={setSearchInputState}
          />
        </Header>

        <div className="main__wrapper container">
          <Sidebar>
            <Notes
              selectNote={selectNote}
              searchInputState={searchInputState}
            />
          </Sidebar>
          <Workspace
            isNoteEditing={isNoteEditing}
            startNoteEditing={startNoteEditing}
            editingNoteText={editingNoteText}
            editNote={editNote}
            saveNote={saveNote}
            selectedNoteId={selectedNoteId}
          />
        </div>
      </div>
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        isOpen={openModal}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
      >
        <p className="message">Do you want to delete a note?</p>
        <div>
          <button className="btn" onClick={() => deleteNote()}>
            Delete
          </button>
          <button className="btn" onClick={() => cancelDeletionNote()}>
            Cancel
          </button>
        </div>
      </ReactModal>
    </NotesContext.Provider>
  );
};

export default App;
