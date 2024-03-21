import React from "react";
import "../styles/Summery.css";
import Header from "../components/Header";

const Summery = () => {
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
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td>
                    <table border="0" cellpadding="2" cellspacing="1">
                      <tbody>
                        <tr>
                          <td>
                            <span className="bdv_000000_Text_10">
                              Date Range:
                            </span>
                            <br />
                            <input 
                              id="content-button"
                              type="submit"
                              name="Create_button"
                              value="Generate"
                              className="generate-button"
                            />
                            <span className="date-range">
                              <div className="date-picker-container">
                                <select
                                  name="statistic_option"
                                  className="date_picker_item"
                                  onChange="setTimeFrame(this.value)"
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
                                  id="Start_Date"
                                  onChange="$('#End_Date').datepicker('option', 'maxDate', addMonths(this.value, 4));"
                                  name="Start_Date"
                                  size="8"
                                  onFocus="document.forms.report_form.statistic_option.selectedIndex=6;"
                                  value="03/21/2024"
                                  className="date-input"
                                />
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                
                                ></i>
                                <input
                                  type="text"
                                  id="End_Date"
                                  name="End_Date"
                                  size="8"
                                  onFocus="document.forms.report_form.statistic_option.selectedIndex=6;"
                                  value="03/21/2024"
                                  className="date-input"
                                />
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                
                                ></i>
                              </div>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

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
                          <b style={{color:"#505050",fontSize:'12px'}}>Start Date</b>
                        </td>
                        <td align="center" rowspan="2" valign="top">
                          <b style={{color:"#505050",fontSize:'12px'}}>End Date</b>
                        </td>
                        <td align="center" colspan="3" valign="top">
                          <b style={{color:"#505050",fontSize:'12px'}}>Total</b>
                        </td>
                        <td align="center" rowspan="2" valign="top">
                          <b style={{color:"#505050",fontSize:'12px'}}>CPC</b>
                        </td>
                      </tr>
                      <tr bgcolor="#FFFFFF">
                        <td align="center">
                          <b style={{color:"#505050",fontSize:'12px'}}>Ad Requests</b>
                        </td>
                        <td align="center">
                          <b style={{color:"#505050",fontSize:'12px'}}>Visits</b>
                        </td>
                        <td align="center">
                          <b style={{color:"#505050",fontSize:'12px'}}>Cost</b>
                        </td>
                      </tr>

                      <tr
                        bgcolor="#FFFFFF"
                        className="work_line"
                        onClick={(e) =>
                          e.target.className === "work_line"
                            ? (e.target.className = "active_work_line")
                            : (e.target.className = "work_line")
                        }
                      >
                        <td valign="top">March 21, 2024</td>
                        <td valign="top">March 21 2024</td>
                        <td valign="top">0</td>
                        <td valign="top">0</td>
                        <td valign="top" nowrap="">
                          $ 0.00
                        </td>
                        <td valign="top" nowrap="">
                          $ 0.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
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
