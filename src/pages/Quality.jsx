import React from "react";
import "../styles/Quality.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Quality = () => {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/bdv/BideVertiser/bid");
  };
  const handleChange = () => {
    // Handle select change here
  };

  const handleCheckboxChange = () => {
    // Handle checkbox change here
  };
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
      <div className="breadcurmcontainer">
      <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#1173b7",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Ad Type
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#1173b7",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#1173b7",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Geo
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#1173b7",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#1173b7",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Targeting
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#1173b7",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#81d34a",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Quality
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#81d34a",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Bid
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Creative
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Budget
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "160px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Advanced Settings
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <br />
        <p className="compara">
          Each ad type will direct a different flow of visitors to your promoted
          page. We strongly recommend testing all ad types:
        </p>
        <table
          style={{ margin: "0 auto", width: "100%" }}
          className="bdv_000000_Text_11"
        >
          <tbody>
            <tr>
              <td valign="top">
                <input type="Hidden" name="old_Quality_score" value="" />
                <span style={{ paddingRight: "100px" }}>
                  <strong>Select quality score:</strong>
                </span>
                <select className="selectbackgroud"
                  name="Quality_score"
                  onChange={handleChange}
                  id="Quality_score_drop"
                >
                  <option value="10">
                    Top 10% of websites (Highest Quality - 9+)
                  </option>
                  <option value="20">Top 20% of websites - 8+</option>
                  <option value="30">Top 30% of websites - 7+</option>
                  <option value="40">Top 40% of websites - 6+</option>
                  <option value="50">Top 50% of websites - 5+</option>
                  <option value="60">Top 60% of websites - 4+</option>
                  <option value="70">Top 70% of websites - 3+</option>
                  <option value="80">Top 80% of websites - 2+</option>
                  <option value="90">Top 90% of websites - 1+</option>
                  <option value="All" selected="">
                    All websites
                  </option>
                </select>
                <br />
                <br />
                <input
                  type="checkbox"
                  name="QS_include_new_sites"
                  value="1"
                  onChange={handleCheckboxChange}
                  checked=""
                  id="QS_include_new_sites_id"
                  disabled=""
                />{" "}
                Include longtail traffic sources{" "}
                <span
                  className="fa-stack fa-lg"
                  onMouseOver={() => {
                    return escape(
                      "Our network includes thousands of longtail traffic sources. We strongly recommend keeping them included because they are usually with high quality and can generate high volume of conversions"
                    );
                  }}
                  style={{ height: "1.2em", lineHeight: "20px" }}
                >
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
                <br />
                <br />
                Quality score is an average calculated by actual ROI of our
                advertisers.
                <br />
                <br />
                However, please choose carefully because not every website works
                the same for every advertiser so there are very high chances
                that many websites that are scored low can perform very well for
                you. The higher score you chose - the less traffic you will get
                - and more expensive. You can change this anytime by clicking
                the "Targeting" button.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" className="function-button">
            Back
          </button>
          <button
            onClick={handleClickNext}
            id="mob_select"
            className="function-button"
            style={{ margin: "5px" }}
          >
            Next
          </button>
        </center>
      </div>
    </div>
  );
};

export default Quality;
