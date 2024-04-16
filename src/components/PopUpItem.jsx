import React, { useContext, useState } from "react";
import "../styles/PopupItem.css";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
import { useNavigate } from "react-router-dom";
import DownloadImage from "../assets/download.gif";
const PopUpItem = ({ handlepopupclick, currentItem }) => {
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const navigate = useNavigate();
  const [showurls, setshowUrls] = useState(false);
  const [destinationUrl, setDestinationURL] = useState("");
  const [comapingname, setcompaingname] = useState("");
  const [title, setTitle] = useState("Cheap Solar for Home");
  const [descriptionLine1, setDescriptionLine1] = useState(
    "Get Free Solar From Government"
  );
  const [descriptionLine2, setDescriptionLine2] = useState(
    "Get The Best Solar Quotes for Free"
  );

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionLine1Change = (event) => {
    setDescriptionLine1(event.target.value);
  };

  const handleDescriptionLine2Change = (event) => {
    setDescriptionLine2(event.target.value);
  };
  const openPreview = () => {
    const testLink = createTestLink(); // This function needs to be defined elsewhere or replaced with actual logic
    window.open(testLink, "Preview");
  };
  return (
    <div className="innerpopupitem">
      <div class="popup_top_sec">
        <div className="popup_title">Edit Ad</div>
        <div className="popupcontentcontainerr">
          <span className="spantitle">
            Campaign: {currentItem?.campaignName}
          </span>
          <br />
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
                  Use the form below to name your ad and set the Destination
                  URL, which is your landing page where we will send the traffic
                  to.
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <br />
                  <b>Landing Page Guidance:</b>
                  <br />
                  No malicious, malware, flash updates, fake virus warnings,
                  auto downloads, scareware or tech-support.
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
                    Content that is not allowed to be promoted on the
                    BidVertiser Network:
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
                    <table
                      width="100%"
                      border="0"
                      className="bdv_000000_Text_11"
                    >
                      <tbody>
                        <tr>
                          <td align="left" width="130" nowrap="">
                            Name your Ad:
                            <br />
                            <input
                              type="Text"
                              id="AdName"
                              required
                              data-meteor-emoji="true"
                              tabIndex="1"
                              size="48"
                              value={currentItem?.campaignName}
                              onChange={(e) => setcompaingname(e.target.value)}
                              className="firtcreatinput"
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
                        {currentItem?.adFormat === "Native" ? (
                          <>
                            <table>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    width: "130px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  Title:
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      type="text"
                                      tabIndex="2"
                                      size="48"
                                      className="popupinputItem"
                                      style={{ width: "348px" }}
                                      id="title"
                                      name="Title"
                                      onKeyUp={
                                        () => {} /* update function here */
                                      }
                                      value={title}
                                      placeholder="Ad title"
                                      maxLength="25"
                                      onChange={handleTitleChange}
                                    />
                                    <div
                                      style={{
                                        height: "37px",
                                        width: "37px",
                                        color: "rgb(17, 115, 183)",
                                        borderLeft:
                                          "1px solid rgb(211, 211, 211)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <i
                                        className="fa fa-smile-o"
                                        style={{ fontSize: "14px" }}
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  style={{
                                    width: "40px",
                                    textAlign: "right",
                                    paddingTop: "25px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  20/25
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style={{ verticalAlign: "top" }}
                                >
                                  Description line 1:
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      className="popupinputItem"
                                      type="text"
                                      tabIndex="3"
                                      size="48"
                                      style={{ width: "348px" }}
                                      id="desc_line_1"
                                      name="Line_1"
                                      onKeyUp={
                                        () => {} /* update function here */
                                      }
                                      value={descriptionLine1}
                                      placeholder="First line of description"
                                      maxLength="35"
                                      onChange={handleDescriptionLine1Change}
                                    />
                                    <div
                                      style={{
                                        height: "37px",
                                        width: "37px",
                                        color: "rgb(17, 115, 183)",
                                        borderLeft:
                                          "1px solid rgb(211, 211, 211)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <i
                                        className="fa fa-smile-o"
                                        style={{ fontSize: "14px" }}
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  style={{
                                    textAlign: "right",
                                    paddingTop: "25px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  30/35
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style={{ verticalAlign: "top" }}
                                >
                                  Description line 2:
                                  <br />
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      className="popupinputItem"
                                      type="text"
                                      tabIndex="4"
                                      size="48"
                                      style={{ width: "348px" }}
                                      id="desc_line_2"
                                      name="Line_2"
                                      onKeyUp={
                                        () => {} /* update function here */
                                      }
                                      value={descriptionLine2}
                                      placeholder="Second line of description"
                                      maxLength="35"
                                      onChange={handleDescriptionLine2Change}
                                    />
                                    <div
                                      style={{
                                        height: "37px",
                                        width: "37px",
                                        color: "rgb(17, 115, 183)",
                                        borderLeft:
                                          "1px solid rgb(211, 211, 211)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      <i
                                        className="fa fa-smile-o"
                                        style={{ fontSize: "14px" }}
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  style={{
                                    textAlign: "right",
                                    paddingTop: "25px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  34/35
                                </td>
                              </tr>
                            </table>
                            <td
                              valign="top"
                              align="center"
                              style={{ width: "100%" }}
                            >
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                border="0"
                                style={{ width: 240, paddingLeft: "50px" }}
                              >
                                <tbody>
                                  <tr>
                                    <td align="left">
                                      <span
                                        style={{
                                          fontSize: 11,
                                          lineHeight: "20px",
                                          margin: 0,
                                          padding: 0,
                                        }}
                                      >
                                        Ad Preview: (with Macros replacement
                                        <span
                                          className="fa-stack fa-lg"
                                          onMouseOver={() =>
                                            alert(
                                              "Creative Macros replaced for demo purposes only:\n- {BV_CITY} replaced with 'Rochester'\n- {BV_REGION} replaced with 'New York'\n- {BV_COUNTRY} replaced with 'United States'"
                                            )
                                          }
                                          style={{ height: "1.2em" }}
                                        >
                                          <i
                                            className="fa fa-circle fa-stack-1x"
                                            style={{
                                              color: "white",
                                              fontSize: 13,
                                              WebkitTextStrokeWidth: 2,
                                              WebkitTextStrokeColor: "white",
                                            }}
                                          ></i>
                                          <i
                                            className="fa fa-info-circle fa-stack-1x"
                                            style={{
                                              color: "#5d86c9",
                                              fontSize: 13,
                                            }}
                                          ></i>
                                        </span>
                                        )
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      <input
                                        type="hidden"
                                        name="tempIMG"
                                        value="1\131707.jpg"
                                      />
                                      <div
                                        onClick={openPreview}
                                        style={{
                                          textDecoration: "none",
                                          cursor: "pointer",
                                        }}
                                      >
                                        <div
                                          id="nativetxt_link_240x160_0"
                                          style={{
                                            overflow: "hidden",
                                            textAlign: "left",
                                            width: 300,
                                            height: 255,
                                            position: "relative",
                                            padding: 1,
                                            border: "1px solid rgba(0,0,0,0.2)",
                                          }}
                                        >
                                          <div style={{ width: 300 }}>
                                            <img
                                              id="img_id_1"
                                              src={DownloadImage}
                                              width="300"
                                              alt="Ad Image"
                                            />
                                          </div>
                                          <div
                                            style={{
                                              backgroundColor: "rgba(0,0,0,0)",
                                              padding: "0 2px",
                                              position: "absolute",
                                              bottom: -2,
                                              width: 300,
                                              height: 55,
                                              
                                            }}
                                          >
                                            <div
                                              id="title_id_1"
                                              style={{
                                                letterSpacing: 1,
                                                lineHeight: "15px",
                                                fontSize: 12,
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "black",
                                                fontWeight: "bold",
                                                textDecoration: "none",
                                              }}
                                            >
                                              Cheap Solar for Home
                                            </div>
                                            <div
                                              id="content_1_id_1"
                                              style={{
                                                lineHeight: "13px",
                                                fontSize: 11,
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "#333333",
                                              }}
                                            >
                                              Get Free Solar From Government
                                              <br />
                                              Get The Best Solar Quotes for Free
                                            </div>
                                            <div
                                              id="link_id_1"
                                              style={{
                                                letterSpacing: 1,
                                                lineHeight: "11px",
                                                fontSize: 9,
                                                fontFamily:
                                                  "Poppins, sans-serif",
                                                color: "grey",
                                              }}
                                            >
                                              smartinfoplanet.com
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </>
                        ) : null}
                        <tr>
                          <td
                            align="left"
                            colSpan="7"
                            nowrap
                            style={{ position: "relative" }}
                          >
                            Destination URL / Tel:
                            <span
                              className="fa-stack fa-lg"
                              onMouseOver={() =>
                                alert(
                                  `Destination URL / Tel\n\nThe exact destination where you want the customer that clicks on the ad to be sent to. Any extensions (i.e. tracking code, inner website pages, affiliate IDs, etc.) should be used here.\n\nTelephone number:\nBe sure to use the proper format: Begin with tel: followed by the number.\nUse only digits. No hyphens, no parentheses.\n\nFor example, the proper format of (212) 555-8888 in the URL field is tel:2125558888.\n\nInternational numbers: use the plus symbol (+) followed by the country calling code and telephone number. A complete international number should begin with tel: followed by + followed by the country calling code and telephone number.\n\nFor example, the proper format of +1-300-555-8888 in the URL field is tel:+13005558888.`
                                )
                              }
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
                            <div>
                              <input
                                className="desurl"
                                type="text"
                                tabIndex="6"
                                required
                                placeholder="https://"
                                id="URLLINE"
                                style={{
                                  verticalAlign: "bottom",
                                  paddingRight: "34px",
                                  width: "805px",
                                }}
                                value={destinationUrl}
                                onChange={(e) =>
                                  setDestinationURL(e.target.value)
                                }
                                maxLength="490"
                              />
                            </div>
                            <div style={{ float: "right" }}>
                              <div
                                onClick={() =>
                                  window.open(createTestLink(), "Preview")
                                }
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

                        <tr>
                          <td
                            colSpan="7"
                            style={{ position: "relative", top: "-20px" }}
                          >
                            <span
                              style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                              onClick={() => showurls(!showurls)}
                            >
                              Destination URL Macros
                            </span>
                            <span
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                                fontSize: "9px",
                                color: "black",
                                marginLeft: "3px",
                              }}
                              id="destArrow_atag2"
                            >
                              ▶
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {showurls && (
                      <table className="bdv_000000_Text_11">
                        <tbody>
                          <tr>
                            <td></td>
                            <td
                              colSpan="5"
                              id="atag2"
                              style={{ display: "none" }}
                            >
                              We recommend using our various tracking macros,
                              especially the traffic source parameter
                              {` {BV_SRCID}`}, in order to track the performance
                              of your campaign and optimize accordingly.
                              Tracking
                              {` {BV_SRCID}`} will help you identify well
                              performing sources so you can allocate them more
                              budget on behalf of such that do not perform as
                              well.
                              <br />
                              <li
                                onMouseOver={() => addCopy("SRCID", "visible")}
                                onMouseOut={() => addCopy("SRCID", "hidden")}
                              >
                                Traffic source:{" "}
                                <b>
                                  <span id="{BV_SRCID}">{`{BV_SRCID}`}</span>
                                </b>
                                <span
                                  style={{
                                    visibility: "hidden",
                                    cursor: "pointer",
                                  }}
                                  id="SRCID"
                                  className="btn btn-default btn-copy js-tooltip js-copy"
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  data-copy="{BV_SRCID}"
                                >
                                  <i
                                    className="fa fa-clone"
                                    aria-hidden="true"
                                    style={{
                                      color: "#1173b7",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                  <span
                                    id="{BV_SRCID}_comment"
                                    style={{
                                      marginLeft: "5px",
                                      visibility: "hidden",
                                      color: "rgba(17,115,183,1)",
                                    }}
                                  ></span>
                                </span>
                              </li>
                              {/* Add other list items similarly */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="7" height="25" valign="middle" width="100%">
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
                <td colspan="6">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                    className="bdv_000000_Text_11"
                  >
                    <tbody>
                      <tr>
                        <td
                          width="15%"
                          nowrap
                          style={{
                            paddingRight: "5px",
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Traffic Source Type:{" "}
                          <span
                            className="fa-stack fa-lg"
                            onmouseover="return escape('<strong>Traffic Source Type</strong><br>The type of websites that will send traffic to this campaign - <img width=12 height=12 hspace=5 style=margin-bottom:3px src=https://my.bidvertiser.com/BidVertiser/Images/bdv_standard.png align=absmiddle>Mainstream or <img width=12 height=12 hspace=5 style=margin-bottom:3px src=https://my.bidvertiser.com/BidVertiser/Images/bdv_porn.png align=absmiddle>Porn.');"
                            style={{ height: "1.2em", lineHeight: "20px" }}
                          >
                            <i
                              className="fa fa-circle fa-stack-1x"
                              style={{
                                color: "white",
                                fontSize: "13px",
                                marginLeft: "20px",
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
                        </td>
                        <td width="15%">
                          <input
                            type="radio"
                            style={{
                              height: "12px",
                              position: "relative",
                              bottom: "-2px",
                              marginRight: "7px",
                            }}
                            name="isAdult"
                            value="0"
                            checked
                          />
                          Mainstream
                        </td>
                        <td width="15%">
                          <input
                            type="radio"
                            style={{
                              height: "12px",
                              position: "relative",
                              bottom: "-2px",
                              marginRight: "7px",
                            }}
                            name="isAdult"
                            value="2"
                          />
                          Porn
                        </td>
                        <td width="55%" nowrap>
                          (Adult campaigns must use "Porn" traffic source type)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              {/* here  */}
              {currentItem?.adFormat === "Native" ? (
                <table
                  style={{
                    width: "100%",
                    borderSpacing: "0",
                    borderCollapse: "collapse",
                    border: "0",
                  }}
                >
                  <tbody>
                    <tr>
                      <td colSpan="3">
                        <em>
                          <strong>Optional:</strong> Upload an image in a format
                          of GIF / JPG / JPEG / PNG [recommended image size: 300
                          x 200]
                        </em>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3" style={{ fontSize: "0.8em" }}>
                        <ul>
                          <li>
                            You can crop your image to the correct size on the
                            next page
                          </li>
                          <li>
                            Maximum file size to upload for cropping is 2MB
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "*", float: "left" }}>
                        <label
                          className="function-button"
                          htmlFor="upload_na_image"
                          style={{
                            lineHeight: "28px",
                            padding: "0",
                            textAlign: "center",
                            float: "left",
                          }}
                        >
                          Choose an Image
                        </label>
                        <div
                          style={{
                            lineHeight: "30px",
                            width: "450px",
                            whiteSpace: "nowrap",
                            paddingLeft: "10px",
                            overflow: "hidden",
                            float: "left",
                          }}
                          id="filename"
                        >
                          {/* Display file name here */}
                        </div>
                      </td>
                      <td
                        style={{
                          width: "250px",
                          textAlign: "right",
                          verticalAlign: "top",
                        }}
                      >
                        <div
                          id="upload_status"
                          style={{
                            width: "120px",
                            display: "none",
                            float: "left",
                            lineHeight: "30px",
                            textAlign: "center",
                          }}
                        >
                          Uploading...
                        </div>
                        <input
                          type="button"
                          style={{
                            width: "120px",
                            display: "none",
                            float: "left",
                          }}
                          tabIndex="5"
                          id="upload_button"
                          name="upload_button"
                          value="Crop & Replace"
                          onClick={() => get_image()}
                        />
                        <input
                          className="generatebutton"
                          type="button"
                          style={{
                            width: "120px",
                            marginLeft: "10px",
                            float: "right",
                          }}
                          tabIndex="5"
                          id="delete_button"
                          name="delete_button"
                          value="Delete"
                          onClick={() => remove_image()}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
              <tr>
                <td colspan="7" height="25" valign="middle" width="100%">
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
                <td>
                  <strong>Frequency filter:</strong>{" "}
                  <span
                    className="fa-stack fa-lg"
                    onmouseover="return escape('Frequency filter will allow you to control how often your campaign will be displayed to the same visitor');"
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
                </td>
              </tr>
              <tr>
                <td>
                  <select
                    name="freq_cap"
                    className="minputdoneonebiddi"
                    id="freq_cap_val"
                    onChange={(e) => changeNote(e.target.value)}
                  >
                    <option value="1">1 Hour</option>
                    <option value="4">4 Hours</option>
                    <option value="8" selected>
                      8 Hours
                    </option>
                    <option value="24">1 Day</option>
                    <option value="48">2 Days</option>
                    <option value="72">3 Days</option>
                    <option value="96">4 Days</option>
                    <option value="120">5 Days</option>
                    <option value="144">6 Days</option>
                    <option value="168">7 Days</option>
                  </select>
                  &nbsp;- Your campaign will receive the same visitor no more
                  than once per <span id="freq_cap_note">8 hours</span>
                  <div id="freq_cap_alert_ID" style={{ display: "none" }}></div>
                </td>
              </tr>
              <br />
              <tr>
                <td colspan="7" height="25" valign="middle" width="100%">
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
            </tbody>
          </table>

          <center id="ad_select" className="buttonlargetwo">
            <button onClick={handlepopupclick} id="desk_select" class="function-button">
              Update
            </button>
          </center>
        </div>
      </div>
      <div onClick={handlepopupclick} className="cllose">
        <span className="notification_box_close">
          <span
            className="fa-stack fa-lg"
            style={{ textShadow: "0px 0px 3px rgba(0,0,0,0.5)" }}
          >
            <i
              style={{ color: "black", fontSize: "36px" }}
              className="fa fa-circle fa-stack-1x"
            ></i>
            <i
              style={{ color: "white", fontSize: "33px" }}
              className="fa fa-circle-thin fa-stack-1x toprem"
            ></i>
            <i
              style={{ color: "white", fontSize: "15px", marginTop: "-1px" }}
              className="fa fa-times fa-stack-1x toprem"
            ></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default PopUpItem;
