import React from "react";
import { ReactComponent as SearchIcon } from "../../Assets/search-icon.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input
          className="search"
          placeholder="Search an album of your choice"
        />
        <button className="search-button">
          <SearchIcon className="search-icon" />
        </button>
      </div>
    </>
  );
};
export default SearchBar;
