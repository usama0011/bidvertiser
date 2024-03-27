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
            <Link to="/addfund">
              <li>Add Funds</li>
            </Link>
            <Link to="/automaticfunding">
              <li>Automatic Funding</li>
            </Link>
            <Link to="/proformainvocies">
              <li>Pro-Forma Invoices</li>
            </Link>
            <Link to="/transactionhistory">
              <li>Transaction History</li>
            </Link>
            <Link to="/monthlyinvoice">
              <li>Monthly Invocies</li>
            </Link>
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
            <Link to="/editprofile">
              <li>Edit Profile</li>
            </Link>
            <Link to="/changepassword">
              <li>Change Password</li>
            </Link>
            <Link to="/twofectorauth">
              <li>Two Factor Authentication</li>
            </Link>
            <Link to="/managedevices">
              <li>Mange Devices</li>
            </Link>
            <Link to="/domainsblacklist">
              <li>Domains Blacklist</li>
            </Link>
            <Link to="/ipblacklist">
              <li>Ip Blacklist</li>
            </Link>

            <Link to="/useragentblacklist">
              <li>User Agent Blacklist</li>
            </Link>
            <Link to="/apiaccess">
              <li>API Access</li>
            </Link>
          </ul>
        </div>
      )}
      <div className="account bb">
        <i class="fa fa-signal" aria-hidden="true"></i>
        <Link
          style={{ color: "unset", textDecoration: "none" }}
          to="/trafficestimator"
        >
          <span>Traffice Estimator</span>
        </Link>
      </div>
      <div className="account bb">
        <i
          class="fa-solid fa-magnifying-glass-dollar"
          style={{
            marginRight: "10px",
            paddingBottom: "1px",
            fontSize: "13px",
            color: "white",
          }}
          aria-hidden="true"
        ></i>
        <Link
          style={{ color: "unset", textDecoration: "none" }}
          to="/subbitresearch"
        >
          <span>Subid Research Tool</span>
        </Link>
      </div>
      <div className="account bb">
        <i class="fa fa-connectdevelop" aria-hidden="true"></i>

        <Link
          style={{ color: "unset", textDecoration: "none" }}
          to="/refferalprogram"
        >
          <span>Referral Program</span>
        </Link>
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
