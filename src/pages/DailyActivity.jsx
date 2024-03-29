import React from "react";
import "../styles/DailyActivity.css";
import Header from "../components/Header";
const DailyActivity = () => {
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
                              <input
                                type="text"
                                style={{
                                  all: "unset",
                                  borderLeft: "1px dashed grey",
                                  padding: "0 40px 0 10px",
                                }}
                                id="Start_Date"
                                onChange={() =>
                                  $("#End_Date").datepicker(
                                    "option",
                                    "maxDate",
                                    addMonths(this.value, 2)
                                  )
                                }
                                name="Start_Date"
                                size="8"
                                onFocus={() =>
                                  (document.forms.report_form.statistic_option.selectedIndex = 6)
                                }
                                value="03/28/2024"
                                className="hasDatepicker"
                              />
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
                                  document.getElementById("Start_Date").focus()
                                }
                              ></i>
                              <input
                                type="text"
                                style={{
                                  all: "unset",
                                  borderLeft: "1px dashed grey",
                                  padding: "0 40px 0 10px",
                                }}
                                id="End_Date"
                                name="End_Date"
                                size="8"
                                onFocus={() =>
                                  (document.forms.report_form.statistic_option.selectedIndex = 6)
                                }
                                value="03/28/2024"
                                className="hasDatepicker"
                              />
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
                                  document.getElementById("End_Date").focus()
                                }
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
