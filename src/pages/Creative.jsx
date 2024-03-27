import React from "react";
import "../styles/Creative.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Creative = () => {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/bdv/BideVertiser/budget");
  };
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
        <div className="breadcurmcontainer">
          <div className="button-bar">
            <a
              href="#"
              style={{ backgroundColor: "#81d34a", color: "white" }}
              className="button next"
            >
              Ad type
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              GEO
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Targeting
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Quality
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Bid
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Creative
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Budget
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Advanced Settings
            </a>
          </div>
        </div>
        <br />
        <p className="compara">
          Each ad type will direct a different flow of visitors to your promoted
          page. We strongly recommend testing all ad types:
        </p>
        <table
          cellspacing="2"
          className="bdv_000000_Text_11"
          width="750"
          border="0"
          bgcolor="#FFFFFF"
        >
          <tbody>
            <tr>
              <td colSpan="4">
                Use the form below to name your ad and set the Destination URL,
                which is your landing page where we will send the traffic to.
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <br />
                <b>Landing Page Guidance:</b>
                <br />
                No malicious, malware, flash updates, fake virus warnings, auto
                downloads, scareware or tech-support.
                <br />
                These restrictions also apply to affiliate smartlinks, so make
                sure that your provider excludes such offers.
                <br />
                Failure to do so may lead to account suspension.
              </td>
            </tr>
            <tr id="LPGExtension" style={{ display: "none" }}>
              <td colSpan="4">
                By buying traffic from BidVertiser you agree that you will not
                direct traffic to landing pages that contain any mix of the
                following content/mechanisms without prior approval from our
                support team. We hold the right to stop such promotion on our
                sole discretion, as well as put such account and its funds on
                hold. Please note that we constantly check the landing pages
                content and mechanism.
                <br />
                <br />
                <b>
                  Content that is not allowed to be promoted on the BidVertiser
                  Network:
                </b>
                <br />
                Scareware
                <br />
                False Windows/Mac/Virus errors
                <br />
                Malware
                <br />
                Suggestive content
                <br />
                Phishing
                <br />
                Explicit and/or illegal content
                <br />
                <br />
                <b>Prohibited mechanisms on landing pages:</b>
                <br />
                Infinite Pop ups that can't be closed by the user
                <br />
                Infinite JavaScript alerts that can't be closed by the user
                <br />
                More than one entry/exit pop up
                <br />
                Any mechanism that prevents the user from closing the browser
                window
                <br />
                Imitation of system error messages
                <br />
                Downloads / installations starting without user interaction
                (Auto-Downloads)
                <br />
                Alert sounds that distress users
                <br />
                <br />
                Please do not hesitate to contact our support team before
                starting your ad if you have any question about your landing
                page.
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <img
                  src="https://my.bidvertiser.com/BidVertiser/Images/site/blank.gif"
                  alt=""
                  width="1"
                  height="10"
                  border="0"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" align="center"></td>
            </tr>
            <tr>
              <td colSpan="4" valign="top">
                <div>
                  <table width="100%" border="0" className="bdv_000000_Text_11">
                    <tbody>
                      <tr>
                        <td align="left" width="130" nowrap="">
                          Name your Ad:
                          <br />
                          <input
                            type="Text"
                            id="AdName"
                            data-meteor-emoji="true"
                            tabIndex="1"
                            size="48"
                            name="Name"
                            onKeyUp="update_char_num(this,'Identifier_Char_Num',25)"
                            value=""
                            maxLength="25"
                          />
                        </td>
                        <td width="5" rowspan="8"></td>
                        <td
                          id="Identifier_Char_Num"
                          width="45"
                          align="right"
                          nowrap=""
                          className="bdv_000000_Text_10"
                          valign="bottom"
                          style={{ lineHeight: "25px" }}
                        >
                          0/25
                        </td>
                        <td width="5" rowspan="8"></td>
                        <td
                          valign="bottom"
                          align="left"
                          style={{ lineHeight: "25px" }}
                          nowrap=""
                          width="100%"
                        >
                          {" "}
                          (Won't be seen by web visitors)
                        </td>
                        <td width="5" rowspan="8"></td>
                      </tr>
                      <tr>
                        <td
                          colSpan="7"
                          height="25"
                          valign="middle"
                          width="100%"
                        >
                          <hr
                            style={{
                              display: "block",
                              height: "1px",
                              border: "0",
                              borderTop: "1px dotted #1173b7",
                              margin: "1em 0 1em 0",
                              padding: "0",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          colSpan="7"
                          nowrap=""
                          style={{ position: "relative" }}
                        >
                          Destination URL / Tel:
                          <span className="fa-stack fa-lg">
                            <i
                              className="fa fa-circle fa-stack-1x"
                              style={{
                                color: "white",
                                fontSize: "13px",
                                WebkitTextStrokeWidth: "2px",
                                WebkitTextStrokeColor: "white",
                              }}
                            ></i>
                            <i
                              className="fa fa-info-circle fa-stack-1x"
                              aria-hidden="true"
                              style={{ color: "#5d86c9", fontSize: "13px" }}
                            ></i>
                          </span>
                          <div>
                            <input
                              type="Text"
                              tabIndex="6"
                              placeholder="https://"
                              id="URLLINE"
                              style={{
                                verticalAlign: "bottom",
                                paddingRight: "34px",
                                width: "805px",
                              }}
                              name="URL"
                              value=""
                              maxLength="490"
                              onBlur="change_url_in_prev(this.value);"
                            />
                          </div>
                          <div style={{ float: "right" }}>
                            <div
                              onClick="window.open(createTestLink(),'Preview');"
                              target="_blank"
                              title="Test Link"
                              style={{
                                position: "relative",
                                top: "-36px",
                                right: "12px",
                                cursor: "pointer",
                                color: "#1173b7",
                                borderLeft: "1px solid #d3d3d3",
                                paddingLeft: "10px",
                                height: "29px",
                                paddingTop: "7px",
                              }}
                            >
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" class="function-button">
            Back
          </button>
          <button
            onClick={handleClickNext}
            id="mob_select"
            class="function-button"
            style={{ margin: "5px" }}
          >
            Next
          </button>
        </center>
      </div>
    </div>
  );
};

export default Creative;
