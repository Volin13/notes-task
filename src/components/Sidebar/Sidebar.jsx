import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = ({ children }) => {
  return <div className={css.sideBar}>{children}</div>;
};

export default Sidebar;
