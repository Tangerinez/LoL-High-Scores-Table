import React from "react";
import Home from "./Home/Home";
import Leaderboards from "./Leaderboards/Leaderboards";
import Champions from "./Champions/Champions";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-categories">
        <div className="logo-container">
          <img
            src={require("../../images/logo-league.png")}
            alt="league-logo"
            id="league-logo"
          />
        </div>
        <Home />
        <Leaderboards />
        <Champions />
      </div>
    </div>
  );
}

export default Navbar;
