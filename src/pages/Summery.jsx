import React, { useEffect, useState } from "react";
import "../styles/Summery.css";
import Header from "../components/Header";
import axios from "axios";
import $ from "jquery"; // Import jQuery
import "jquery-ui/ui/widgets/datepicker"; // Import datepicker widget

const Summery = () => {
  const [showdatepicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState("03/28/2024");
  const [endDate, setEndDate] = useState("03/28/2024");
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const $ = window.$;
    const jQuery = window.jQuery;

    $(function () {
      $("#datepicker").datepicker();
    });
  }, []);
  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const response = await axios.get("https://bidvertiserserver.vercel.app/api/summary");
        setSummaries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching summaries:", error.message);
      }
    };

    fetchSummaries();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="summbermainconainer">
      <Header routename="Summary" />
      <div className="summaryBody">
        <div id="page">
          <form
            action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_summary.dbm?ID_Token=JSL0D100459CNPF&amp;AID=694693"
            method="post"
            name="report_form"
          >
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
                                    className="myselesele"
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
                                      size="8"
                                      value={startDate}
                                      style={{
                                        all: "unset",
                                        borderLeft: "1px dashed grey",
                                        padding: "0 40px 0 10px",
                                      }}
                                      type="text"
                                      id="datepicker"
                                    />
                                  </p>

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
                                    onClick={() =>
                                      document
                                        .getElementById("Start_Date")
                                        .focus()
                                    }
                                  ></i>

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
                                      size="8"
                                      value={endDate}
                                      style={{
                                        all: "unset",
                                        borderLeft: "1px dashed grey",
                                        padding: "0 40px 0 10px",
                                      }}
                                      type="text"
                                      id="datepickerr"
                                    />
                                  </p>

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
                                  value="Generate"
                                  style={{ marginTop: "-4px" }}
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
          </form>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              bgcolor="#FFFFFF"
            >
              <tbody>
                <tr>
                  <td width="100%">
                    <table
                      border="0"
                      cellpadding="2"
                      cellspacing="1"
                      width="100%"
                      bgcolor="#CED8E2"
                      className="bdv_000000_Text_10"
                    >
                      <tbody>
                        <tr bgcolor="#FFFFFF">
                          <td align="center" rowspan="2" valign="top">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              Start Date
                            </b>
                          </td>
                          <td align="center" rowspan="2" valign="top">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              End Date
                            </b>
                          </td>
                          <td align="center" colspan="3" valign="top">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              Total
                            </b>
                          </td>
                          <td align="center" rowspan="2" valign="top">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              CPC
                            </b>
                          </td>
                        </tr>
                        <tr bgcolor="#FFFFFF">
                          <td align="center">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              Ad Requests
                            </b>
                          </td>
                          <td align="center">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              Visits
                            </b>
                          </td>
                          <td align="center">
                            <b style={{ color: "#505050", fontSize: "12px" }}>
                              Cost
                            </b>
                          </td>
                        </tr>
                        {summaries?.map((summary) => (
                          <tr key={summary._id} bgcolor="#FFFFFF">
                            <td valign="top">
                              {formatDate(summary.startdate)}
                            </td>
                            <td valign="top">{formatDate(summary.endDate)}</td>
                            <td valign="top">{summary.AdRequests}</td>
                            <td valign="top">{summary.Visits}</td>
                            <td valign="top">{`$ ${summary?.Cost}`}</td>
                            <td valign="top">{`$ ${summary?.CPC}`}</td>
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
          )}

          <a id="dl_csv" onClick="get_csv()" className="export-link">
            <img
              src="https://my.bidvertiser.com/BidVertiser/Images/excel.gif"
              hspace="5"
              style={{ marginBottom: "1px" }}
              title="Export as .csv file"
              align="absmiddle"
              width="12"
            />
            <u>Export</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summery;
