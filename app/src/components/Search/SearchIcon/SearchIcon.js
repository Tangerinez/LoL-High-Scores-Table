import React from "react";
import "./SearchIcon.scss";

function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 24 30"
      style={{ enableBackground: "new 0 0 24 24" }}
      xmlSpace="preserve"
      fill="white"
      className="search-icon"
      onClick={props.handleSubmit}
    >
      <g>
        <path d="M9.78,16.434c1.593,0,3.097-0.564,4.294-1.591l5.82,5.835c0.108,0.108,0.25,0.162,0.391,0.162   c0.141,0,0.282-0.054,0.39-0.161c0.216-0.216,0.217-0.565,0.001-0.781l-5.825-5.839c2.181-2.604,2.053-6.504-0.389-8.953   C13.212,3.851,11.549,3.16,9.78,3.16S6.348,3.851,5.098,5.105c-2.581,2.587-2.581,6.797,0,9.385   C6.348,15.744,8.011,16.434,9.78,16.434z M5.88,5.885c1.042-1.045,2.427-1.62,3.9-1.62s2.858,0.575,3.9,1.62   c2.152,2.157,2.152,5.667,0,7.824c-1.042,1.045-2.427,1.62-3.9,1.62s-2.858-0.575-3.9-1.62C3.728,11.552,3.728,8.042,5.88,5.885z" />
      </g>
    </svg>
  );
}

export default SearchIcon;
