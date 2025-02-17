import React, { useContext, useState } from "react";
import "../styles/Creative.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";

const Creative = () => {
  const navigate = useNavigate();
  const [showurls, setshowUrls] = useState(false);
  const [destinationUrl, setDestinationURL] = useState("");
  const [comapingname, setcompaingname] = useState("");
  const [displayUrl, setDisplayURL] = useState("www.yourwebsite.com");
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("Ad title");
  const [descriptionLine1, setDescriptionLine1] = useState(
    "First line of description"
  );
  const [descriptionLine2, setDescriptionLine2] = useState(
    "a sescond line of description"
  );
  console.log(state);
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
  const handleClickNext = () => {
    handleUpdateState("campaignName", comapingname);
    handleUpdateState("compaignImage", url);
    handleUpdateState("title", title);
    handleUpdateState("descriptionone", descriptionLine1);
    handleUpdateState("destinationURL", destinationUrl);
    handleUpdateState("descriptiontwo", descriptionLine2);
    handleUpdateState("displayURL", displayUrl);
    navigate("/bdv/BideVertiser/budget");
  };
  const changeNote = (_note) => {
    if (_note > 8) {
      document.getElementById("freq_cap_note").innerHTML =
        _note > 24 ? _note / 24 : "" + " day" + (_note > 24 ? "s" : "");
      document.getElementById("freq_cap_alert_ID").style.display = "block";
    } else {
      document.getElementById("freq_cap_note").innerHTML =
        _note > 1 ? _note : "" + " hour" + (_note > 1 ? "s" : "");
      document.getElementById("freq_cap_alert_ID").style.display = "none";
    }
  };

  React.useEffect(() => {
    changeNote(document.getElementById("freq_cap_val").value);
  }, []);

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
  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bidevertiser");
    data.append("cloud_name", "usamaahmad");
    data.append("folder", "bidevertiser");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/usamaahmad/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setUrl(res.secure_url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };
  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
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
                backgroundColor: "#1173b7",
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
                            required
                            data-meteor-emoji="true"
                            tabIndex="1"
                            size="48"
                            value={comapingname}
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
                      {state?.adFormat === "Native" ||
                      state?.adFormat === "Push" ||
                      state?.adFormat === "InPage" ? (
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
                              <td align="left" style={{ verticalAlign: "top" }}>
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
                              <td align="left" style={{ verticalAlign: "top" }}>
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
                            <tr>
                              <td align="left" style={{ verticalAlign: "top" }}>
                                Display URL:
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
                                    value={displayUrl}
                                    placeholder="www.yourwebsite.com"
                                    maxLength="35"
                                    onChange={(e) =>
                                      setDisplayURL(e.target.value)
                                    }
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
                                          width: 310,
                                          height: 320,
                                          position: "relative",
                                          padding: 1,
                                          border: "1px solid rgba(0,0,0,0.2)",
                                        }}
                                      >
                                        {image && (
                                          <div
                                            style={{
                                              width: 350,
                                              backgroundSize: "cover",
                                              objectFit: "cover",
                                            }}
                                          >
                                            <div
                                              style={{
                                                height: "280px",
                                                width: "100%",
                                              }}
                                            >
                                              <img
                                                src={preview}
                                                style={{
                                                  width: "100%",
                                                  height: "100%",
                                                  objectFit: "cover",
                                                  backgroundSize: "cover",
                                                }}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        )}

                                        <div
                                          style={{
                                            backgroundColor: "white",
                                            padding: "0 2px",
                                            position: "absolute",
                                            bottom: -2,
                                            width: 350,
                                            height: 55,
                                          }}
                                        >
                                          <div
                                            id="title_id_1"
                                            style={{
                                              letterSpacing: 1,
                                              lineHeight: "15px",
                                              fontSize: 12,
                                              fontFamily: "Poppins, sans-serif",
                                              color: "black",
                                              fontWeight: "bold",
                                              textDecoration: "none",
                                            }}
                                          >
                                            {title}
                                          </div>
                                          <div
                                            id="content_1_id_1"
                                            style={{
                                              lineHeight: "13px",
                                              fontSize: 11,
                                              fontFamily: "Poppins, sans-serif",
                                              color: "#333333",
                                            }}
                                          >
                                            {descriptionLine1}
                                            <br />
                                            {descriptionLine2}
                                          </div>
                                          <div
                                            id="link_id_1"
                                            style={{
                                              letterSpacing: 1,
                                              lineHeight: "11px",
                                              fontSize: 9,
                                              fontFamily: "Poppins, sans-serif",
                                              color: "grey",
                                            }}
                                          >
                                            {displayUrl}
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
                          <div
                            style={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
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
                                borderTopRightRadius: "0px",
                                borderBottomRightRadius: "0px",
                              }}
                              value={destinationUrl}
                              onChange={(e) =>
                                setDestinationURL(e.target.value)
                              }
                              maxLength="490"
                            />

                            <div
                              onClick={() =>
                                window.open(createTestLink(), "Preview")
                              }
                              title="Test Link"
                              style={{
                                bottom: "30px",
                                cursor: "pointer",
                                right: "30px",
                                color: "#1173b7",
                                border: "1px solid #d3d3d3",
                                height: "35px",
                                padding: "0px 10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                          style={{ position: "relative", top: "-0px" }}
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
                            of your campaign and optimize accordingly. Tracking
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
                        Entertainment
                      </td>
                      <td style={{ visibility: "hidden" }} width="55%" nowrap>
                        dd
                      </td>
                    </tr>
                  </tbody>
                </table>
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
            {state?.adFormat === "Native" || state?.adFormat === "InPage" ? (
              <table
                style={{
                  width: "100%",
                  borderSpacing: "0",
                  borderCollapse: "collapse",
                  border: "0",
                  paddingBottom: "30px",
                }}
              >
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <em>
                        <strong>Optional:</strong> Upload an image in a format
                        of GIF / JPG / JPEG / PNG [recommended image size: 300 x
                        200]
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
                        <li>Maximum file size to upload for cropping is 2MB</li>
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
                      <div>
                        <input
                          type="file"
                          id="upload_na_image" // Ensure this id matches the htmlFor attribute in the label
                          hidden // This hides the input
                          onChange={handleFileChange} // Handles file selection
                          style={{ display: "none" }}
                          accept="image/*"
                        />
                        <label
                          className="function-button"
                          htmlFor="upload_na_image" // Links this label to the input
                          style={{
                            lineHeight: "28px",
                            padding: "0",
                            textAlign: "center",
                            float: "left",
                            cursor: "pointer", // Changes the cursor to suggest clickable area
                          }}
                        >
                          Choose an Image
                        </label>
                      </div>
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
                        {image?.name}
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
                      {image !== ""}
                      <div style={{ display: "flex", alignItems: "center" }}>
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
                          disabled={!image}
                          value={loading ? "loading..." : "Crop and Upload"}
                          onClick={uploadImage}
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
                          onClick={handleResetClick}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : null}
            <br />
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
                &nbsp;- Your campaign will receive the same visitor no more than
                once per <span id="freq_cap_note">8 hours</span>
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
