import React from "react";
import css from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-svgrepo-com.svg";

const SearchBox = ({ setSearchInputState, searchInputState }) => {
  return (
    <div className={css.inputWrapper}>
      <input
        className={css.searchInput}
        type="text"
        onChange={(e) => setSearchInputState(e.target.value)}
        value={searchInputState}
        placeholder="Search"
      />
      {!searchInputState && (
        <span className={css.searchIcon}>
          <SearchIcon />
        </span>
      )}
    </div>
  );
};

export default SearchBox;
