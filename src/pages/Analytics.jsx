import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Anlalytics.css";
import axios from "axios";
import moment from "moment";
import ReserverCalender from "../components/ReserverCalender";
const Analytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [currentTab, setCurrentTab] = useState("daily");
  const [loading, setLoading] = useState(false);
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
  const [campaignNames, setCampaignNames] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  // Function to fetch campaign names from the backend API
  const handleChange = (event) => {
    setSelectedCampaign(event.target.value);
  };
  const fetchCampaignNames = async () => {
    try {
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/analytics/fetchcampaignnames/analytics"
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
  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/analytics",
        {
          params: {
            startDate,
            endDate,
            selectedCampaign,
          },
        }
      );

      // Ensure response contains an array
      if (!response.data || !Array.isArray(response.data)) {
        console.error("Unexpected API response:", response.data);
        setLoading(false);
        return;
      }

      // Sort data by date (latest first)
      const sortedData = response.data.sort(
        (a, b) => new Date(b.Date) - new Date(a.Date) // Convert to Date objects before comparison
      );

      console.log(
        "Sorted Analytics Data:",
        sortedData.map((item) => item.Date)
      ); // Debugging log

      setAnalytics(sortedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching analytics:", error.message);
      setLoading(false);
    }
  };
  // Hourly ApI here is that
  const fetchAnalyticsHourly = async () => {
    try {
      setLoading(true);
      // Convert date format from MM/DD/YYYY to YYYY-MM-DD
      const formattedStartDate = moment(startDate, "MM/DD/YYYY").format(
        "YYYY-MM-DD"
      );
      const formattedEndDate = moment(endDate, "MM/DD/YYYY").format(
        "YYYY-MM-DD"
      );
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/analytics/getAnalyticsByDateRange",
        {
          params: {
            startDate: formattedStartDate, // ✅ Correct
            endDate: formattedEndDate, // ✅ Correct
            campaignname: selectedCampaign,
          },
        }
      );

      // Ensure response contains an array
      if (!response.data || !Array.isArray(response.data)) {
        console.error("Unexpected API response:", response.data);
        setLoading(false);
        return;
      }

      // Sort data by date (latest first)
      const sortedData = response.data.sort(
        (a, b) => new Date(b.Date) - new Date(a.Date) // Convert to Date objects before comparison
      );

      console.log(
        "Sorted Analytics Data:",
        sortedData.map((item) => item.Date)
      ); // Debugging log

      setHourlyData(sortedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hourly analytics:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  useEffect(() => {
    fetchAnalyticsHourly();
  }, [startDate, endDate, selectedCampaign]); // ✅ Now runs when startDate or endDate changes
  const handleGenreateCampaings = () => {
    fetchAnalytics();
  };
  const calculateTotal = (field) => {
    return analytics.reduce((acc, curr) => {
      // Remove commas from the value
      const value = curr[field]?.replace(/,/g, "") || "0";
      return acc + parseFloat(value);
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

  const formatNumberWithCommas = (number) => {
    return parseFloat(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const calculateMaxWinRate = () => {
    // Iterate through the analytics data to find the maximum win rate
    return analytics.reduce((max, curr) => {
      // Remove commas and parse as float, default to 0 if not present
      const value = parseFloat(curr.WinRate?.replace(/,/g, "") || "0");
      return value > max ? value : max;
    }, 0);
  };

  return (
    <div className="analytics-container">
      <Header routename="Analytics" />
      <div className="analytics-body-container">
        <div id="page">
          <div className="tab-menu">
            <div className="tab" onClick={() => setCurrentTab("daily")}>
              <div>Daily</div>
            </div>
            <div className="tab" onClick={() => setCurrentTab("hourly")}>
              <div>Hourly</div>
            </div>
            <div className="tab" onClick={() => setCurrentTab("subid")}>
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
          {/* Start from here  */}
          {currentTab === "daily" && (
            <div>
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
                                  style={{
                                    float: "left",
                                    paddingRight: "12px",
                                  }}
                                >
                                  <span className="bdv_000000_Text_10">
                                    Date Range: (Min date: 09/01/2023)
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
                                      onChange={(e) =>
                                        setTimeFrame(e.target.value)
                                      }
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
                                      <option value="7">
                                        Select Date Range
                                      </option>
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
                                          <ReserverCalender
                                            selectedDate={startDate}
                                            setSelectedDate={setStartDate}
                                            onClose={() =>
                                              setshowstartdatepicker(false)
                                            }
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
                                          onChange={(e) =>
                                            setEndDate(e.target.value)
                                          }
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
                                          <ReserverCalender
                                            selectedDate={endDate}
                                            setSelectedDate={setEndDate}
                                            onClose={() =>
                                              setshowendtdatepicker(false)
                                            }
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
                                    <option value="">
                                      -- Select a Campaign --
                                    </option>
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
                                    style={{
                                      height: "23px",
                                      marginLeft: "10px",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{ float: "left", marginLeft: "15px" }}
                                >
                                  <span className="bdv_000000_Text_10">
                                    &nbsp;
                                  </span>
                                  <br />
                                  <input
                                    className="dailyactivitygeneratebutton"
                                    id="content-button"
                                    type="submit"
                                    name="Create_button"
                                    onClick={handleGenreateCampaings}
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
                        <tr
                          className="work_line"
                          style={{ lineHeight: "45px" }}
                        >
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
                      //
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
                        <b>
                          {formatNumberWithCommas(
                            calculateTotal("BidRequest").toFixed(2)
                          )}
                        </b>
                      </td>
                      <td
                        valign="top"
                        style={{
                          paddingLeft: "5px",
                          width: "10%",
                          textAlign: "right",
                        }}
                      >
                        <b>
                          {formatNumberWithCommas(
                            calculateTotal("Vistis").toFixed(2)
                          )}
                        </b>
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
                        <b>
                          {formatNumberWithCommas(
                            calculateMaxWinRate().toFixed(2)
                          )}
                          %
                        </b>
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
                        <b>
                          $
                          {formatNumberWithCommas(
                            calculateTotal("Cost").toFixed(2)
                          )}
                        </b>
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
                        <b>
                          $
                          {formatNumberWithCommas(
                            calculateTotal("CPC").toFixed(4)
                          )}
                        </b>
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
          )}
          {/* Endhere */}
          {currentTab === "hourly" && (
            <div>
              <div id="page" class="snipcss-j7wog">
                <form method="post" name="report_form">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="5"
                  >
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
                                    <div id="style-DrY9P" class="style-DrY9P">
                                      <span class="bdv_000000_Text_10">
                                        Date Range:
                                      </span>
                                      <br />

                                      <div id="style-Ltpt9" class="style-Ltpt9">
                                        <select
                                          name="statistic_optionnnn"
                                          class="date_picker_item style-Rzczs"
                                          id="style-Rzczs"
                                        >
                                          <option value="6">2 Days </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div id="style-cF2AF" class="style-cF2AF">
                                      <span class="bdv_000000_Text_10">
                                        Filter by Ad:
                                      </span>
                                      <br />
                                      <select
                                        name="Selected_Content"
                                        id="style-1U7y1"
                                        class="style-1U7y1"
                                      >
                                        <option value={selectedCampaign}>
                                          {selectedCampaign}
                                        </option>
                                      </select>
                                    </div>
                                    <div id="style-VGrv6" class="style-VGrv6">
                                      <span class="bdv_000000_Text_10">
                                        &nbsp;
                                      </span>
                                      <br />
                                    </div>
                                    <div id="style-rYWFV" class="style-rYWFV">
                                      <span
                                        class="fa-stack fa-lg"
                                        onmouseover="return escape('Analytics reports are updated approximatly once an hour');"
                                      >
                                        <i
                                          class="fa fa-circle fa-stack-1x style-3dWYd"
                                          id="style-3dWYd"
                                        ></i>
                                        <i
                                          class="fa fa-info-circle fa-stack-1x style-ecDxR"
                                          aria-hidden="true"
                                          id="style-ecDxR"
                                        ></i>
                                      </span>
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
                </form>
                <table border="0" cellspacing="0" cellpadding="2" width="905">
                  <tbody>
                    <tr>
                      <td
                        class="bdv_000000_Text_10 style-GvndM"
                        valign="top"
                        id="style-GvndM"
                      >
                        *
                      </td>
                      <td
                        class="bdv_000000_Text_10 style-i8Xdm"
                        valign="top"
                        width="100%"
                        id="style-i8Xdm"
                      >
                        {" "}
                        Analytics reports are updated{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  width="100%"
                  border="0"
                  id="style-h9xrX"
                  class="style-h9xrX"
                >
                  <tbody>
                    <tr>
                      <td width="100%" colspan="3">
                        <table
                          border="0"
                          width="100%"
                          class="main_table_style"
                          id="campaignsTable"
                        >
                          <thead id="head_ids">
                            <tr>
                              <th
                                valign="top"
                                id="style-6Vxg3"
                                class="style-6Vxg3"
                              >
                                Date
                              </th>
                              <th
                                valign="top"
                                id="style-4n4Ge"
                                class="style-4n4Ge"
                              >
                                Hour (UTC)
                              </th>
                              <th
                                valign="top"
                                nowrap=""
                                id="style-tisAH"
                                class="style-tisAH"
                              >
                                Visits
                              </th>
                              <th
                                valign="top"
                                id="style-7jyTr"
                                class="style-7jyTr"
                              >
                                CPC
                              </th>
                              <th
                                valign="top"
                                id="style-jA7Cm"
                                class="style-jA7Cm"
                              >
                                Cost
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {hourlyData?.map((item) => (
                              <tr
                                bgcolor="#FFFFFF"
                                class="work_line style-txI4o"
                                onclick="(this.className == 'work_line')?this.className = 'active_work_line':this.className = 'work_line'"
                                id="style-txI4o"
                              >
                                <td
                                  valign="top"
                                  width="5%"
                                  nowarp=""
                                  id="style-9omeT"
                                  class="style-9omeT"
                                >
                                  {item?.Date}
                                </td>
                                <td
                                  valign="top"
                                  align="right"
                                  width="5%"
                                  nowarp=""
                                  id="style-2VEwH"
                                  class="style-2VEwH"
                                >
                                  {" "}
                                  {item?.HourUTC}
                                </td>
                                <td
                                  valign="top"
                                  align="right"
                                  id="style-Et1kq"
                                  class="style-Et1kq"
                                >
                                  {item?.Visits}
                                </td>
                                <td
                                  valign="top"
                                  align="right"
                                  nowrap=""
                                  id="style-oE8NV"
                                  class="style-oE8NV"
                                >
                                  ${item?.CPC}
                                </td>
                                <td
                                  valign="top"
                                  align="right"
                                  nowrap=""
                                  id="style-2WNKn"
                                  class="style-2WNKn"
                                >
                                  ${item?.Cost}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <a
                  id="dl_csv"
                  onclick="get_csv()"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="https://my.bidvertiser.com/BidVertiser/Images/excel.gif"
                    hspace="5"
                    title="Export as .csv file"
                    align="absmiddle"
                    width="12"
                    id="style-GaAo8"
                    class="style-GaAo8"
                  />
                  <u>Export</u>
                </a>
              </div>
            </div>
          )}
          {currentTab === "subid" && (
            <div>
              <td class="snipcss-CL729">
                <div id="style-3iceP" class="style-3iceP">
                  <div id="style-JxUNp" class="style-JxUNp">
                    <span class="bdv_000000_Text_10">
                      Date Range: (Min date: 08/01/2024, Max range 1 month)
                    </span>
                    <br />
                    <div id="style-myvGq" class="style-myvGq">
                      <select
                        name="statistic_option"
                        class="date_picker_item style-1ExLV"
                        onchange="setTimeFrame(this.value)"
                        id="style-1ExLV"
                      >
                        <option value="1" selected="">
                          Today{" "}
                        </option>
                        <option value="2">Yesterday </option>
                        <option value="3">Last 7 days </option>
                        <option value="4">This Month </option>
                        <option value="5">Last Month </option>
                        <option value="6">Last 30 days </option>
                        <option value="7">Select Date Range </option>
                      </select>
                      <input
                        type="text"
                        id="Start_Date"
                        onchange="$('#End_Date').datepicker('option', 'maxDate', addMonths(this.value, 1));"
                        name="Start_Date"
                        size="8"
                        onfocus="document.forms.report_form.statistic_option.selectedIndex=6;"
                        value="02/17/2025"
                        class="hasDatepicker style-UcFi6"
                      />
                      <i
                        class="fa fa-calendar style-yWUgr"
                        aria-hidden="true"
                        onclick="document.getElementById('Start_Date').focus();"
                        id="style-yWUgr"
                      ></i>
                      <input
                        type="text"
                        id="End_Date"
                        name="End_Date"
                        size="8"
                        onfocus="document.forms.report_form.statistic_option.selectedIndex=6;"
                        value="02/17/2025"
                        class="hasDatepicker style-mjgJQ"
                      />
                      <i
                        class="fa fa-calendar style-5HPx6"
                        aria-hidden="true"
                        onclick="document.getElementById('End_Date').focus();"
                        id="style-5HPx6"
                      ></i>
                    </div>
                  </div>
                  <div id="style-JZaGU" class="style-JZaGU">
                    <span class="bdv_000000_Text_10">Filter by Ad:</span>
                    <br />
                    <select
                      name="Selected_Content"
                      class="form-field style-zoIqG"
                      id="style-zoIqG"
                    >
                      <option value="783397" selected="">
                        UNI 3{" "}
                      </option>
                      <option value="783900">Uni 4 [Deleted] </option>
                      <option value="783468">Uni Test 3 </option>
                      <option value="783296">UniBot Solar </option>

                      <option value="755621">new 1 [Deleted] </option>
                      <option value="799817">sdas </option>
                      <option value="800122">testing [Deleted] </option>
                    </select>
                  </div>
                  <div id="style-U3nFg" class="style-U3nFg">
                    <span
                      class="bdv_000000_Text_10"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Order by:
                    </span>
                    <br />
                    <select
                      name="orderBy"
                      class="form-field style-8BBki"
                      id="style-8BBki"
                    >
                      <option value="Clicks" selected="">
                        Visits{" "}
                      </option>
                      <option value="cost">Cost </option>
                      <option value="Conversions">Conversions </option>
                      <option value="Requests">Requests </option>
                    </select>
                  </div>
                  <div id="style-pbLtS" class="style-pbLtS">
                    <span
                      class="bdv_000000_Text_10"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Min:
                      <span
                        class="fa-stack fa-lg style-f2AY7"
                        onmouseover="return escape('This report may be heavy to load when showing all Subids. We recommend filtering out the smaller ones by setting to show at least 10 clicks');"
                        id="style-f2AY7"
                      >
                        <i
                          class="fa fa-circle fa-stack-1x style-li4yI"
                          id="style-li4yI"
                        ></i>
                        <i
                          class="fa fa-info-circle fa-stack-1x style-o6dra"
                          aria-hidden="true"
                          id="style-o6dra"
                        ></i>
                      </span>
                    </span>
                    <br />
                    <input
                      type="Text"
                      name="minGroupBy"
                      id="minGroupByID"
                      value="1"
                      size="7"
                      class="form-field style-iD758"
                    />
                  </div>
                  <div id="style-jNCsd" class="style-jNCsd">
                    <span
                      class="bdv_000000_Text_10"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Filter by Source ID:
                    </span>
                    <br />
                    <input
                      type="Text"
                      placeholder="Source ID"
                      name="subID"
                      value=""
                      size="10"
                      class="form-field style-yr3QD"
                      id="style-yr3QD"
                    />
                  </div>
                  <div id="style-Jj7Fw" class="style-Jj7Fw">
                    <span
                      class="bdv_000000_Text_10"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      Display:
                    </span>
                    <br />
                    <select
                      name="showBlackListedSubIDs"
                      class="form-field style-6OP99"
                      onchange="disableSelection();"
                      id="style-6OP99"
                    >
                      <option value="Active" selected="">
                        Active{" "}
                      </option>
                      <option value="Blacklisted">Blacklisted </option>
                    </select>
                  </div>
                  <div id="style-4xEer" class="style-4xEer">
                    <span class="bdv_000000_Text_10">&nbsp;</span>
                    <br />
                    <input
                      id="content-button"
                      type="button"
                      name="Create_button"
                      value="Generate"
                      onclick="doSubmitFunc2(document.location.href);"
                    />
                  </div>
                  <input type="hidden" name="createSubIDReport" value="true" />
                </div>
              </td>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
