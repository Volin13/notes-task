import React, { useContext } from "react";
import ActionBtn from "../../UI/Button/Button";
import { NotesContext } from "../../Context/Context";
import css from "./Menu.module.css";

const MainMenu = ({ deleteFunc, editFunc, addNewNote }) => {
  const notesContext = useContext(NotesContext);
  const selectedNoteId = notesContext.selectedNoteId;
  return (
    <div className={css.mainMenu}>
      <ActionBtn onClickFoo={addNewNote} disabled={false} buttonType="add" />
      <ActionBtn
        onClickFoo={deleteFunc}
        disabled={!selectedNoteId}
        selectedNoteId={selectedNoteId}
        buttonType="delete"
      />
      <ActionBtn
        onClickFoo={editFunc}
        disabled={!selectedNoteId}
        selectedNoteId={selectedNoteId}
        buttonType="edit"
      />
    </div>
  );
};

export default MainMenu;
