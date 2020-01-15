import React from "react";
import "./Search.scss";
import SearchIcon from "./SearchIcon/SearchIcon";

class Search extends React.Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.query);
  };

  render() {
    console.log(this.state.query);
    return (
      <div className="search-bar">
        <img
          src={require("../../images/logo-league.png")}
          alt="search-bar-logo"
          className="search-bar-league-logo"
        />
        <input
          className="input-field"
          onChange={this.handleChange}
          placeholder="Search Summoner (NA)"
        />
        <SearchIcon handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Search;
