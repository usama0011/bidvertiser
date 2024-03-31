import React, { useContext, useState } from "react";
import Header from "../components/Header";
import "../styles/NewCampaing.css";
import { useNavigate } from "react-router-dom";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
const Newcompaings = () => {
  const navigate = useNavigate();
  const [currenttable, setcurrentTable] = useState("directads");
  const { state, dispatch } = useContext(NewCampaignDetailsContext);

  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };

  const handleClickNext = () => {
    if (currenttable === "directads") {
      handleUpdateState("adFormat", "Direct");
    } else if (currenttable === "popuptable") {
      handleUpdateState("adFormat", "PopUp");
    } else if (currenttable === "inpagepushads") {
      handleUpdateState("adFormat", "InPage");
    } else if (currenttable === "nativeads") {
      handleUpdateState("adFormat", "Native");
    } else if (currenttable === "vedioads") {
      handleUpdateState("adFormat", "Vedio");
    } else if (currenttable === "pushads") {
      handleUpdateState("adFormat", "Push");
    } else {
      handleUpdateState("adFormat", "Contextual");
    }

    navigate("/bdv/BideVertiser/geo");
  };
  const handleMobileCompaingAd = () => {
    if (currenttable === "directads") {
      handleUpdateState("adFormat", "Direct");
    } else if (currenttable === "popuptable") {
      handleUpdateState("adFormat", "PopUp");
    } else if (currenttable === "inpagepushads") {
      handleUpdateState("adFormat", "InPage");
    } else if (currenttable === "nativeads") {
      handleUpdateState("adFormat", "Native");
    } else if (currenttable === "vedioads") {
      handleUpdateState("adFormat", "Vedio");
    } else if (currenttable === "pushads") {
      handleUpdateState("adFormat", "Push");
    } else {
      handleUpdateState("adFormat", "Contextual");
    }

    navigate("/bdv/BideVertiser/geo");
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
        <div className="button-group">
          <div
            id="1"
            onClick={() => setcurrentTable("directads")}
            className={currenttable === "directads" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="direct_ad_button"
              style={{ position: "relative", transform: "scale(0.8, 0.8)" }}
            >
              <i
                className="fa fa-globe fa-stack-2x"
                style={{
                  color: "#1173b7",
                  fontSize: "45px",
                  opacity: "0.4",
                  marginTop: "23px",
                  marginLeft: "-60px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{ color: "#1173b7", opacity: "0.4", marginTop: "-5px" }}
              ></i>
              <i
                className="fa fa-long-arrow-right fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "44px",
                  marginTop: "-5px",
                  marginLeft: "-35px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "16px" }}>
              Direct Ads
            </div>
            <div className="mainhighlight-new">
              <div className="mainhighlight"></div>
            </div>
            <div
              className="mainhighlight-new"
              style={{ color: "white", margin: "1px 12px" }}
            >
              POPULAR
            </div>
          </div>
          <div
            onClick={() => setcurrentTable("popuptable")}
            id="2"
            className={currenttable === "popuptable" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="pop_ad_button"
              style={{ position: "relative", transform: "scale(0.8, 0.8)" }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{ color: "#1173b7", opacity: "0.4", marginTop: "-5px" }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "28px",
                  position: "absolute",
                  top: "-35px",
                  left: "45px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "28px",
                  position: "absolute",
                  top: "-35px",
                  left: "39px",
                }}
              ></i>
              <i
                className="fa fa-image fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "30px",
                  marginTop: "-35px",
                  marginLeft: "42px",
                }}
              ></i>
              <i
                className="fa fa-times-circle-o fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "10px",
                  marginTop: "-49px",
                  marginLeft: "60px",
                }}
              ></i>
              <i
                className="fa fa-times-circle fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "10px",
                  marginTop: "-49px",
                  marginLeft: "60px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "10px" }}>
              Pop-Under Ads
            </div>
          </div>
          <div
            onClick={() => setcurrentTable("inpagepushads")}
            id="3"
            className={currenttable === "inpagepushads" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="push_ad_button"
              style={{
                position: "relative",
                transform: "scale(0.8, 0.8)",
              }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "10px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{
                  color: "#1173b7",
                  opacity: "0.4",
                  marginTop: "-5px",
                }}
              ></i>

              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "25px",
                  marginTop: "-3px",
                  marginLeft: "20px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "25px",
                  marginTop: "1px",
                  marginLeft: "20px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "23px",
                  marginTop: "-2px",
                  marginLeft: "20px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "23px",
                  marginTop: "0",
                  marginLeft: "20px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5.5pt",
                  marginTop: "6px",
                  marginLeft: "13px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "3.5px",
                  marginLeft: "21px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "7px",
                  marginLeft: "21px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "3.5px",
                  marginLeft: "26px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "7px",
                  marginLeft: "26px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "14.5pt",
                  marginTop: "-23px",
                  marginLeft: "58px",
                }}
              ></i>

              <i
                className="fa fa-mobile fa-stack-2x"
                style={{
                  color: "#1173b7",
                  fontSize: "45px",
                  marginLeft: "58px",
                }}
              ></i>

              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "14px",
                  position: "absolute",
                  top: "-41px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "14px",
                  position: "absolute",
                  top: "-37px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "13px",
                  position: "absolute",
                  top: "-40px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "13px",
                  position: "absolute",
                  top: "-38px",
                  left: "58px",
                }}
              ></i>

              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-35px",
                  left: "55px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-36px",
                  left: "60px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-34px",
                  left: "60px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-36px",
                  left: "62px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-34px",
                  left: "62px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "10px" }}>
              In-Page Push Ads
            </div>
          </div>

          <div
            onClick={() => setcurrentTable("nativeads")}
            id="6"
            className={currenttable === "nativeads" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="native_ad_button"
              style={{
                position: "relative",
                transform: "scale(0.8, 0.8)",
              }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{
                  color: "#1173b7",
                  opacity: "0.4",
                  marginTop: "-5px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginTop: "-16px",
                  marginLeft: "-14px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "24px",
                  marginTop: "-16px",
                  marginLeft: "-11px",
                }}
              ></i>
              <i
                className="fa fa-image fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "25px",
                  marginTop: "-15px",
                  marginLeft: "-12px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "10px" }}>
              Native Ads
            </div>
          </div>
          <div
            onClick={() => setcurrentTable("vedioads")}
            id="7"
            className={currenttable === "vedioads" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="native_ad_button"
              style={{
                position: "relative",
                transform: "scale(0.8, 0.8)",
              }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{
                  color: "#1173b7",
                  opacity: "0.4",
                  marginTop: "-5px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "35px",
                  marginTop: "-6px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "35px",
                  marginTop: "-6px",
                }}
              ></i>
              <i
                className="fa fa-youtube-square fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "35px",
                  marginTop: "-6px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "16px" }}>
              Video Ads
            </div>
            <div className="mainhighlight-new">
              <div className="mainhighlight"></div>
            </div>
            <div
              className="mainhighlight-new"
              style={{ color: "white", margin: "0 24px" }}
            >
              NEW!!
            </div>
          </div>
          <div
            onClick={() => setcurrentTable("pushads")}
            id="4"
            className={currenttable === "pushads" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="push_ad_button"
              style={{
                position: "relative",
                transform: "scale(0.8, 0.8)",
              }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{
                  color: "#1173b7",
                  opacity: "0.4",
                  marginTop: "-5px",
                }}
              ></i>

              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "25px",
                  marginTop: "1px",
                  marginLeft: "24px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "25px",
                  marginTop: "5px",
                  marginLeft: "24px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "23px",
                  marginTop: "2px",
                  marginLeft: "24px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "23px",
                  marginTop: "4px",
                  marginLeft: "24px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5.5pt",
                  marginTop: "10px",
                  marginLeft: "17px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "7.5px",
                  marginLeft: "25px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "11px",
                  marginLeft: "25px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "7.5px",
                  marginLeft: "30px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "8px",
                  marginTop: "11px",
                  marginLeft: "30px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "14.5pt",
                  marginTop: "-24px",
                  marginLeft: "58px",
                }}
              ></i>

              <i
                className="fa fa-mobile fa-stack-2x"
                style={{
                  color: "#1173b7",
                  fontSize: "45px",
                  marginLeft: "58px",
                }}
              ></i>

              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "14px",
                  position: "absolute",
                  top: "-41px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "14px",
                  position: "absolute",
                  top: "-37px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "13px",
                  position: "absolute",
                  top: "-40px",
                  left: "58px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "13px",
                  position: "absolute",
                  top: "-38px",
                  left: "58px",
                }}
              ></i>

              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-35px",
                  left: "55px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-36px",
                  left: "60px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-34px",
                  left: "60px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-36px",
                  left: "62px",
                }}
              ></i>
              <i
                className="fa fa-minus fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "5px",
                  position: "absolute",
                  top: "-34px",
                  left: "62px",
                }}
              ></i>
            </span>
            <div style={{ position: "absolute", bottom: "10px" }}>Push Ads</div>
          </div>
          <div
            onClick={() => setcurrentTable("createcontext")}
            id="5"
            className={currenttable === "createcontext" ? "activeee" : ""}
          >
            <span
              className="fa-stack fa-4x"
              id="inject_pop_ad_button"
              style={{
                position: "relative",
                transform: "scale(0.8, 0.8)",
              }}
            >
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "-10px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-2x"
                style={{
                  color: "white",
                  fontSize: "55px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                }}
              ></i>
              <i
                className="fa fa-laptop fa-stack-2x"
                style={{ color: "#1173b7" }}
              ></i>
              <i
                className="fa fa-align-left fa-stack-1x"
                style={{
                  color: "#1173b7",
                  opacity: "0.4",
                  marginTop: "-5px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "28px",
                  position: "absolute",
                  top: "-35px",
                  left: "45px",
                }}
              ></i>
              <i
                className="fa fa-square fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "28px",
                  position: "absolute",
                  top: "-35px",
                  left: "39px",
                }}
              ></i>
              <i
                className="fa fa-image fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "30px",
                  marginTop: "-35px",
                  marginLeft: "42px",
                }}
              ></i>
              <i
                className="fa fa-window-minimize fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "26px",
                  marginTop: "-19px",
                  marginLeft: "-12.7px",
                }}
              ></i>
              <i
                className="fa fa-mail-forward fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "24px",
                  marginTop: "-29px",
                  marginLeft: "10px",
                }}
              ></i>
              <i
                className="fa fa-times-circle-o fa-stack-1x"
                style={{
                  color: "white",
                  fontSize: "10px",
                  marginTop: "-49px",
                  marginLeft: "60px",
                }}
              ></i>
              <i
                className="fa fa-times-circle fa-stack-1x"
                style={{
                  color: "#fc7c7c",
                  fontSize: "10px",
                  marginTop: "-49px",
                  marginLeft: "60px",
                }}
              ></i>
            </span>
            <div
              style={{
                position: "absolute",
                bottom: "1px",
                lineHeight: "12px",
                textAlign: "center",
              }}
            >
              Contextual Pops
              <br />
              <span
                style={{
                  fontSize: "10px",
                  whiteSpace: "nowrap",
                  color: "#1173b7",
                  marginLeft: "5px",
                }}
              >
                (Injection Traffic)
              </span>
            </div>
          </div>
        </div>
        {currenttable === "directads" && <DirectAdTable />}
        {currenttable === "popuptable" && <PopUpAdTable />}
        {currenttable === "inpagepushads" && <InPagePushAds />}
        {currenttable === "nativeads" && <NativeAds />}
        {currenttable === "vedioads" && <VedioAds />}
        {currenttable === "pushads" && <PushAds />}
        {currenttable === "createcontext" && <CreateContext />}

        <center id="ad_select" className="buttonlargetwo">
          <button
            onClick={handleClickNext}
            id="desk_select"
            className="function-button"
          >
            Create Desktop Ad
          </button>
          <button
            onClick={handleMobileCompaingAd}
            id="mob_select"
            className="function-button"
            style={{ margin: "5px" }}
          >
            Create Mobile Ad
          </button>
        </center>
      </div>
    </div>
  );
};

