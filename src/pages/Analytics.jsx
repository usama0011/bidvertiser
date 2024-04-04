import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Anlalytics.css";
import axios from "axios";
import Test from "./Test";

const Analytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showstartdatePicker, setshowstartdatepicker] = useState(false);
  const [showendtdatePicker, setshowendtdatepicker] = useState(false);
  const [startDate, setStartDate] = useState("03/28/2024");
  const [endDate, setEndDate] = useState("03/28/2024");
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          "https://bidvertiserserver.vercel.app/api/analytics"
        );
        setAnalytics(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);
  const calculateTotal = (field) => {
    return analytics.reduce((acc, curr) => {
      return acc + parseFloat(curr[field]);
    }, 0);
  };
  const handlestartDateClick = () => {
    if (showendtdatePicker) {
      setshowendtdatepicker(false);
    }
    setshowstartdatepicker((prev) => !prev);
  };
  console.log(showstartdatePicker);
  const hanleEndDateclick = () => {
    if (showstartdatePicker) {
      setshowstartdatepicker(false);
    }
    setshowendtdatepicker((prev) => !prev);
  };
  return (
    <div className="analytics-container">
      <Header routename="Analytics" />
      <div className="analytics-body-container">
        <div id="page">
          <div className="tab-menu">
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_ads_details_tabs.dbm?groupBy=daily&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Daily</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_ads_hourly.dbm?groupBy=daily&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Hourly</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Sources_tabs.dbm?groupBy=sub_ID&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Subid</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=Device&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Device</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=OS_Name&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>OS</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=Browser_name&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Browser</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=connection_type&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Connection</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=country&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Country</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=region&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Region</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=city&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>City</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=lang&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>Language</div>
            </div>
            <div
              className="tab"
              onClick={() =>
                doSubmitFunc(
                  "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_Tabs.dbm?groupBy=client_isp&amp;ID_Token=R150TN08K92EGQ9"
                )
              }
            >
              <div>ISP</div>
            </div>
          </div>
          <table width="100%" border="0" cellspacing="0" cellpadding="5">
            <tbody>
              <tr>
                <td>
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="1"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{ float: "left", paddingRight: "12px" }}
                            >
                              <span className="bdv_000000_Text_10">
                                Date Range: (Min date: 09/01/2023, Max range 2
                                months)
                              </span>
                              <br />
                              <div
                                style={{
                                  display: "flex",
                                  fontSize: "13px",
                                  width: "425px",
                                  border: "1px solid lightgrey",
                                  boxShadow:
                                    "inset 0 0 10px 1px rgb(0 0 0 / 5%)",
                                  background: "rgba(255,255,255,1)",
                                  backgroundPosition: "0 0",
                                  fontFamily: "Open Sans, sans-serif",
                                  minHeight: "25px",
                                  outline: "none",
                                  color: "#505050",
                                }}
                              >
                                <select
                                  name="statistic_option"
                                  className="eeeeeeeee"
                                  onChange={(e) => setTimeFrame(e.target.value)}
                                  style={{
                                    all: "unset",
                                    textAlign: "left",
                                    paddingLeft: "10px",
                                    WebkitAppearance: "none",
                                    lineHeight: "28px",
                                    height: "28px",
                                    width: "195px",
                                    MozAppearance: "none",
                                    backgroundPosition: "right",
                                    backgroundImage:
                                      'url("https://my.bidvertiser.com/BidVertiser/Images/select_FF.png")',
                                    backgroundRepeat: "no-repeat",
                                    border: "1px solild lightgrey",
                                    outline: "none",
                                  }}
                                >
                                  <option value="1" selected>
                                    Today
                                  </option>
                                  <option value="2">Yesterday</option>
                                  <option value="3">Last 7 days</option>
                                  <option value="4">This Month</option>
                                  <option value="5">Last Month</option>
                                  <option value="6">Last 30 days</option>
                                  <option value="7">Select Date Range</option>
                                </select>
                                <div className="maindatecontainermain">
                                <p
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    className="hasDatepicker"
                                    onFocus={() =>
                                      (document.forms.report_form.statistic_option.selectedIndex = 6)
                                    }
                                    onClick={handlestartDateClick}
                                    size="8"
                                    value={startDate}
                                    onChange={(e) =>
                                      setStartDate(e.target.value)
                                    }
                                    style={{
                                      all: "unset",
                                      borderLeft: "1px dashed grey",
                                      padding: "0 40px 0 10px",
                                    }}
                                    type="text"
                                    id="datepicker"
                                  />
                                </p>
                                {showstartdatePicker && (
                                  <div className="ablutecatecontainer">
                                    <Test
                                      selectedDate={startDate}
                                      setSelectedDate={setStartDate}
                                    />
                                  </div>
                                )}
                              </div>
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                                style={{
                                  cursor: "pointer",
                                  margin: "2px 10px 0 -25px",
                                  fontSize: "16px",
                                  color: "var(--lightGreen)",
                                  padding: "3px",
                                }}
                                // Handle click event
                              ></i>
                              <div className="maindatecontainermainn">
                                <p
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    className="hasDatepicker"
                                    onFocus={() =>
                                      (document.forms.report_form.statistic_option.selectedIndex = 6)
                                    }
                                    onClick={hanleEndDateclick}
                                    size="8"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    style={{
                                      all: "unset",
                                      borderLeft: "1px dashed grey",
                                      padding: "0 40px 0 10px",
                                    }}
                                    type="text"
                                  />
                                </p>
                                {showendtdatePicker && (
                                  <div className="ablutecatecontainerr">
                                    <Test
                                      selectedDate={endDate}
                                      setSelectedDate={setEndDate}
                                    />
                                  </div>
                                )}
                              </div>
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                                style={{
                                  cursor: "pointer",
                                  margin: "2px 10px 0 -25px",
                                  fontSize: "16px",
                                  color: "var(--lightGreen)",
                                  padding: "3px",
                                }}
                              ></i>
                              </div>
                            </div>
                            <div style={{ float: "left" }}>
                              <span className="bdv_000000_Text_10">
                                Filter by Campaign:
                              </span>
                              <br />
                              <select
                                name="Selected_Content"
                                style={{
                                  minWidth: "277px",
                                  maxWidth: "450px",
                                  height: "30px",
                                }}
                                onChange={(e) => {
                                  if (e.target.value === "All")
                                    document.getElementById(
                                      "extnd"
                                    ).style.display = "block";
                                  else {
                                    document.getElementById(
                                      "extnd"
                                    ).style.display = "none";
                                    document.getElementById(
                                      "extended_report"
                                    ).checked = false;
                                  }
                                }}
                              >
                                <option value="All">All Ads</option>
                                <option value="783397">UNI 3</option>
                                <option
                                  value="783900"
                                  style={{ color: "fc7c7c" }}
                                >
                                  Uni 4 [Deleted]
                                </option>
                                <option value="783468">Uni Test 3</option>
                                <option value="783296">UniBot Solar</option>
                                <option
                                  value="799822"
                                  style={{ color: "fc7c7c" }}
                                >
                                  Usama Ahmad [Deleted]
                                </option>
                                <option
                                  value="799823"
                                  style={{ color: "fc7c7c" }}
                                >
                                  Usama Ahmad [Deleted]
                                </option>
                                <option value="800106">Usama Ahmad</option>
                                <option
                                  value="755621"
                                  style={{ color: "fc7c7c" }}
                                >
                                  new 1 [Deleted]
                                </option>
                                <option value="799817">sdas</option>
                              </select>
                            </div>
                            <div
                              style={{ float: "left", display: "block" }}
                              id="extnd"
                            >
                              <span className="bdv_000000_Text_10">
                                Extended Report
                              </span>
                              <br />
                              <input
                                type="checkbox"
                                id="extended_report"
                                name="extended_report"
                                style={{ height: "23px", marginLeft: "10px" }}
                              />
                            </div>
                            <div style={{ float: "left", marginLeft: "15px" }}>
                              <span className="bdv_000000_Text_10">&nbsp;</span>
                              <br />
                              <input
                                className="dailyactivitygeneratebutton"
                                id="content-button"
                                type="submit"
                                name="Create_button"
                                value="Generate"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <div className="anaylitcstalble" style={{ marginBottom: "5px" }}>
            <table className="main_table_style" width="100%" border="0">
              <thead>
                <tr
                  style={{
                    border: "0",
                    fontSize: "13px",
                    fontWeight: "bold",
                    padding: "0",
                    lineHeight: "17px",
                  }}
                >
                  <td
                    colspan="6"
                    align="center"
                    style={{ paddingLeft: "14px" }}
                  ></td>
                  <td
                    align="center"
                    style={{
                      paddingLeft: "4px",
                      borderBottom: "thin solid rgba(0, 0, 0, 0.15)",
                      color: "#1173b7",
                    }}
                    colspan="9"
                  >
                    Conversions
                  </td>
                </tr>
              </thead>
              <thead id="head_ids">
                <tr>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      paddingLeft: "14px",
                      width: "10%",
                      textAlign: "left",
                    }}
                  >
                    Date
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "10%",
                      textAlign: "right",
                    }}
                  >
                    Bid Requests
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "10%",
                      textAlign: "right",
                    }}
                    nowrap
                  >
                    Visits
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "10%",
                      textAlign: "right",
                    }}
                  >
                    Win Rate
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "10%",
                      textAlign: "right",
                    }}
                  >
                    Cost
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "10%",
                      textAlign: "right",
                    }}
                    nowrap
                  >
                    CPC
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "8%",
                      textAlign: "right",
                    }}
                  >
                    Conversions
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "8%",
                      textAlign: "right",
                    }}
                  >
                    Rate
                  </th>
                  <th
                    valign="top"
                    style={{
                      fontSize: "12px",
                      color: "#1173b7",
                      width: "8%",
                      textAlign: "right",
                    }}
                  >
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {analytics?.length > 0 ? (
                  analytics?.map((analytic) => (
                    <tr className="work_line" style={{ lineHeight: "45px" }}>
                      <td
                        valign="top"
                        style={{ paddingLeft: "15px", width: "10%" }}
                      >
                        {analytic?.Date}
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                      >
                        {analytic.BidRequest}
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                      >
                        {analytic.Vistis}
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                        nowrap
                      >
                        {analytic.WinRate}%
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                        nowrap
                      >
                        ${analytic.Cost}
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                        nowrap
                      >
                        ${analytic.CPC}
                      </td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  ))
                ) : (
                  <tr>Loading...</tr>
                  // <tr>
                  //   <div className="activity-log">
                  //     <div className="no-activity">
                  //       No activity logged during the chosen time frame.
                  //     </div>
                  //   </div>
                  // </tr>
                )}
              </tbody>
              <tbody>
                <tr style={{ lineHeight: "45px" }}>
                  <td
                    valign="top"
                    style={{ paddingLeft: "15px", width: "10%" }}
                  >
                    <b>Total</b>
                  </td>
                  <td
                    valign="top"
                    style={{
                      paddingLeft: "5px",
                      width: "10%",
                      textAlign: "right",
                    }}
                  >
                    <b>{calculateTotal("BidRequest").toFixed(2)}</b>
                  </td>
                  <td
                    valign="top"
                    style={{
                      paddingLeft: "5px",
                      width: "10%",
                      textAlign: "right",
                    }}
                  >
                    <b>{calculateTotal("Vistis").toFixed(2)}</b>
                  </td>
                  <td
                    valign="top"
                    style={{
                      paddingLeft: "5px",
                      width: "10%",
                      textAlign: "right",
                    }}
                    nowrap
                  >
                    <b>0.59%</b>
                  </td>
                  <td
                    valign="top"
                    style={{
                      paddingLeft: "5px",
                      width: "10%",
                      textAlign: "right",
                    }}
                    nowrap
                  >
                    <b>${calculateTotal("Cost").toFixed(2)}</b>
                  </td>
                  <td
                    valign="top"
                    style={{
                      paddingLeft: "5px",
                      width: "10%",
                      textAlign: "right",
                    }}
                    nowrap
                  >
                    <b>${calculateTotal("CPC").toFixed(4)}</b>
                  </td>
                  <td
                    style={{
                      paddingLeft: "5px",
                      textAlign: "right",
                      width: "8%",
                    }}
                    align="right"
                  >
                    <strong>0</strong>
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
