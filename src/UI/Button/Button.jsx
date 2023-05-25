import React from "react";
import css from "./Button.module.css";
import switchImages from "../../services/switchImages";

const ActionBtn = ({
  title = "",
  disabled,
  onClickFoo,
  selectedNoteId,
  buttonType = "",
}) => {
  return (
    <div>
      <button
        onClick={() => (onClickFoo ? onClickFoo(selectedNoteId) : () => {})}
        disabled={disabled}
        className={css.actionBtn}
      >
        <span className={css.btnImageFormat}>{switchImages(buttonType)}</span>
        {title}
      </button>
    </div>
  );
};

export default ActionBtn;
