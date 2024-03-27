import React, { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
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
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/"
            >
              {" "}
              <li >Manage Campaigns</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/newcompaings"
            >
              <li>New Campaigns</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/conversionupload"
            >
              <li>Conversion Uploads</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/bigautomationlog"
            >
              <li>Big Automation Log</li>
            </NavLink>
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
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/summery"
            >
              <li>Daily Activity</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/summery"
            >
              <li>Summary</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/analytics"
            >
              <li>Analytics</li>
            </NavLink>
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
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/managepostbacks"
            >
              <li>Mange Postbacks</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/multistep"
            >
              <li>Multi-step</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/testpostback"
            >
              <li>Test Postbacks</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/errorlogs"
            >
              <li>Errors Log</li>
            </NavLink>
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
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/addfund"
            >
              <li>Add Funds</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/automaticfunding"
            >
              <li>Automatic Funding</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/proformainvocies"
            >
              <li>Pro-Forma Invoices</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/transactionhistory"
            >
              <li>Transaction History</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/monthlyinvoice"
            >
              <li>Monthly Invocies</li>
            </NavLink>
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
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/editprofile"
            >
              <li>Edit Profile</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/changepassword"
            >
              <li>Change Password</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/twofectorauth"
            >
              <li>Two Factor Authentication</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/managedevices"
            >
              <li>Mange Devices</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/domainsblacklist"
            >
              <li>Domains Blacklist</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/ipblacklist"
            >
              <li>Ip Blacklist</li>
            </NavLink>

            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/useragentblacklist"
            >
              <li>User Agent Blacklist</li>
            </NavLink>
            <NavLink
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#8da2b7" : "unset",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
              to="/apiaccess"
            >
              <li>API Access</li>
            </NavLink>
          </ul>
        </div>
      )}
      <div className="account bb">
        <i class="fa fa-signal" aria-hidden="true"></i>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "#8da2b7" : "unset",
              viewTransitionName: isTransitioning ? "slide" : "",
              color: "unset",
              textDecoration: "none",
            };
          }}
          to="/trafficestimator"
        >
          <span>Traffice Estimator</span>
        </NavLink>
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
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "#8da2b7" : "unset",
              viewTransitionName: isTransitioning ? "slide" : "",
              color: "unset",
              textDecoration: "none",
            };
          }}
          to="/subbitresearch"
        >
          <span>Subid Research Tool</span>
        </NavLink>
      </div>
      <div className="account bb">
        <i class="fa fa-connectdevelop" aria-hidden="true"></i>

        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "#8da2b7" : "unset",
              viewTransitionName: isTransitioning ? "slide" : "",
              color: "unset",
              textDecoration: "none",
            };
          }}
          to="/refferalprogram"
        >
          <span>Referral Program</span>
        </NavLink>
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
