import React, { useState } from "react";
import "../styles/Targeting.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Targeting = () => {
  const [showkeyworks, setshowKeywords] = useState(false);
  const [showbottoms, setshowbottoms] = useState(false);
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/bdv/BideVertiser/quality");
  };
  const handleshowbottoms = () => {
    setshowbottoms(!showbottoms);
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
        <div className="internatargetContainerbody">
          <div className="conainertargettwo">
            <div>
              <input type="radio" name="onesame" id="" />
            </div>
            <div>
              <strong className="mstrontrong">
                Enable RON (Run Of Network) - No Targeting
              </strong>
              <br />
              <span style={{ fontSize: "12px", lineHeight: "18px" }}>
                Choose this option if you want your ad to show for every
                impression served. This option is useful for websites that need
                high traffic volume at a lower price and for non-targeted
                products such as general downloads, casinos, general affiliate
                offers etc.
              </span>
              <br />
              <br />
              <td onClick={() => setshowKeywords(!showkeyworks)}>
                <span
                  className="setnegiva"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Set Negative Keywords
                </span>
                <span
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "9px",
                    color: "black",
                    marginLeft: "3px",
                  }}
                  id="destArrow_ID"
                >
                  ▶
                </span>
              </td>
              <br />
              {showkeyworks && (
                <>
                  <td>
                    <span
                      style={{ fontSize: "12px", display: "block" }}
                      id="RONKeywords_ID"
                    >
                      Enter Keywords separated with NEW LINE. Do NOT use minus
                      sign, just type the keywords as they are.
                      <br />
                      Your campaign will not show for the keywords listed here.
                      <br />
                      <textarea
                        id="keywordsSelectedRON_ID"
                        wrap="off"
                        className="bdv_000000_Text_11 uppselecttextara"
                        style={{ width: "300px", height: "150px" }}
                        placeholder="KEYWORD1
KEYWORD2
..."
                      ></textarea>
                    </span>
                  </td>
                </>
              )}
            </div>
          </div>
          <div className="conainertargetone">
            <div>
              <input
                type="radio"
                onClick={handleshowbottoms}
                name="onesame"
                id=""
              />
            </div>
            <div>
              <strong className="mstrontrong">
                Enable Contextual Targeting
              </strong>
              <br />
              <span style={{ fontSize: "12px", lineHeight: "18px" }}>
                Use this tool to target your ads by keywords and brands. If you
                have a niche product, choose keywords and brands that are
                related to your business.
              </span>
              <br />
              <br />
              <strong className="mstrontrong">
                Use broad phrases only, preferably 1 keyword per phrase and max
                of 2.
              </strong>
              <br />
              <br />
              <span style={{ fontSize: "12px", lineHeight: "18px" }}>
                Important: Using brand names of leading companies that offer a
                similar product to yours can get you highly engaged visitors!
                For example, use the keyword "adidas" when running promotion for
                sports shoes (or even for a competing brand).
              </span>
              <br />
              <br />
              <table
                width="100%"
                border="0"
                style={{ margin: "20px 0" }}
                className="bdv_000000_Text_11"
              >
                <tbody>
                  <tr>
                    <td align="left" valign="top" width="1">
                      <input
                        id="keywordsSpan"
                        type="button"
                        name="categoriesButton"
                        value="Add Keywords"
                        className="addkeyworktargting"
                        style={{
                          width: "150px",
                          backgroundColor: "rgb(129, 211, 74)",
                        }}
                        disabled
                      />
                    </td>
                    <td
                      align="left"
                      valign="top"
                      width="1"
                      style={{ position: "relative" }}
                    >
                      <input
                        id="brandsSpan"
                        type="button"
                        name="categoriesButton"
                        value="Add Brands"
                        className="addkeyworktargting"
                        style={{
                          width: "150px",
                          marginLeft: "20px",
                          backgroundColor: "rgb(129, 211, 74)",
                        }}
                        disabled
                      />
                      <div className="highlight-neww">
                        <div className="highlightt"></div>
                      </div>
                      <div
                        className="highlight-neww"
                        style={{
                          color: "white",
                          margin: "-2px 3px",
                          fontSize: "9px",
                        }}
                      >
                        NEW
                      </div>
                    </td>
                    <td width="*"></td>
                  </tr>
                </tbody>
              </table>
              {showbottoms && (
                <div>
                  <table
                    cellspacing="2"
                    cellpadding="0"
                    border="0"
                    className="bdv_000000_Text_11"
                  >
                    <tbody>
                      <tr>
                        <td align="left">
                          <span id="keywordsSet" style={{ display: "block" }}>
                            <input
                              type="hidden"
                              id="bdv_keywords_list_ID"
                              name="bdv_keywords_list"
                              value=""
                            />
                            <input
                              type="hidden"
                              name="bdv_keywords_final_list"
                              value=""
                            />
                            <div className="rTable">
                              <div className="rTableRow">
                                <div
                                  className="rTableCell bdv_000000_Text_11"
                                  style={{ width: "300px" }}
                                >
                                  <strong>Available keywords</strong>
                                  <hr
                                    noshade
                                    size="1"
                                    color="#CED8E2"
                                    style={{ margin: "0", width: "300px" }}
                                  />
                                  <span style={{ fontSize: "11px" }}>
                                    (Sorted by traffic volume)
                                  </span>
                                  <span
                                    style={{ fontSize: "11px", float: "right" }}
                                  >
                                    Show Related{" "}
                                    <input
                                      type="checkbox"
                                      name="broadSeach"
                                      value="1"
                                      id="broadSeach_ID"
                                      defaultChecked
                                    />
                                  </span>
                                </div>
                                <div className="rTableCell"></div>
                                <div
                                  className="rTableCell bdv_000000_Text_11"
                                  style={{ width: "300px" }}
                                >
                                  <strong>Your Keywords (one per line)</strong>
                                  <hr
                                    noshade
                                    size="1"
                                    color="#CED8E2"
                                    style={{ margin: "0", width: "300px" }}
                                  />
                                </div>
                              </div>
                              <div className="rTableRow">
                                <div className="rTableCell">
                                  <div className="rTable">
                                    <div className="rTableRow">
                                      <div
                                        className="rTableCell bdv_000000_Text_11"
                                        style={{
                                          verticalAlign: "middle",
                                          align: "left",
                                          padding: "0px",
                                        }}
                                      >
                                        <div
                                          className="form-group has-feedback"
                                          style={{
                                            width: "300px",
                                            margin: "0",
                                          }}
                                        >
                                          <label className="control-label sr-only">
                                            Search
                                          </label>
                                          <style>
                                            {`
                   .form-control-feedback {
                     padding: 11px;
                     width: 12px;
                     height: 12px;
                   }
                 `}
                                          </style>
                                          <i
                                            className="form-control-feedback glyphicon glyphicon-search"
                                            id="searchIconID"
                                            title="Click to search"
                                            style={{
                                              cursor: "pointer",
                                              top: "-10px",
                                              display: "block",
                                            }}
                                          />
                                          <i
                                            className="form-control-feedback glyphicon glyphicon-remove"
                                            id="resetIconID"
                                            title="Reset"
                                            style={{
                                              display: "none",
                                              cursor: "pointer",
                                              right: "25px",
                                              top: "-10px",
                                            }}
                                          />
                                          <i
                                            className="form-control-feedback fa fa-circle-o-notch fa-spin"
                                            id="spinIconID"
                                            style={{
                                              fontSize: "12px",
                                              display: "none",
                                            }}
                                          />
                                          <input
                                            type="text"
                                            className="form-control seraciiinputkeyword"
                                            id="filterSource2"
                                            placeholder="Search Keywords..."
                                            title="Search Keywords..."
                                            style={{
                                              width: "280px",
                                              padding: "0px 9px",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rTableRow">
                                      <div
                                        className="rTableCell bdv_000000_Text_11"
                                        style={{
                                          verticalAlign: "middle",
                                          align: "left",
                                          padding: "0 0 10px 0",
                                          width: "300px",
                                        }}
                                      >
                                        <div id="topKeywordsID">
                                          (or{" "}
                                          <span
                                            className="bdv_000000_Text_11"
                                            align="center"
                                            style={{
                                              textDecoration: "underline",
                                              cursor: "pointer",
                                              fontSize: "11px",
                                              align: "center",
                                            }}
                                          >
                                            click here
                                          </span>{" "}
                                          for top keywords)
                                        </div>
                                      </div>
                                    </div>
                                    <select
                                      className="keyworktextarea"
                                      id="keywordsSelect"
                                      multiple=""
                                      style={{
                                        width: "300px",
                                        height: "300px",
                                      }}
                                    >
                                      {" "}
                                      <option
                                        value="extramovies fmovies streaming"
                                        id="keywordID"
                                        numofkeywords="10999"
                                        title="extramovies fmovies streaming"
                                      >
                                        extramovies fmovies streaming{" "}
                                      </option>
                                      <option
                                        value="extramovies"
                                        id="keywordID"
                                        numofkeywords="10999"
                                        title="extramovies"
                                      >
                                        extramovies{" "}
                                      </option>
                                      <option
                                        value="swatchseries"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseries"
                                      >
                                        swatchseries{" "}
                                      </option>
                                      <option
                                        value="watch series"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="watch series"
                                      >
                                        watch series{" "}
                                      </option>
                                      <option
                                        value="swatchseries1"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseries1"
                                      >
                                        swatchseries1{" "}
                                      </option>
                                      <option
                                        value="swatchseriesis"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseriesis"
                                      >
                                        swatchseriesis{" "}
                                      </option>
                                      <option
                                        value="swatchseries home"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseries home"
                                      >
                                        swatchseries home{" "}
                                      </option>
                                      <option
                                        value="swatchseries online"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseries online"
                                      >
                                        swatchseries online{" "}
                                      </option>
                                      <option
                                        value="swatchseries new domain"
                                        id="keywordID"
                                        numofkeywords="9999"
                                        title="swatchseries new domain"
                                      >
                                        swatchseries new domain{" "}
                                      </option>
                                      <option
                                        value="igi 2"
                                        id="keywordID"
                                        numofkeywords="8999"
                                        title="igi 2"
                                      >
                                        igi 2{" "}
                                      </option>
                                      <option
                                        value="pcanywhere"
                                        id="keywordID"
                                        numofkeywords="8999"
                                        title="pcanywhere"
                                      >
                                        pcanywhere{" "}
                                      </option>
                                      <option
                                        value="lotus organizer"
                                        id="keywordID"
                                        numofkeywords="8999"
                                        title="lotus organizer"
                                      >
                                        lotus organizer{" "}
                                      </option>
                                      <option
                                        value="lotus smartsuite"
                                        id="keywordID"
                                        numofkeywords="8999"
                                        title="lotus smartsuite"
                                      >
                                        lotus smartsuite{" "}
                                      </option>
                                      <option
                                        value="laptop computer reviews"
                                        id="keywordID"
                                        numofkeywords="8999"
                                        title="laptop computer reviews"
                                      >
                                        laptop computer reviews{" "}
                                      </option>
                                      <option
                                        value="hulu"
                                        id="keywordID"
                                        numofkeywords="7999"
                                        title="hulu"
                                      >
                                        hulu{" "}
                                      </option>
                                      <option
                                        value="hulu tv"
                                        id="keywordID"
                                        numofkeywords="7999"
                                        title="hulu tv"
                                      >
                                        hulu tv{" "}
                                      </option>
                                      <option
                                        value="hulu login"
                                        id="keywordID"
                                        numofkeywords="7999"
                                        title="hulu login"
                                      >
                                        hulu login{" "}
                                      </option>
                                      <option
                                        value="hulu live tv"
                                        id="keywordID"
                                        numofkeywords="7999"
                                        title="hulu live tv"
                                      >
                                        hulu live tv{" "}
                                      </option>
                                      <option
                                        value="hulu activate"
                                        id="keywordID"
                                        numofkeywords="7999"
                                        title="hulu activate"
                                      >
                                        hulu activate{" "}
                                      </option>
                                      <option
                                        value="movies"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="movies"
                                      >
                                        movies{" "}
                                      </option>
                                      <option
                                        value="cmovieshd"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="cmovieshd"
                                      >
                                        cmovieshd{" "}
                                      </option>
                                      <option
                                        value="movies123"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="movies123"
                                      >
                                        movies123{" "}
                                      </option>
                                      <option
                                        value="cmovies vc"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="cmovies vc"
                                      >
                                        cmovies vc{" "}
                                      </option>
                                      <option
                                        value="cmovies tv"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="cmovies tv"
                                      >
                                        cmovies tv{" "}
                                      </option>
                                      <option
                                        value="cmovieshd bz"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="cmovieshd bz"
                                      >
                                        cmovieshd bz{" "}
                                      </option>
                                      <option
                                        value="cmovies movies"
                                        id="keywordID"
                                        numofkeywords="6999"
                                        title="cmovies movies"
                                      >
                                        cmovies movies{" "}
                                      </option>
                                      <option
                                        value="virus removal"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="virus removal"
                                      >
                                        virus removal{" "}
                                      </option>
                                      <option
                                        value="google"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="google"
                                      >
                                        google{" "}
                                      </option>
                                      <option
                                        value="up168s"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="up168s"
                                      >
                                        up168s{" "}
                                      </option>
                                      <option
                                        value="photos"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="photos"
                                      >
                                        photos{" "}
                                      </option>
                                      <option
                                        value="fundev"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="fundev"
                                      >
                                        fundev{" "}
                                      </option>
                                      <option
                                        value="malware"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="malware"
                                      >
                                        malware{" "}
                                      </option>
                                      <option
                                        value="explorador"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="explorador"
                                      >
                                        explorador{" "}
                                      </option>
                                      <option
                                        value="exploradora"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="exploradora"
                                      >
                                        exploradora{" "}
                                      </option>
                                      <option
                                        value="antimalware"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="antimalware"
                                      >
                                        antimalware{" "}
                                      </option>
                                      <option
                                        value="https"
                                        id="keywordID"
                                        numofkeywords="5999"
                                        title="https"
                                      >
                                        https{" "}
                                      </option>
                                      <option
                                        value="lookmovie"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovie"
                                      >
                                        lookmovie{" "}
                                      </option>
                                      <option
                                        value="lookmovie2"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovie2"
                                      >
                                        lookmovie2{" "}
                                      </option>
                                      <option
                                        value="lookmovies2"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovies2"
                                      >
                                        lookmovies2{" "}
                                      </option>
                                      <option
                                        value="lookmovie la"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovie la"
                                      >
                                        lookmovie la{" "}
                                      </option>
                                      <option
                                        value="lookmoviesio"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmoviesio"
                                      >
                                        lookmoviesio{" "}
                                      </option>
                                      <option
                                        value="lookmovie reddit"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovie reddit"
                                      >
                                        lookmovie reddit{" "}
                                      </option>
                                      <option
                                        value="lookmovie io safe"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="lookmovie io safe"
                                      >
                                        lookmovie io safe{" "}
                                      </option>
                                      <option
                                        value="google maps"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google maps"
                                      >
                                        google maps{" "}
                                      </option>
                                      <option
                                        value="google docs"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google docs"
                                      >
                                        google docs{" "}
                                      </option>
                                      <option
                                        value="google drive"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google drive"
                                      >
                                        google drive{" "}
                                      </option>
                                      <option
                                        value="google earth"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google earth"
                                      >
                                        google earth{" "}
                                      </option>
                                      <option
                                        value="google chrome"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google chrome"
                                      >
                                        google chrome{" "}
                                      </option>
                                      <option
                                        value="google classroom"
                                        id="keywordID"
                                        numofkeywords="3999"
                                        title="google classroom"
                                      >
                                        google classroom{" "}
                                      </option>
                                      <option
                                        value="free vpn"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="free vpn"
                                      >
                                        free vpn{" "}
                                      </option>
                                      <option
                                        value="smart dns"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="smart dns"
                                      >
                                        smart dns{" "}
                                      </option>
                                      <option
                                        value="unblocked movies"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="unblocked movies"
                                      >
                                        unblocked movies{" "}
                                      </option>
                                      <option
                                        value="unblocked movie sites"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="unblocked movie sites"
                                      >
                                        unblocked movie sites{" "}
                                      </option>
                                      <option
                                        value="free movies unblocked"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="free movies unblocked"
                                      >
                                        free movies unblocked{" "}
                                      </option>
                                      <option
                                        value="vidloxcom"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="vidloxcom"
                                      >
                                        vidloxcom{" "}
                                      </option>
                                      <option
                                        value="vidlox apk"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="vidlox apk"
                                      >
                                        vidlox apk{" "}
                                      </option>
                                      <option
                                        value="vidlox app"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="vidlox app"
                                      >
                                        vidlox app{" "}
                                      </option>
                                      <option
                                        value="vidlox movies"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="vidlox movies"
                                      >
                                        vidlox movies{" "}
                                      </option>
                                      <option
                                        value="video downloader"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="video downloader"
                                      >
                                        video downloader{" "}
                                      </option>
                                      <option
                                        value="vidlox streaming"
                                        id="keywordID"
                                        numofkeywords="2999"
                                        title="vidlox streaming"
                                      >
                                        vidlox streaming{" "}
                                      </option>
                                      <option
                                        value="gogomovies 123"
                                        id="keywordID"
                                        numofkeywords="1999"
                                        title="gogomovies 123"
                                      >
                                        gogomovies 123{" "}
                                      </option>
                                      <option
                                        value="gogomovies free"
                                        id="keywordID"
                                        numofkeywords="1999"
                                        title="gogomovies free"
                                      >
                                        gogomovies free{" "}
                                      </option>
                                      <option
                                        value="free movies online"
                                        id="keywordID"
                                        numofkeywords="1999"
                                        title="free movies online"
                                      >
                                        free movies online{" "}
                                      </option>
                                      <option
                                        value="watch movies online"
                                        id="keywordID"
                                        numofkeywords="1999"
                                        title="watch movies online"
                                      >
                                        watch movies online{" "}
                                      </option>
                                    </select>
                                  </div>

                                  <div
                                    className="rTable"
                                    id="loadMoreTableID"
                                    style={{ width: "300px" }}
                                  >
                                    <div
                                      className="rTableRow"
                                      id="loadMoreTableRowID"
                                      style={{ display: "block" }}
                                    >
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "165px",
                                          textAlign: "right",
                                        }}
                                      >
                                        <div id="loadMoreID">
                                          <span
                                            className="bdv_000000_Text_11"
                                            align="center"
                                            style={{
                                              textDecoration: "underline",
                                              cursor: "pointer",
                                              fontSize: "11px",
                                            }}
                                          >
                                            Load more
                                          </span>{" "}
                                        </div>
                                      </div>
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "165px",
                                          textAlign: "left",
                                        }}
                                      >
                                        <span
                                          className="bdv_000000_Text_11"
                                          style={{ fontSize: "11px" }}
                                          id="loadMoreExtraTextID"
                                        ></span>
                                      </div>
                                    </div>
                                    <div
                                      className="rTableRow"
                                      id="loadMore0TableRowID"
                                      style={{ display: "none" }}
                                    >
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "300px",
                                          textAlign: "center",
                                          fontSize: "11px",
                                        }}
                                      >
                                        All keywords showed
                                      </div>
                                    </div>
                                    <div
                                      className="rTableRow"
                                      id="noKeywordsID"
                                      style={{ display: "none" }}
                                    >
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "300px",
                                          textAlign: "center",
                                          fontSize: "11px",
                                        }}
                                      >
                                        No keywords found
                                      </div>
                                    </div>
                                    <div
                                      className="rTableRow"
                                      id="loadMoreFilterTableRowID"
                                      style={{ display: "none" }}
                                    >
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "210px",
                                          textAlign: "right",
                                        }}
                                      >
                                        <div id="loadMoreFilterID">
                                          <span
                                            className="bdv_000000_Text_11"
                                            align="center"
                                            style={{
                                              textDecoration: "underline",
                                              cursor: "pointer",
                                              fontSize: "11px",
                                            }}
                                          >
                                            Load more
                                          </span>{" "}
                                        </div>
                                      </div>
                                      <div
                                        className="rTableCell"
                                        style={{
                                          width: "120px",
                                          textAlign: "left",
                                        }}
                                      >
                                        <span
                                          className="bdv_000000_Text_11"
                                          style={{ fontSize: "11px" }}
                                          id="loadMoreFilterExtraTextID"
                                        >
                                          {" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="rTableCell"
                                  style={{
                                    height: "300px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "150px",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    &nbsp;
                                  </div>
                                  <span>
                                    <input
                                      className="function-button"
                                      style={{ minWidth: "20px" }}
                                      type="Button"
                                      id="btnAddKeywords"
                                      value=">>"
                                    />
                                  </span>
                                  <br />
                                  <br />
                                </div>
                                <div className="rTableCell">
                                  <textarea
                                    id="keywordsSelected"
                                    wrap="off"
                                    className="bdv_000000_Text_11"
                                    style={{ width: "330px", height: "350px" }}
                                    placeholder="KEYWORD1
KEYWORD2
..."
                                  />
                                  <br />
                                  <div
                                    className="rTableCell bdv_000000_Text_11"
                                    style={{ fontSize: "11px", width: "320px" }}
                                    nowrap=""
                                  >
                                    DO NOT use "[" and "]" - only broad match
                                    type is supported.
                                    <br />
                                    To exclude keywords, use minus sign
                                    (example: -keyword).
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          <span id="brandsSet" style={{ display: "none" }}>
                            <div className="rTable">
                              Brand targeting allows you to get highly engaged
                              users that are actively browsing for a specific
                              brand which makes this traffic very effective for
                              brand-to-brand and brand-to-competitor campaigns.
                              <br />
                              <br />
                              Here is a sample of top brands traffic is our
                              network, sorted alphabetically. You can easily add
                              them to your Keywords List right from here.
                              <br />
                              <br />
                            </div>
                            <div className="rTable">
                              <div className="rTableRow">
                                <div
                                  className="rTableCell bdv_000000_Text_11"
                                  style={{ width: "300px" }}
                                >
                                  <strong>Top Brands</strong>
                                  <hr
                                    noshade
                                    size="1"
                                    color="#CED8E2"
                                    style={{ margin: "0", width: "300px" }}
                                  />
                                  <span style={{ fontSize: "11px" }}>
                                    (Sorted alphabetically)
                                  </span>
                                </div>
                                <div className="rTableCell"></div>
                                <div
                                  className="rTableCell bdv_000000_Text_11"
                                  style={{ width: "300px" }}
                                >
                                  <strong>Your Keywords (one per line)</strong>
                                  <hr
                                    noshade
                                    size="1"
                                    color="#CED8E2"
                                    style={{ margin: "0", width: "300px" }}
                                  />
                                  <span style={{ fontSize: "11px" }}>
                                    &nbsp;
                                  </span>
                                </div>
                              </div>
                              <div className="rTableRow">
                                <div className="rTableCell"></div>
                                <div
                                  className="rTableCell"
                                  style={{
                                    height: "300px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "150px",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    &nbsp;
                                  </div>
                                  <span>
                                    <input
                                      className="function-button"
                                      style={{ minWidth: "20px" }}
                                      type="Button"
                                      id="btnAddBrand"
                                      value=">>"
                                    />
                                  </span>
                                  <br />
                                  <br />
                                </div>
                                <div className="rTableCell">
                                  <textarea
                                    id="keywordsSelectedB"
                                    wrap="off"
                                    className="bdv_000000_Text_11 keyworktextarea"
                                    style={{ width: "330px", height: "340px" }}
                                    placeholder="KEYWORD1
KEYWORD2
..."
                                  />
                                  <br />
                                  <div
                                    className="rTableCell bdv_000000_Text_11"
                                    style={{ fontSize: "11px", width: "320px" }}
                                    nowrap=""
                                  >
                                    DO NOT use "[" and "]" - only broad match
                                    type is supported.
                                    <br />
                                    To exclude keywords, use minus sign
                                    (example: -keyword).
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        <tr>
          <td colspan="2">
            <hr style={{ margin: "10px", size: "1px", color: "#CED8E2" }} />
          </td>
        </tr>
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
            Done Selecting
          </button>
        </center>
      </div>
    </div>
  );
};

export default Targeting;
