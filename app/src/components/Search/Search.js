import React from "react";
import "./Search.scss";
import SearchIcon from "./SearchIcon/SearchIcon";

function Search() {
  return (
    <div className="search-bar">
      <img
        src={require("../../images/logo-league.png")}
        alt="search-bar-logo"
        className="search-bar-league-logo"
      />
      <input className="input-field" placeholder="Search Summoner (NA)" />
      <SearchIcon />
    </div>
  );
}

export default Search;
