import React from "react";
import "../styles/Header.css";
const Header = ({ routename }) => {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <i
          class="far fa-caret-square-right"
          style={{ marginRight: "10px" }}
        ></i>
        {/* <i
          id="collapse_img_title"
          class="fa-regular fa-square-caret-right"
          style={{ marginRight: "10px" }}
          aria-hidden="true"
        ></i> */}
        {routename}
      </div>
      <div className="headerrirhg">
        <div>
          <p>Current Balance:</p>
          {/* <i class="fa fa-info-circle fa-stack-1x" aria-hidden="true"></i> */}
        </div>
        <p>$ 17,000</p>
      </div>
    </div>
  );
};

export default Header;
