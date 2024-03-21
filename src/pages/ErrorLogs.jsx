import React from "react";
import "../styles/ErrorLogs.css";
import Header from "../components/Header";
const ErrorLogs = () => {
  return (
    <div className="errorLogContainer">
      <Header routeName="Global Postback Errors" />
      <div className="errorlogbodymain">
        <div style={{ float: "left", paddingRight: "12px" }}>
          <span class="bdv_000000_Text_10">Date Range:</span>
          <br />
          <div className="errorlogsselects">
            <select
              className="errorlogsselect"
              name="statistic_option"
              class="date_picker_item"
              onchange="setTimeFrame(this.value)"
            >
              <option value="1" selected="">
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
              className="errorloginputItem"
              id="Start_Date"
              name="Start_Date"
              size="8"
              onfocus="document.forms.report_form.statistic_option.selectedIndex=6;"
              value="03/21/2024"
              class="hasDatepicker"
            />
            <i
              class="fa fa-calendar"
              aria-hidden="true"
              className="errorlogicon"
              onclick="document.getElementById('Start_Date').focus();"
            ></i>
            <input
              type="text"
              className="errorloginputItem"
              id="End_Date"
              name="End_Date"
              size="8"
              onfocus="document.forms.report_form.statistic_option.selectedIndex=6;"
              value="03/21/2024"
              class="hasDatepicker"
            />

            <i
              class="fa fa-calendar"
              aria-hidden="true"
              className="errorlogicon"
              onclick="document.getElementById('End_Date').focus();"
            ></i>
          </div>
          <div style={{ float: "left" }}>
            <span class="bdv_000000_Text_10">&nbsp;</span>
            <br />
            <input
              id="content-button"
              type="button"
              className="logsubmitbutton"
              name="Create_button"
              value="Generate"
              onclick="doSubmitFunc(document.location.href);"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorLogs;
