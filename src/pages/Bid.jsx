import React from "react";
import "../styles/Bid.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Bid = () => {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/bdv/BideVertiser/creative");
  };
  const BidAnalyzerFunc = () => {};
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
        <div className="breadcurmcontainer">
          <div className="button-bar">
            <a
              href="#"
              style={{ backgroundColor: "#1173b7", color: "white" }}
              className="button next"
            >
              Ad type
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              GEO
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Targeting
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Quality
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#81d34a", color: "white" }}
              href="#"
              className="button next"
            >
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

        <table
          border="0"
          cellpadding="3"
          cellspacing="0"
          className="bdv_000000_Text_11"
          width="100%"
        >
          <tbody>
            <tr>
              <td valign="top">
                <p>
                  Set the cost per visitor (CPV) bid for your campaign Your bid
                  will determine the exposure of your ad. Increasing your bid
                  will improve your ad's exposure..
                </p>
                <br />
                <p>
                  Real time bid Analyzer - Get current top bid based on your
                  campaign's targeting
                </p>
                <br />
                
                <p>Click "Next" to continue.</p>
                <br />
                <br />
                <table
                  width="100%"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  bgcolor="#FFFFFF"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          border="0"
                          cellpadding="2"
                          cellspacing="1"
                          width="100%"
                          bgcolor="#CED8E2"
                          className="bdv_000000_Text_10"
                          align="center"
                        >
                          <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td
                                width="25%"
                                align="center"
                                valign="top"
                                rowspan="2"
                                bgcolor="#F6F8FA"
                                style={{ padding: "8px" }}
                              >
                                <strong>Your Bid:</strong>&nbsp;&nbsp;$&nbsp;
                                <input
                                  type="Text"
                                  id="curr_max_bidID"
                                  name="curr_max_bid"
                                  value="0.0010"
                                  size="10"
                                  maxLength="8"
                                  className="mybidinput"
                                  style={{ textAlign: "center" }}
                                />
                              </td>
                              <td
                                width="25%"
                                align="center"
                                valign="middle"
                                rowspan="2"
                                bgcolor="#F6F8FA"
                                style={{ padding: "8px" }}
                              >
                                Effective Bid:{" "}
                                <b>
                                  $0.2960{" "}
                                  <img
                                    src="https://my.bidvertiser.com/BidVertiser/Images/bdv_exclam.png"
                                    align="absmiddle"
                                    hspace="3"
                                    width="12"
                                    height="12"
                                    border="0"
                                    title="The Effective Bid is only a starting point to get traffic. The actual bid required for a more massive volume will be higher and the best practice is to increase the bid slowly until you reach your desired traffic volume"
                                  />
                                </b>
                              </td>
                              <td
                                width="25%"
                                align="center"
                                valign="middle"
                                rowspan="2"
                                bgcolor="#F6F8FA"
                                style={{ padding: "8px" }}
                              >
                                Bid Range: <b>$0.0010 - $3</b>
                              </td>
                              <td
                                width="25%"
                                align="center"
                                valign="middle"
                                rowspan="2"
                                bgcolor="#F6F8FA"
                                style={{ padding: "8px" }}
                              >
                                <a
                                  className="myankar"
                                  href="javascript:void(0);"
                                  onClick={BidAnalyzerFunc}
                                >
                                  <img
                                    src="https://my.bidvertiser.com/BidVertiser/Images/anayzer_icon.png"
                                    width="12"
                                    hspace="5"
                                    style={{ position: "relative", top: "2px" }}
                                    height="12"
                                    title="Real time Bid Analyzer"
                                  />
                                  Real time Bid Analyzer
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <table border="0" cellpadding="2" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="center"></td>
                    </tr>
                  </tbody>
                </table>
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

export default Bid;
