import React from "react";
import "../styles/Header.css";
const Header = ({ routename }) => {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <i
          id="collapse_img_title"
          class="fa-regular fa-square-caret-right"
         
          aria-hidden="true"
        ></i>
        <div>{routename}</div>
      </div>
      <div className="headerright"></div>
    </div>
  );
};

export default Header;
