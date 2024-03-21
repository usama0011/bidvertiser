import React from "react";
import "../styles/Header.css";
const Header = ({ routename }) => {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <h3>{routename}</h3>
      </div>
      <div className="headerrirhg">
        <div>
          <p>Current Balance:</p>
          {/* <i class="fa fa-info-circle fa-stack-1x" aria-hidden="true"></i> */}
        </div>
        <p>$-0.12</p>
      </div>
    </div>
  );
};

export default Header;
