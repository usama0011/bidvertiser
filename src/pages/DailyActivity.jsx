import React, { useEffect, useState } from "react";
import "../styles/DailyActivity.css";
import Header from "../components/Header";
import axios from "axios";
import Test from "./Test";

const DailyActivity = () => {
  const [analytics, setAnalytics] = useState([]);
  const [campaignNames, setCampaignNames] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [loading, setLoading] = useState(true);
  const [showstartdatePicker, setshowstartdatepicker] = useState(false);
  const [showendtdatePicker, setshowendtdatepicker] = useState(false);
  const currentDate = new Date();

  // Calculate the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Calculate the last day of the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Format the dates as 'MM/DD/YYYY'
  const formattedStartDate = `${(firstDayOfMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${firstDayOfMonth
    .getDate()
    .toString()
    .padStart(2, "0")}/${firstDayOfMonth.getFullYear()}`;
  const formattedEndDate = `${(lastDayOfMonth.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${lastDayOfMonth
    .getDate()
    .toString()
    .padStart(2, "0")}/${lastDayOfMonth.getFullYear()}`;

  // Set state variables
  const [startDate, setStartDate] = useState(formattedStartDate);
  const [endDate, setEndDate] = useState(formattedEndDate);

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
  const handleChange = (event) => {
    setSelectedCampaign(event.target.value);
  };

  // Function to fetch campaign names from the backend API
  const fetchCampaignNames = async () => {
    try {
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/dailyactivity/fetchcampaignnames/dailiyactivity"
      );
      setCampaignNames(response.data);
    } catch (error) {
      console.error("Error fetching campaign names:", error);
    }
  };

  // Use useEffect to call fetchCampaignNames when the component mounts
  useEffect(() => {
    fetchCampaignNames();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/dailyactivity",
        {
          params: {
            startDate,
            endDate,
          },
        }
      );
      console.log(response.data);
      setAnalytics(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching campaigns:", error.message);
      setLoading(false);
    }
  };
  const handleGenreateCampaings = () => {
    fetchCampaigns();
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);
  return (
    <div className="Dailyactiviycontainer">
      <Header routename="Daily Activity" />
      <div className="dailyactiviybodycontainer">
        <table width="100%" border="0" cellspacing="0" cellpadding="5">
          <tbody>
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="1" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <div style={{ display: "flex" }}>
                          <div style={{ float: "left", paddingRight: "12px" }}>
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
                                boxShadow: "inset 0 0 10px 1px rgb(0 0 0 / 5%)",
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
                                className="myselesele"
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
                              style={{
                                height: "30px",
                                outline: "none",
                              }}
                              id="campaign-select"
                              value={selectedCampaign}
                              onChange={handleChange}
                            >
                              <option value="">-- Select a Campaign --</option>
                              {campaignNames.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
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
                              onClick={handleGenreateCampaings}
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
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No analytics data available
                  </td>
                </tr>
              )}
              <tr style={{ lineHeight: "45px" }}>
                <td valign="top" style={{ paddingLeft: "15px", width: "10%" }}>
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
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="5"
          bgcolor="#FFFFFF"
        >
          <tbody>
            <tr>
              <td width="100%">
                <table
                  border="0"
                  width="100%"
                  className="main_table_style"
                  style={{ marginTop: "15px" }}
                >
                  <tbody>
                    <tr style={{ border: "0", lineHeight: "45px" }}>
                      <td style={{ backgroundColor: "white" }}>
                        <div
                          style={{
                            display: "flex",
                            float: "left",
                            marginLeft: "10px",
                          }}
                        >
                          <div style={{ float: "left", fontSize: "13px" }}>
                            No activity logged during the chosen time frame.
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
      </div>
    </div>
  );
};

export default DailyActivity;
