import React from "react";
import css from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={css.headerWrapper}>
      <div className={`${css.header} container`}>{children}</div>
    </div>
  );
};

export default Header;