export default Newcompaings;

const DirectAdTable = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Direct navigation traffic from expired links, typos or domains.
            Users are captured and immediately redirected to your landing page,
            in the active window, while browsing. High-intent users and
            exceptional conversion rates!
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription">$0.001</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription">CPV - Cost Per Visitor</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">19,383,962,032</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">Landing Page URL</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" className="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" className="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span className="targetingList">Geographic:</span>
                    <div className="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Context:</span>
                    <div className="targetingList">
                      <li>Run of Network</li>
                      <li>Keywords</li>
                      <li>Brand Names</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Filters:</span>
                    <div className="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Device:</span>
                    <div className="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Environmental:</span>
                    <div className="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
const PopUpAdTable = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Pops are the new browser windows or tabs showing over or under a
            currently viewed page. They appear automatically during the browsing
            session and display your landing page. Drive unmatched awareness
            with high volume quality traffic!
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription">$0.00005</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription">CPV - Cost Per Visitor</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">96,071,645,138</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">Landing Page URL</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span className="targetingList">Geographic:</span>
                    <div className="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Context:</span>
                    <div className="targetingList">
                      <li>Run of Network</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Filters:</span>
                    <div className="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Device:</span>
                    <div className="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Environmental:</span>
                    <div className="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const InPagePushAds = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            In-Page Push ads match the look & feel of the website in which they
            appear and are displayed as an "alert" message which strongly
            captures the attention. Think of a new WhatsApp message alert that
            you receive - as effective as that!
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription"> $0.00005</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription"> CPC - Cost Per Click</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">17,206,583,313</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">
            {" "}
            Text & Image [recommended image size: 300 x 200] + Landing Page URL
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span className="targetingList">Geographic:</span>
                    <div className="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Context:</span>
                    <div className="targetingList">
                      <li>Run of Network</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Filters:</span>
                    <div className="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Device:</span>
                    <div className="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Environmental:</span>
                    <div className="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const NativeAds = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Native ads match the look & feel of the website in which they appear
            and unlike banner ads, they look less like ads and more like part of
            the editorial flow of the page. Expose your content to a natural
            flow of engaged visitors!
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription"> $0.001</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription">CPC - Cost Per Click</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription"> 6,861,674,374</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">
            {" "}
            Text & Image [recommended image size: 300 x 200] + Landing Page URL
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span className="targetingList">Geographic:</span>
                    <div className="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Context:</span>
                    <div className="targetingList">
                      <li>Run of Network</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Filters:</span>
                    <div className="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Device:</span>
                    <div className="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Environmental:</span>
                    <div className="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const VedioAds = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Video ads are launched before the start of the main video on the
            site (pre-roll)
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription">$0.2 CPM</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription">CPM</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">Dynamic</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">
            {" "}
            Video Ads. Recommended dimensions 1920 x 1080, MOV/MP4, Max size
            20MB + Landing Page URL
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span className="targetingList">Geographic:</span>
                    <div className="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Context:</span>
                    <div class="targetingList">
                      <li>Run of Network</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Filters:</span>
                    <div class="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Device:</span>
                    <div class="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span className="targetingList">Environmental:</span>
                    <div class="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const PushAds = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Push ads are native ads that are sent directly to the users'
            devices, regardless of their browsing session, displayed as an
            "alert" message which strongly captures the attention. Think of a
            new WhatsApp message alert that you receive - as effective as that!
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription"> $0.001</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription"> CPC - Cost Per Click</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">8,006,135,148</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription">
            {" "}
            Text & Image [recommended image size: 192 x 192] + Landing Page URL
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription">Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span class="targetingList">Geographic:</span>
                    <div class="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Context:</span>
                    <div class="targetingList">
                      <li>Run of Network</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Filters:</span>
                    <div class="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Device:</span>
                    <div class="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Environmental:</span>
                    <div class="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const CreateContext = () => {
  return (
    <table
      cellpadding="4"
      cellspacing="8"
      border="0"
      className="TABLE_STYLE adTypes"
      id="ad_info"
    >
      <tbody>
        <tr className="tritem">
          <td className="featureTypes">Ad's Description</td>
          <td className="featureDescription">
            Contextual Pops (Injection Traffic) are injected by browser toolbars
            and extensions and are triggered by domain names or keywords. Ads
            are injected as pop ads when the user types in a URL and/or search a
            keyword. ANY domain name can be targeted and the more popular it is
            - the more traffic will be triggered. Injection Traffic is Great for
            e-commerce, travel and any merchant-to-merchant campaigns.
          </td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Budget</td>
          <td className="featureDescription">$5 Minimum</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Minimum Bid</td>
          <td className="featureDescription">$0.00005</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Model</td>
          <td className="featureDescription">CPV - Cost Per Visitor</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Daily Impressions</td>
          <td className="featureDescription">96,071,645,138</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Creative</td>
          <td className="featureDescription"> Landing Page URL</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Traffic Type</td>
          <td className="featureDescription">Mainstream / Adult</td>
        </tr>
        <tr className="tritem">
          <td className="featureTypes">Ad Platform</td>
          <td className="featureDescription"> Desktop / Mobile</td>
        </tr>
        <tr>
          <td valign="top" class="featureTypes">
            Targeting
          </td>
          <td className="featureDescription targetingContainer">
            <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
              <tbody>
                <tr>
                  <td className="targetingColumn">
                    <span class="targetingList">Geographic:</span>
                    <div class="targetingList">
                      <li>Country</li>
                      <li>Region</li>
                      <li>State</li>
                      <li>City</li>
                      <li>Go Local - by Zip</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Context:</span>
                    <div class="targetingList">
                      <li>Keywords</li>
                      <li>Domains</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Filters:</span>
                    <div class="targetingList">
                      <li>Quality</li>
                      <li>Day Parting</li>
                      <li>Freq Cap</li>
                      <li>SubID</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Device:</span>
                    <div class="targetingList">
                      <li>Operating System</li>
                      <li>Browser</li>
                    </div>
                  </td>
                  <td className="targetingColumn">
                    <span class="targetingList">Environmental:</span>
                    <div class="targetingList">
                      <li>Connection Type</li>
                      <li>ISP</li>
                      <li>Carrier</li>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
