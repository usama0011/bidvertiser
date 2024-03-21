import React from "react";
import Header from "../components/Header";
import "../styles/NewCampaing.css";
const Newcompaings = () => {
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
          {/* <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                GEO
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                Targeting
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                Quality
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                Bid
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                Creative
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:85px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:13px;font-size:13px;color:grey">
                Budget
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div style="display:flex;margin-right:10px;">
            <div style="position:relative;width:160px;height:25px;z-index:2;text-align:center;background-color:#e7e8ea;">
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <span style="line-height:25px;padding-left:20px;font-size:13px;white-space:nowrap;color:grey">
                Advanced Settings
                <span
                  class="fa-stack fa-lg"
                  onmouseover="return escape('Optional Settings:<br><br><div style=width:200px;padding-left:20px><li>OS / Browser<br><li>Carrier Targeting<br><li>Quality Score<br><li>Day Parting<br><li>Subid Blacklisting<br><li>Subid Whitelisting<br><li>Bid Override<br><li>Bid Automation</div>')"
                  style="height:0.5em;line-height:4px;"
                >
                  <i
                    class="fa fa-circle fa-stack-1x"
                    style="color:white;font-size:14px;-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: white;padding:1px;"
                  ></i>
                  <i
                    class="fa fa-info-circle fa-stack-1x"
                    aria-hidden="true"
                    style="color:#5d86c9;font-size:14px;padding:1px;"
                  ></i>
                </span>
              </span>
            </div>
            <div>
              <i
                class="fa fa-caret-right"
                style="padding:0;position:relative;left:-2px;top:0;line-height:25px;font-size:41px;z-index:1;color:#e7e8ea;background-color:white"
                aria-hidden="true"
              ></i>
            </div>
          </div> */}
        </div>
        <br />
        <p className="compara">
          Each ad type will direct a different flow of visitors to your promoted
          page. We strongly recommend testing all ad types:
        </p>
        <div class="button-group">
          <div id="1" className="activeee">
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
            <div className="highlight-new">
              <div className="highlight"></div>
            </div>
            <div
              className="highlight-new"
              style={{ color: "white", margin: "1px 12px" }}
            >
              POPULAR
            </div>
          </div>
          <div id="2">
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
          <div id="3">
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
          <div id="4">
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
          <div id="6">
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
          <div id="7">
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
            <div className="highlight-new">
              <div className="highlight"></div>
            </div>
            <div
              className="highlight-new"
              style={{ color: "white", margin: "0 24px" }}
            >
              NEW!!
            </div>
          </div>

          <div id="5">
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
        <table
          cellpadding="4"
          cellspacing="8"
          border="0"
          class="TABLE_STYLE adTypes"
          id="ad_info"
        >
          <tbody>
            <tr className="tritem">
              <td class="featureTypes">Ad's Description</td>
              <td class="featureDescription">
                Direct navigation traffic from expired links, typos or domains.
                Users are captured and immediately redirected to your landing
                page, in the active window, while browsing. High-intent users
                and exceptional conversion rates!
              </td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Daily Budget</td>
              <td class="featureDescription">$5 Minimum</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Minimum Bid</td>
              <td class="featureDescription">$0.001</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Model</td>
              <td class="featureDescription">CPV - Cost Per Visitor</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Daily Impressions</td>
              <td class="featureDescription">19,339,704,928</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Creative</td>
              <td class="featureDescription">Landing Page URL</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Traffic Type</td>
              <td class="featureDescription">Mainstream / Adult</td>
            </tr>
            <tr className="tritem">
              <td class="featureTypes">Ad Platform</td>
              <td class="featureDescription">Desktop / Mobile</td>
            </tr>
            <tr>
              <td valign="top" class="featureTypes">
                Targeting
              </td>
              <td class="featureDescription targetingContainer">
                <table cellpadding="0" cellspacing="0" class="TABLE_STYLE">
                  <tbody>
                    <tr>
                      <td class="targetingColumn">
                        <span class="targetingList">Geographic:</span>
                        <div class="targetingList">
                          <li>Country</li>
                          <li>Region</li>
                          <li>State</li>
                          <li>City</li>
                          <li>Go Local - by Zip</li>
                        </div>
                      </td>
                      <td class="targetingColumn">
                        <span class="targetingList">Context:</span>
                        <div class="targetingList">
                          <li>Run of Network</li>
                          <li>Keywords</li>
                          <li>Brand Names</li>
                        </div>
                      </td>
                      <td class="targetingColumn">
                        <span class="targetingList">Filters:</span>
                        <div class="targetingList">
                          <li>Quality</li>
                          <li>Day Parting</li>
                          <li>Freq Cap</li>
                          <li>SubID</li>
                        </div>
                      </td>
                      <td class="targetingColumn">
                        <span class="targetingList">Device:</span>
                        <div class="targetingList">
                          <li>Operating System</li>
                          <li>Browser</li>
                        </div>
                      </td>
                      <td class="targetingColumn">
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
        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" class="function-button">
            Create Desktop Ad
          </button>
          <button
            id="mob_select"
            class="function-button"
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
