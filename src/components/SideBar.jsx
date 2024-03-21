import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prevOpenSubMenu) =>
      prevOpenSubMenu === index ? null : index
    );
  };
  return (
    <div className="sidebarcontainer">
      <div className="logocontainer">
        <img
          src="https://my.bidvertiser.com/BidVertiser/Images/cp/logo_small_new.png"
          alt=""
        />
      </div>
      <div className="account bb">
        <i class="fa fa-hashtag" aria-hidden="true"></i>
        <span>ACCOUNT</span> <span>1737127</span>
      </div>
      <div className="account bb">
        <i
          class="fa fa-envelope-open-o"
          aria-hidden="true"
          id="message_disp"
          title="You have 6 notifications"
        ></i>
        <span>Inbox</span>
        <span className="message">(6 Messages) </span>
      </div>
      <div onClick={() => toggleSubMenu(1)}>
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Campaingns</span>
      </div>
      {openSubMenu === 1 && (
        <div className="submenu">
          <ul>
            <Link to="/">
              {" "}
              <li className="smang">Manage Campaigns</li>
            </Link>
            <Link to="/newcompaings">
              <li>New Campaigns</li>
            </Link>
            <Link to="/conversionupload">
              <li>Conversion Uploads</li>
            </Link>
            <Link to="/bigautomationlog">
              <li>Big Automation Log</li>
            </Link>
          </ul>
        </div>
      )}
      <div onClick={() => toggleSubMenu(2)}>
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Reporting</span>
      </div>
      {openSubMenu === 2 && (
        <div className="submenu">
          <ul>
            <Link to="/summery">
              <li>Daily Activity</li>
            </Link>
            <Link to="/summery">
              <li>Summary</li>
            </Link>
            <Link to="/analytics">
              <li>Analytics</li>
            </Link>
          </ul>
        </div>
      )}
      <div onClick={() => toggleSubMenu(3)}>
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Global Postback</span>
      </div>
      {openSubMenu === 3 && (
        <div className="submenu">
          <ul>
            <Link to="/managepostbacks">
              <li>Mange Postbacks</li>
            </Link>
            <Link to="/multistep">
              <li>Multi-step</li>
            </Link>
            <Link to="/testpostback">
              <li>Test Postbacks</li>
            </Link>
            <Link to="/errorlogs">
              <li>Errors Log</li>
            </Link>
          </ul>
        </div>
      )}
      <div onClick={() => toggleSubMenu(4)}>
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Funding & Payments</span>
      </div>
      {openSubMenu === 4 && (
        <div className="submenu">
          <ul>
            <li>Add Funds</li>
            <li>Automatic Funding</li>
            <li>Pro-Forma Invoices</li>
            <li>Transaction History</li>
            <li>Monthly Invocies</li>
          </ul>
        </div>
      )}
      <div onClick={() => toggleSubMenu(5)}>
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Manage Account</span>
      </div>
      {openSubMenu === 5 && (
        <div className="submenu">
          <ul>
            <li>Edit Profile</li>
            <li>Change Password</li>
            <li>Two Factor Authentication</li>
            <li>Mange Devices</li>
            <li>Domains Blacklist</li>
            <li>Ip Blacklist</li>
            <li>User Agent Blacklist</li>
            <li>API Access</li>
          </ul>
        </div>
      )}
      <div className="account bb">
        <i class="fa fa-signal" aria-hidden="true"></i>
        <span>Traffice Estimator</span>
      </div>
      <div className="account bb">
        <i class="fa-solid fa-magnifying-glass-dollar" aria-hidden="true"></i>
        <span>Subid Research Tool</span>
      </div>
      <div className="account bb">
        <i class="fa fa-connectdevelop" aria-hidden="true"></i>
        <span>Referral Program</span>
      </div>
      <div className="account bb">
        <i class="fa fa-book" aria-hidden="true"></i>
        <span>User Manual</span>
      </div>
      <div className="account bb">
        <i
          id="collapse_img_sup"
          class="fa fa-plus-square-o"
          aria-hidden="true"
        ></i>
        <span>Contact Support</span>
      </div>
      <div className="account bb">
        <i class="fa fa-exchange" aria-hidden="true"></i>
        <span>Switch to Publisher</span>
      </div>

      <div className="account bb">
        <i class="fa fa-power-off" aria-hidden="true"></i>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
