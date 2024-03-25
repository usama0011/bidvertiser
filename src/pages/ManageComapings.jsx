import React from "react";
import Header from "../components/Header";
import "../styles/ManageCam.css";
const ManageComapings = () => {
  return (
    <div className="appcontainer">
      <Header routename="Manage Campaings" />
      <div className="maingecampaingsbody">
        <div id="page">
          <form
            action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_report_ads_details_tabs.dbm?groupBy=daily&amp;ID_Token=R150TN08K92EGQ9&amp;requesttimeout=24000"
            method="post"
            name="report_form3"
            style="display:none"
          >
            <input type="Hidden" name="orderBy" value="Clicks" />
            <input type="Hidden" name="Selected_Content" value="" />
            <input type="Hidden" name="Start_Date" value="" />
            <input type="Hidden" name="End_Date" value="" />
            <input type="Hidden" name="statistic_option" value="" />
            <input type="Hidden" name="doSubmit" value="-1" />
          </form>

          <form
            action="about:blank"
            method="post"
            name="report_form4"
            id="report_form4"
            target="post_requests"
            style={{ display: "none" }}
          >
            <input type="Hidden" name="Selected_Ad_Content_ID" value="" />
          </form>

          <iframe
            src="about:blank"
            name="post_charts"
            id="post_charts"
            style={{ display: "none" }}
            width="1000"
            height="1000"
          ></iframe>
          <form
            action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_get_charts.dbm?ID_Token=R150TN08K92EGQ9&amp;requesttimeout=24000"
            name="displayCharts"
            method="post"
            target="post_charts"
          >
            <input type="hidden" name="CIDLIST" value="" />
            <input type="hidden" name="DATALIST" value="" />
            <input type="hidden" name="DISPLAY_TYPE" value="bar" />
            <input type="hidden" name="START_DATE" value="03/25/2024" />
            <input type="hidden" name="END_DATE" value="03/25/2024" />
          </form>

          <table
            width="100%"
            border="0"
            style={{ marginBottom: "15px" }}
            class="table_style"
          >
            <tbody>
              <tr>
                <td align="left">
                  <table
                    width="100%"
                    border="0"
                    style={{ marginBottom: "5px", marginTop: "-10px" }}
                    class="table_style"
                  >
                    <tbody>
                      <tr>
                        <td width="100%" colspan="3">
                          <table
                            border="0"
                            width="100%"
                            class="main_table_style"
                            style={{ marginBottom: "15px" }}
                          >
                            <tbody>
                              <tr style="border:0;">
                                <td style="background-color:white;padding:10px;">
                                  <div style="float:left;">
                                    <form
                                      action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_ads_center.dbm?ID_Token=R150TN08K92EGQ9&amp;requesttimeout=24000"
                                      method="post"
                                      name="report_form2"
                                    >
                                      <input
                                        id="content-button"
                                        style={{
                                          float: "right",
                                          marginRight: "10px",
                                        }}
                                        type="submit"
                                        name="Create_button"
                                        value="Generate"
                                      />
                                      <input
                                        type="hidden"
                                        name="maxRows"
                                        value="50"
                                      />

                                      <div className="ippbbone">
                                        <select
                                          name="statistic_option"
                                          class="date_picker_item"
                                          onchange="setTimeFrame(this.value)"
                                          className="selectstyleone"
                                        >
                                          <option value="1" selected="">
                                            Today
                                          </option>
                                          <option value="2">Yesterday</option>
                                          <option value="3">Last 7 days</option>
                                          <option value="4">This Month</option>
                                          <option value="5">Last Month</option>
                                          <option value="6">
                                            Last 30 days
                                          </option>
                                          <option value="7">
                                            Select Date Range
                                          </option>
                                        </select>
                                        <input
                                          type="text"
                                          className="inputsmaeon"
                                          id="Start_Date"
                                          name="Start_Date"
                                          size="8"
                                          onfocus="document.forms.report_form2.statistic_option.selectedIndex=6;"
                                          value="03/25/2024"
                                          class="hasDatepicker"
                                        />

                                        <i
                                          class="fa fa-calendar"
                                          aria-hidden="true"
                                          className="klsjd"
                                        ></i>
                                        <input
                                          type="text"
                                          className="inputsmaeon"
                                          id="End_Date"
                                          name="End_Date"
                                          size="8"
                                          onfocus="document.forms.report_form2.statistic_option.selectedIndex=6;"
                                          value="03/25/2024"
                                          class="hasDatepicker"
                                        />

                                        <i
                                          class="fa fa-calendar"
                                          aria-hidden="true"
                                          className="klsjd"
                                        ></i>
                                      </div>
                                    </form>
                                  </div>
                                  <input
                                    type="Button"
                                    class="function-button"
                                    name="f_nam"
                                    value="Filters"
                                    style="float:left;margin-left:10px;min-width:100px;background:url('https://my.bidvertiser.com/BidVertiser/Images/bdv_action_filter.png') no-repeat;background-size:13px 13px;background-position: 17px 9px;padding-left:23px;background-color:var(--lightBlue)"
                                    onclick="if(this.style.backgroundColor=='var(--darkBlue)')this.style.backgroundColor='var(--lightBlue)';else this.style.backgroundColor='var(--darkBlue)';switchfilters();"
                                  />

                                  <button
                                    class="function-button"
                                    id="b_nam"
                                    onclick="switchbulk();"
                                    style="float:left;margin:0 10px;min-width:100px;width:115px;"
                                    onmouseover="this.style.backgroundColor='var(--darkBlue)'"
                                    onmouseleave="this.style.backgroundColor='var(--lightBlue)'"
                                  >
                                    <i
                                      class="fa fa-asterisk"
                                      aria-hidden="true"
                                      style="font-size:12px;margin-right:3px;"
                                    ></i>
                                    Bulk Actions
                                  </button>

                                  <select
                                    id="blk"
                                    onchange="if(this.value > 0){Bulk_Func(this.value);this.value=0;}"
                                    style="display:none;padding: 4px;min-height: 29px;float:left"
                                  >
                                    <option value="0" selected="">
                                      Bulk Action
                                    </option>
                                    <option value="1">Change URL</option>
                                    <option value="2">Archive Campaigns</option>
                                    <option value="3">Set Bid</option>
                                    <option value="4">Set Daily Cap</option>
                                    <option value="5">Pause Campaigns</option>
                                    <option value="6">Resume Campaigns</option>
                                    <option value="7">Clear Whitelist</option>
                                    <option value="8">Clear Blacklist</option>
                                  </select>

                                  <div style="float:right;">
                                    <input
                                      type="Button"
                                      class="function-button"
                                      name="new_cmp"
                                      value="Create new campaign"
                                      onclick="window.location.href='https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_type.dbm?ID_Token=R150TN08K92EGQ9'"
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr style="border:0;">
                                <td
                                  width="100%"
                                  colspan="3"
                                  style="position:relative"
                                >
                                  <table
                                    width="100%"
                                    border="0"
                                    height="35"
                                    class="table_style"
                                    id="graphs"
                                  >
                                    <tbody>
                                      <tr style="background-color:white;">
                                        <td width="*" nowrap="">
                                          <div style="display:flex;">
                                            <div style="margin-right:5px;">
                                              <i
                                                class="fas fa-chart-line"
                                                style="font-size:14px;color:var(--darkGreen);"
                                              ></i>
                                            </div>
                                            <div
                                              id="graphs_button"
                                              style="text-decoration:underline;cursor:pointer;font-size:11px;line-height: 22px;"
                                              onclick="switchGraphs();"
                                            >
                                              Show Graphs
                                            </div>
                                          </div>
                                        </td>
                                        <td width="150" nowrap="">
                                          <div style="display:flex;margin-left:30px">
                                            <div style="margin-right:5px;">
                                              <i
                                                class="fa-brands fa-youtube"
                                                style="font-size:14px;color:var(--darkRed)"
                                              ></i>
                                            </div>
                                            <div
                                              id="graphs_button"
                                              style="text-decoration:underline;cursor:pointer;font-size:11px;line-height: 22px;"
                                              onclick="popup_view('https://www.youtube.com/embed/aDg1BEwGplU',1200,675,'no')"
                                            >
                                              Video Guide
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="2"
                                          id="graph_display"
                                          style="display:block;height:0;overflow:hidden;margin-left:95px"
                                        >
                                          <div style="margin: 0 20px;float:left">
                                            Select two values:
                                          </div>
                                          <input
                                            type="checkbox"
                                            id="visit"
                                            onclick="chartSelect(this.id);"
                                            checked=""
                                          />
                                          Visits
                                          <input
                                            type="checkbox"
                                            id="cost"
                                            onclick="chartSelect(this.id);"
                                            style="margin-left:20px"
                                            checked=""
                                          />
                                          Cost
                                          <input
                                            type="checkbox"
                                            id="conv"
                                            onclick="chartSelect(this.id);"
                                            style="margin-left:20px"
                                            disabled=""
                                            title="Only two graphs allowed at a time!"
                                          />
                                          Conversions
                                          <div style="margin: 0 20px;float:right">
                                            Display as:
                                            <input
                                              type="radio"
                                              name="display_type"
                                              value="line"
                                              onclick="document.forms.displayCharts.DISPLAY_TYPE.value='line';refreshChart();"
                                            />
                                            Line
                                            <input
                                              type="radio"
                                              name="display_type"
                                              onclick="document.forms.displayCharts.DISPLAY_TYPE.value='bar';refreshChart()"
                                              value="bar"
                                              checked=""
                                            />
                                            Bar
                                          </div>
                                          <div id="myChart_div">
                                            <canvas
                                              id="myChart"
                                              height="300"
                                              width="800"
                                            ></canvas>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table style="margin:0;padding:0;position:absolute;top:-8px;left:175px;">
                                    <tbody>
                                      <tr style="margin:0;padding:0;border:0;">
                                        <td style="margin:0;padding:0;">
                                          <iframe
                                            src="about:blank"
                                            name="post_requests"
                                            id="post_requests"
                                            style="display:none"
                                            width="1000"
                                            height="100"
                                          ></iframe>

                                          <div
                                            id="flt_div"
                                            style="background:white;"
                                          >
                                            <form
                                              action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_ads_center.dbm?ID_Token=R150TN08K92EGQ9&amp;requesttimeout=24000"
                                              method="post"
                                              name="report_form"
                                              target="post_requests"
                                            >
                                              <table
                                                width="100%"
                                                border="0"
                                                style="display:none;margin-left:-4px;clear:both;min-height: 42px;"
                                                height="0"
                                                class="table_style"
                                                id="flt"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      width="100%"
                                                      nowrap=""
                                                      style="background-color:var(--darkBlue);"
                                                    >
                                                      <table
                                                        width="477"
                                                        border="0"
                                                        style="margin-left: -5px;min-height: 42px;padding:0;background-color:var(--darkBlue);"
                                                      >
                                                        <tbody>
                                                          <tr style="background-color:var(--darkBlue);">
                                                            <td style="background-color:var(--darkBlue);">
                                                              <select
                                                                id="fltslct"
                                                                onchange="getFields(this.value);"
                                                                style="padding: 4px;min-height: 29px;"
                                                              >
                                                                <option
                                                                  value="0"
                                                                  selected=""
                                                                >
                                                                  Select a
                                                                  Filter
                                                                </option>
                                                                <option value="1">
                                                                  Name Contains
                                                                </option>
                                                                <option value="2">
                                                                  Traffic
                                                                </option>
                                                                <option value="3">
                                                                  Geos
                                                                </option>
                                                                <option value="4">
                                                                  Bid Range
                                                                </option>
                                                                <option value="5">
                                                                  Type
                                                                </option>
                                                                <option value="6">
                                                                  Status
                                                                </option>
                                                                <option value="7">
                                                                  Device
                                                                </option>
                                                                <option value="8">
                                                                  Editorial
                                                                </option>
                                                                <option value="9">
                                                                  Requests
                                                                </option>
                                                                <option value="10">
                                                                  Visits
                                                                </option>
                                                                <option value="11">
                                                                  CTR
                                                                </option>
                                                                <option value="12">
                                                                  Cost
                                                                </option>
                                                                <option value="13">
                                                                  Archived
                                                                </option>
                                                                <option value="14">
                                                                  Total
                                                                  Conversions
                                                                </option>
                                                                <option value="15">
                                                                  Conversion
                                                                  Rate
                                                                </option>
                                                              </select>
                                                            </td>
                                                            <td
                                                              id="filtVal"
                                                              style="position:relative;background-color:var(--darkBlue);color:white;display:flex"
                                                              align="left"
                                                            ></td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </form>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            border="0"
                            width="100%"
                            class="main_table_style"
                            style="margin:15px 0"
                          >
                            <tbody>
                              <tr style="border:0;">
                                <td style="background-color:white;">
                                  <div style="display:flex;float:left">
                                    <div style="float:left;margin-left:5px;">
                                      Show
                                      <select
                                        style="min-width:55px;margin:5px;"
                                        onchange="document.report_form2.maxRows.value = this.value;document.report_form2.submit();"
                                      >
                                        <option value="10"> 10 </option>
                                        <option value="20"> 20 </option>
                                        <option value="50" selected="">
                                          {" "}
                                          50{" "}
                                        </option>
                                        <option value="100"> 100 </option>
                                        <option value="5"> ALL </option>
                                      </select>
                                      Campaings per page out of 5
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <iframe
                            src="about:blank"
                            name="post_requests_ALL"
                            id="post_requests_ALL"
                            style="display:none"
                            width="1000"
                            height="100"
                          ></iframe>
                          <span style="display:none" id="devices783900">
                            Mobile
                          </span>
                          <span style="display:none" id="editorials783900">
                            approved
                          </span>
                          <span style="display:none" id="ad_type783900">
                            PopUnder
                          </span>
                          <span style="display:none" id="traffic783900">
                            Mainstream
                          </span>
                          <span style="display:none" id="max_bid783900">
                            0.00043
                          </span>
                          <span style="display:none" id="targetings783900">
                            US,CA,UK,AU
                          </span>
                          <span style="display:none" id="ctr783900">
                            0
                          </span>
                          <span style="display:none" id="cost783900">
                            0
                          </span>
                          <div id="Total_Cost_783900" style="display:none">
                            0
                          </div>
                          <span style="display:none" id="devices783468">
                            Mobile
                          </span>
                          <span style="display:none" id="editorials783468">
                            approved
                          </span>
                          <span style="display:none" id="ad_type783468">
                            InPage
                          </span>
                          <span style="display:none" id="traffic783468">
                            Mainstream
                          </span>
                          <span style="display:none" id="max_bid783468">
                            0.00401
                          </span>
                          <span style="display:none" id="targetings783468">
                            US,CA
                          </span>
                          <span style="display:none" id="ctr783468">
                            0
                          </span>
                          <span style="display:none" id="cost783468">
                            0
                          </span>
                          <div id="Total_Cost_783468" style="display:none">
                            0
                          </div>
                          <span style="display:none" id="devices783397">
                            Mobile
                          </span>
                          <span style="display:none" id="editorials783397">
                            approved
                          </span>
                          <span style="display:none" id="ad_type783397">
                            Direct
                          </span>
                          <span style="display:none" id="traffic783397">
                            Mainstream
                          </span>
                          <span style="display:none" id="max_bid783397">
                            0.0534
                          </span>
                          <span style="display:none" id="targetings783397">
                            US,CA,UK
                          </span>
                          <span style="display:none" id="ctr783397">
                            0
                          </span>
                          <span style="display:none" id="cost783397">
                            0
                          </span>
                          <div id="Total_Cost_783397" style="display:none">
                            0
                          </div>
                          <span style="display:none" id="devices783296">
                            Mobile
                          </span>
                          <span style="display:none" id="editorials783296">
                            approved
                          </span>
                          <span style="display:none" id="ad_type783296">
                            Native
                          </span>
                          <span style="display:none" id="traffic783296">
                            Mainstream
                          </span>
                          <span style="display:none" id="max_bid783296">
                            0.002
                          </span>
                          <span style="display:none" id="targetings783296">
                            US,UK,AU
                          </span>
                          <span style="display:none" id="ctr783296">
                            0
                          </span>
                          <span style="display:none" id="cost783296">
                            0
                          </span>
                          <div id="Total_Cost_783296" style="display:none">
                            0
                          </div>
                          <span style="display:none" id="devices755621">
                            Mobile
                          </span>
                          <span style="display:none" id="editorials755621">
                            approved
                          </span>
                          <span style="display:none" id="ad_type755621">
                            InPage
                          </span>
                          <span style="display:none" id="traffic755621">
                            Mainstream
                          </span>
                          <span style="display:none" id="max_bid755621">
                            0.00044
                          </span>
                          <span style="display:none" id="targetings755621">
                            US
                          </span>
                          <span style="display:none" id="ctr755621">
                            0
                          </span>
                          <span style="display:none" id="cost755621">
                            0
                          </span>
                          <div id="Total_Cost_755621" style="display:none">
                            0
                          </div>
                          <table
                            border="0"
                            width="100%"
                            class="main_table_style main_table_style_add_on"
                            id="campaignsTable"
                          >
                            <thead>
                              <tr style="border:0;font-size:13px;font-weight:bold;padding:0;line-height:17px;">
                                <td
                                  colspan="13"
                                  align="center"
                                  style="padding-left:14px;border-left:none"
                                ></td>
                                <td
                                  align="center"
                                  style="padding-left:4px;border-bottom:thin solid rgba(0, 0, 0, 0.15);border-left:none;"
                                  colspan="3"
                                >
                                  Conversions
                                </td>
                              </tr>
                            </thead>
                            <thead id="head_ids">
                              <tr>
                                <th
                                  valign="top"
                                  style="padding-left:13px;width:130px;text-align:left;cursor:default;border-left:none"
                                  id="actTitle"
                                >
                                  <div style="float:left;width:19px;">
                                    &nbsp;
                                  </div>
                                  Actions
                                </th>
                                <th
                                  valign="top"
                                  style="padding-left:10px;width:80px;text-align:left;cursor:default;"
                                >
                                  Status
                                </th>
                                <th
                                  valign="top"
                                  style="padding-left:10px;width:100px;text-align:left;"
                                  nowrap=""
                                >
                                  Ad Format
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_2"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="padding-left:10px;width:50px;text-align:left;"
                                  nowrap=""
                                  class="id_sort"
                                >
                                  ID
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_3"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="min-width:80px;text-align:left;"
                                  nowrap=""
                                  id="campaign_width"
                                >
                                  Campaign Name
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_4"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:90px;text-align:left;"
                                  nowrap=""
                                  onmouseover="return escape('<b>Yout Bid</b> - CPV (Cost Per Visitor)');"
                                >
                                  Your Bid US$
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_5"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:50px;text-align:left;"
                                  nowrap=""
                                >
                                  GEO
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_6"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:115px;text-align:left;"
                                  nowrap=""
                                  onmouseover="return escape('<b>Bid Requests</b> - Number of auctions your campaign participated in based on your targeting settings, which means the potential traffic per your targeting');"
                                >
                                  Bid Requests
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_7"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:115px;text-align:left;"
                                  title=""
                                  nowrap=""
                                  onmouseover="return escape('<b>Video Ads Impressions</b> - Billed views of your campaign (only video ads support CPM bid model)');"
                                >
                                  Video Imp'
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_7"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:70px;text-align:left;"
                                  nowrap=""
                                  onmouseover="return escape('<b>Visits</b> - Actual users that were redirected to your landing page');"
                                >
                                  Visits
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_8"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:50px;text-align:left;"
                                  nowrap=""
                                  onmouseover="return escape('<b>Win Rate</b> - Actual numbers of bids that your campaign has won. If your win rate is low it means that you lose most of the bid auctions thus you need to increase your bid');"
                                >
                                  Win Rate
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_9"
                                    style="margin-left:4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:50px;text-align:right"
                                  nowrap=""
                                >
                                  Cost
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_10"
                                    style="margin-left:4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="width:105px;text-align:left"
                                  nowrap=""
                                >
                                  Daily Cap
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_11"
                                    style="margin-left:4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>

                                <th
                                  valign="top"
                                  style="min-width:50px;text-align:left"
                                >
                                  Total
                                  <i
                                    class="fa fa-sort-desc"
                                    id="srt_12"
                                    style="margin:0 4px;color:lightgrey"
                                    aria-hidden="true"
                                  ></i>
                                </th>
                                <th
                                  valign="top"
                                  style="min-width:50px;text-align:right;padding-right:10px"
                                >
                                  Rate
                                </th>
                              </tr>
                            </thead>

                            <input
                              type="Hidden"
                              name="Selected_Ad_Content_ID"
                              id="curr_Selected_Ad_Content_ID"
                              value=""
                            />

                            <tbody class="ui-sortable">
                              <input
                                type="Hidden"
                                id="UA_783900"
                                name="UA_783900"
                                value="1"
                                style=""
                              />

                              <tr
                                id="line_783900"
                                class="work_line"
                                onclick="workLine(this.id,);"
                              >
                                <td
                                  nowrap=""
                                  style="width:130px;text-align:center;border-left:none"
                                >
                                  <div style="display:flex">
                                    <div
                                      style="width:16%;"
                                      id="func_type_783900"
                                    >
                                      <div class="handle ui-sortable-handle">
                                        <i
                                          class="fa fa-bars"
                                          aria-hidden="true"
                                          style="cursor:n-resize;color:rgba(80,80,80,0.5);padding:4px 5px;font-size:11px;"
                                        ></i>
                                      </div>
                                    </div>
                                    <div
                                      style="width:16%;cursor:pointer;"
                                      id="status_box_783900"
                                    >
                                      <div
                                        title="Running - click to pause - Campaign is Offline"
                                        id="content_status_783900"
                                        onclick="PR_Func(783900,1);"
                                        class="isOffline"
                                        style="cursor:pointer;padding:2px 2px"
                                      >
                                        <i
                                          class="fa fa-step-forward"
                                          aria-hidden="true"
                                          style="color:var(--darkGreen);width:11px;overflow:hidden"
                                        ></i>
                                        <i
                                          class="fa fa-pause"
                                          style="color:var(--darkGreen);width:2px;overflow:hidden;"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <span
                                        style="display:none"
                                        id="running783900"
                                      >
                                        Running
                                      </span>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-pencil fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="Preferences_button"
                                        title="Edit"
                                        onclick="Preferences_Func(783900);"
                                      ></i>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-copy fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="copy_button"
                                        title="Duplicate"
                                        onclick="Copy_Func(783900);"
                                      ></i>
                                    </div>
                                    <div style="width:16%">
                                      <i
                                        class="fa fa-archive fa-fw"
                                        aria-hidden="true"
                                        style="cursor:pointer;color:var(--greyBlue);padding:2px 5px"
                                        name="archive_button"
                                        title="Archive Campaign"
                                        onclick="Delete_Func(783900,1);"
                                      ></i>
                                    </div>
                                    <div
                                      id="buttons_control_1"
                                      style="cursor:pointer;"
                                    >
                                      <div
                                        name="More_button"
                                        title="Advanced Settings"
                                        id="more_funcs_783900"
                                        style="position:relative;margin: 4px 0 0 2px;"
                                        onclick="More_Func(1,783900,1,19);"
                                        onmouseover="document.getElementById('cog1_783900').className=document.getElementById('cog2_783900').className=document.getElementById('cog3_783900').className='fa fa-cog fa-spin'"
                                        onmouseout="document.getElementById('cog1_783900').className=document.getElementById('cog2_783900').className=document.getElementById('cog3_783900').className='fa fa-cog'"
                                      >
                                        <i
                                          class="fa fa-cog"
                                          id="cog1_783900"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:0;left:14px;font-size:7px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog2_783900"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:9px;left:15px;font-size:8px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog3_783900"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:2px;left:3px;font-size:14px"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  id="status783900"
                                  style="width:80px;padding-left:5px;white-space:nowrap;"
                                  nowrap=""
                                >
                                  <div style="text-align:center;display:flex;width:80px;">
                                    <div style="width:25%;;">
                                      <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                        style="padding:5px 4px;min-width:13px;font-size:12pt;float:left"
                                        title="Editorial Status: Approved"
                                        id="editorial_status_783900"
                                      ></i>
                                    </div>

                                    <span id="THR_783900" style="display:none">
                                      100
                                    </span>

                                    <div
                                      onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge100.png border=0 id=TDIMG783900 style=margin-right:10px align=absmiddle width=50><span id=TDTXT783900>Throttling: 100%</span></td></tr></table>')"
                                      onclick="User_Defined_Throttling_Func(783900);"
                                      style="width:25%;position:relative;cursor:pointer;;"
                                    >
                                      <div style="position:absolute;top:1px;left:2px;">
                                        <span
                                          class="fa-stack fa-lg"
                                          style="transform:rotate(300deg);width:10pt;height:10pt;transform-origin:50% 100%;position:absolute;top:-2pt;"
                                        >
                                          <i
                                            class="fa fa-circle fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:#FFF;font-size:10pt;"
                                            title=""
                                            id="TIMG783900"
                                          ></i>
                                          <div style="position:absolute;top:-1pt;left:4.3pt">
                                            <i
                                              class="fa fa-long-arrow-up"
                                              style="color:var(--lightGreen);padding:0;font-weight:normal;font-weight:bold;font-size:4.5pt;"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                          <i
                                            class="fa fa-circle-thin fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:var(--greyBlue);font-size:11.8pt;position:absolute;top:0pt;left:0pt;"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div style="width:25%;cursor:pointer;;">
                                      <i
                                        class="fa fa-stethoscope fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding-top:6px"
                                        name="limit_button"
                                        title="Campaign Health Analysis"
                                        onclick="Limit_Func(1,783900,1,19);"
                                      ></i>
                                    </div>
                                    <div style="width:25%;cursor:pointer;">
                                      <i
                                        class="fa fa-exclamation-triangle"
                                        id="NOSRCCLICKID783900"
                                        style="padding-top:7px;font-size:12px;z-index:4;color:var(--orange);"
                                        onclick="curr_selected = 'line_783900';selectLine('line_783900');popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_no_tracking_note.dbm?ID_Token=R150TN08K92EGQ9',500,280,'no')"
                                        title="Campaign Alert"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  title="PopUnder Mobile"
                                  id="ad_type783900"
                                  style="width:100px;white-space:nowrap;padding-left:10px"
                                >
                                  <div
                                    id="source_type_783900"
                                    style="padding:5px 5px 5px 0;float:left;position:relative;;"
                                    title="Source Type: Mainstream Traffic"
                                  >
                                    <i
                                      class="fa fa-circle-thin"
                                      aria-hidden="true"
                                      style="position:absolute;color:var(--greyBlue);font-size:15px;padding-bottom:1px"
                                    >
                                      <span style="position:absolute;left:3px;top:3pt;color:var(--greyBlue);font-size:8px;font-family:verdana">
                                        M
                                      </span>
                                    </i>
                                  </div>

                                  <i
                                    class="fa fa-mobile"
                                    onmouseover="return escape('<div style=width:300px>Mobile Targeting - ALL</div>')"
                                    onclick="More_Func(1,783900,1,19,'UA_Targeting_Func');"
                                    aria-hidden="true"
                                    style="color:var(--greyBlue);cursor:pointer;min-width:15px;text-align:center;font-size:17px;padding:4px 5px 4px 15px;"
                                    title=""
                                    id="what_device_783900"
                                  ></i>
                                  <span title="PopUnder">PopUnder</span>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  class="index"
                                  id="ORDER_783900"
                                  headers="1"
                                  title="783900"
                                >
                                  <span style=""></span>783900
                                </td>

                                <td
                                  style="min-width:80px;max-width:100%;white-space:nowrap;"
                                  id="ad_name_title_783900"
                                  title="Uni 4"
                                >
                                  <div style="display:flex;justify-content: space-between;">
                                    <div style="float:left">
                                      <span class="CNAME" id="cname_783900">
                                        <a
                                          href="javascript:void(0);"
                                          onclick="doAnalyticsReport_Func(this, 783900);"
                                        >
                                          <i
                                            class="fa fa-bar-chart"
                                            aria-hidden="true"
                                            style="color:var(--darkGreen);padding:0 3px;"
                                          ></i>
                                        </a>
                                        <input
                                          maxlength="45"
                                          style="background:none;outline:0;font-size:12px;font-family:'Open Sans','Open Sans', sans-serif;"
                                          class="vlad2"
                                          name="Name"
                                          id="ad_name_783900"
                                          value="Uni 4"
                                          onclick="document.getElementById('UAN_783900').className = 'fa fa-send-o';document.getElementById('UAN_783900').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;')"
                                        />
                                      </span>
                                    </div>
                                    <div style="float:right;padding:2px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;"
                                        title="Edit Ad Name"
                                        onclick="save_name(783900);"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UAN_783900"
                                          aria-hidden="true"
                                          style="opacity:0;font-size:14px;cursor:default"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;white-space:nowrap;width:90px;"
                                  title="0.00043"
                                >
                                  <div style="display:flex">
                                    <div style="display:flex">
                                      <div style="" width="20">
                                        <i
                                          class="fa fa-exclamation-triangle"
                                          aria-hidden="true"
                                          onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td>Country</td><td style=white-space:nowrap; class=msb_table_bid>Effective Bid</td><td style=white-space:nowrap; class=\'msb_table_bid mab783900\'>Bid Range</td><td></td></tr><tr style=opacity:1><td bgcolor=F6F8FA nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg align=absmiddle class=msb_table_country_name width=15>US</td><td bgcolor=F6F8FA class=msb_table_bid nowrap>$0.001627</td><td bgcolor=F6F8FA class=\'msb_table_bid mab783900\' nowrap>$0.000430 - $0.03</td><td bgcolor=F6F8FA class=msb_table_bid nowrap></td><td bgcolor=F6F8FA><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr><tr style=opacity:1><td bgcolor=FFFFFF nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/CA.svg align=absmiddle class=msb_table_country_name width=15>CA</td><td bgcolor=FFFFFF class=msb_table_bid nowrap>$0.001110</td><td bgcolor=FFFFFF class=\'msb_table_bid mab783900\' nowrap>$0.000230 - $0.03</td><td bgcolor=FFFFFF class=msb_table_bid nowrap></td><td bgcolor=FFFFFF><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr><tr style=opacity:1><td bgcolor=F6F8FA nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/UK.svg align=absmiddle class=msb_table_country_name width=15>UK</td><td bgcolor=F6F8FA class=msb_table_bid nowrap>$0.000797</td><td bgcolor=F6F8FA class=\'msb_table_bid mab783900\' nowrap>$0.000260 - $0.03</td><td bgcolor=F6F8FA class=msb_table_bid nowrap></td><td bgcolor=F6F8FA><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr><tr style=opacity:1><td bgcolor=FFFFFF nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/AU.svg align=absmiddle class=msb_table_country_name width=15>AU</td><td bgcolor=FFFFFF class=msb_table_bid nowrap>$0.001014</td><td bgcolor=FFFFFF class=\'msb_table_bid mab783900\' nowrap>$0.000320 - $0.03</td><td bgcolor=FFFFFF class=msb_table_bid nowrap></td><td bgcolor=FFFFFF><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr></table>')"
                                          style="font-size:12px;color:var(--orange);position:relative;cursor:pointer;padding-top:16px;"
                                          onclick="popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_recommended_min_bids.dbm?ID_Token=R150TN08K92EGQ9&amp;MAX_BID=0.03&amp;getIP_TARGETING=US,CA,UK,AU&amp;getTYPE=MOBILE&amp;getZCLICK=2&amp;getAdult=Mainstream&amp;getBID=0.00043',550,240,'no')"
                                        ></i>
                                      </div>

                                      <div
                                        width="10"
                                        style="padding:10px 2px 0 10px;"
                                      >
                                        <a
                                          href="javascript:void(0);"
                                          id="CB_783900"
                                          onclick="Bids_Func(783900);"
                                          title="Change Bid"
                                          style="text-decoration:none;display:block;color:var(--darkGreen);font-size:13px"
                                        >
                                          $
                                        </a>
                                      </div>
                                      <div
                                        width="100%"
                                        style="position:relative;white-space:nowrap;"
                                      >
                                        <div style="padding:2px 0;min-width:70px;position:relative;display: flex;">
                                          <span style="cursor:text;color:inherit;">
                                            <div
                                              class="quantity"
                                              style="padding-top:3px"
                                            >
                                              <input
                                                type="number"
                                                title="Bid Range: $0.00043 - $0.03"
                                                id="max_bid_id783900"
                                                class="vlad"
                                                min="0.00001"
                                                max="100"
                                                step="0.00001"
                                                value="0.00043"
                                                onclick="document.getElementById('UB_783900').className = 'fa fa-send-o';document.getElementById('UB_783900').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1')"
                                                style="min-height:1px"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div width="20" style="padding:10px 5px;">
                                        <a
                                          href="javascript:void(0);"
                                          style="text-decoration:none;width:20px;"
                                          title="Submit Bid"
                                          onclick="Bids_Update_Func(783900);"
                                        >
                                          <i
                                            class="fa fa-send-o"
                                            id="UB_783900"
                                            aria-hidden="true"
                                            style="opacity:0;font-size:14px;cursor:default"
                                          ></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  title="Change Country Targeting"
                                >
                                  <a
                                    href="javascript:void(0);"
                                    style="text-decoration:none;color:inherit;position:relative;font-family:'Open Sans';"
                                    onclick="More_Func(1,783900,1,19,'Geographical_Func');"
                                    id="targeting783900"
                                  >
                                    <i
                                      class="fa fa-globe"
                                      aria-hidden="true"
                                      style="color:var(--greyBlue);"
                                      onmouseover="return escape('<span style=font-family:Courier>US   CA   UK   AU</span>')"
                                    ></i>
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="requests783900"
                                  title="0"
                                >
                                  0
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="vidimps783900"
                                  title="Available only for Video Ads"
                                >
                                  -
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  id="visits783900"
                                  title="0"
                                >
                                  0
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;"
                                  title="0"
                                >
                                  0.00%
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  title="0"
                                >
                                  $0.00
                                </td>

                                <td
                                  id="daily_budget_td783900"
                                  style="width:105px;white-space:nowrap;text-align:right;;"
                                  title="5"
                                >
                                  <div style="display:flex;float:left">
                                    <div style="padding:10px 2px 0 0;font-size:13px;">
                                      $
                                    </div>
                                    <div
                                      class="quantity"
                                      style="padding-top:7px"
                                    >
                                      <input
                                        type="number"
                                        style="width:65px;min-height:1px;padding-left:4px;"
                                        id="daily_budget783900"
                                        class="vlad"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        value="5.00"
                                        onclick="enableSend('UBG',783900);"
                                      />
                                      <input
                                        type="hidden"
                                        id="daily_budget_org783900"
                                        value="5.00"
                                      />
                                    </div>
                                    <div width="20" style="padding:10px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;opacity:0;cursor:default"
                                        title="Submit Budget"
                                        onclick=""
                                        id="UBG_783900"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UBG_783900_bttn"
                                          aria-hidden="true"
                                          style="font-size:14px;"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  style="padding-left:10px;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  title=""
                                  id="conv783900"
                                ></td>
                                <td
                                  style="padding:0 10px;white-space:nowrap;text-align:right"
                                  id="convrate783900"
                                ></td>
                              </tr>

                              <input
                                type="Hidden"
                                id="UA_783468"
                                name="UA_783468"
                                value="1"
                                style=""
                              />

                              <tr
                                id="line_783468"
                                class="work_line"
                                onclick="workLine(this.id,);"
                              >
                                <td
                                  nowrap=""
                                  style="width:130px;text-align:center;border-left:none"
                                >
                                  <div style="display:flex">
                                    <div
                                      style="width:16%;"
                                      id="func_type_783468"
                                    >
                                      <div class="handle ui-sortable-handle">
                                        <i
                                          class="fa fa-bars"
                                          aria-hidden="true"
                                          style="cursor:n-resize;color:rgba(80,80,80,0.5);padding:4px 5px;font-size:11px;"
                                        ></i>
                                      </div>
                                    </div>
                                    <div
                                      style="width:16%;cursor:pointer;"
                                      id="status_box_783468"
                                    >
                                      <div
                                        title="Running - click to pause - Campaign is Offline"
                                        id="content_status_783468"
                                        onclick="PR_Func(783468,1);"
                                        class="isOffline"
                                        style="cursor:pointer;padding:2px 2px"
                                      >
                                        <i
                                          class="fa fa-step-forward"
                                          aria-hidden="true"
                                          style="color:var(--darkGreen);width:11px;overflow:hidden"
                                        ></i>
                                        <i
                                          class="fa fa-pause"
                                          style="color:var(--darkGreen);width:2px;overflow:hidden;"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <span
                                        style="display:none"
                                        id="running783468"
                                      >
                                        Running
                                      </span>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-pencil fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="Preferences_button"
                                        title="Edit"
                                        onclick="Preferences_Func(783468);"
                                      ></i>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-copy fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="copy_button"
                                        title="Duplicate"
                                        onclick="Copy_Func(783468);"
                                      ></i>
                                    </div>
                                    <div style="width:16%">
                                      <i
                                        class="fa fa-archive fa-fw"
                                        aria-hidden="true"
                                        style="cursor:pointer;color:var(--greyBlue);padding:2px 5px"
                                        name="archive_button"
                                        title="Archive Campaign"
                                        onclick="Delete_Func(783468,2);"
                                      ></i>
                                    </div>
                                    <div
                                      id="buttons_control_2"
                                      style="cursor:pointer;"
                                    >
                                      <div
                                        name="More_button"
                                        title="Advanced Settings"
                                        id="more_funcs_783468"
                                        style="position:relative;margin: 4px 0 0 2px;"
                                        onclick="More_Func(1,783468,2,3);"
                                        onmouseover="document.getElementById('cog1_783468').className=document.getElementById('cog2_783468').className=document.getElementById('cog3_783468').className='fa fa-cog fa-spin'"
                                        onmouseout="document.getElementById('cog1_783468').className=document.getElementById('cog2_783468').className=document.getElementById('cog3_783468').className='fa fa-cog'"
                                      >
                                        <i
                                          class="fa fa-cog"
                                          id="cog1_783468"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:0;left:14px;font-size:7px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog2_783468"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:9px;left:15px;font-size:8px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog3_783468"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:2px;left:3px;font-size:14px"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  id="status783468"
                                  style="width:80px;padding-left:5px;white-space:nowrap;"
                                  nowrap=""
                                >
                                  <div style="text-align:center;display:flex;width:80px;">
                                    <div style="width:25%;;">
                                      <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                        style="padding:5px 4px;min-width:13px;font-size:12pt;float:left"
                                        title="Editorial Status: Approved"
                                        id="editorial_status_783468"
                                      ></i>
                                    </div>

                                    <span id="THR_783468" style="display:none">
                                      100
                                    </span>

                                    <div
                                      onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge100.png border=0 id=TDIMG783468 style=margin-right:10px align=absmiddle width=50><span id=TDTXT783468>Throttling: 100%</span></td></tr></table>')"
                                      onclick="User_Defined_Throttling_Func(783468);"
                                      style="width:25%;position:relative;cursor:pointer;;"
                                    >
                                      <div style="position:absolute;top:1px;left:2px;">
                                        <span
                                          class="fa-stack fa-lg"
                                          style="transform:rotate(300deg);width:10pt;height:10pt;transform-origin:50% 100%;position:absolute;top:-2pt;"
                                        >
                                          <i
                                            class="fa fa-circle fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:#FFF;font-size:10pt;"
                                            title=""
                                            id="TIMG783468"
                                          ></i>
                                          <div style="position:absolute;top:-1pt;left:4.3pt">
                                            <i
                                              class="fa fa-long-arrow-up"
                                              style="color:var(--lightGreen);padding:0;font-weight:normal;font-weight:bold;font-size:4.5pt;"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                          <i
                                            class="fa fa-circle-thin fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:var(--greyBlue);font-size:11.8pt;position:absolute;top:0pt;left:0pt;"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div style="width:25%;cursor:pointer;;">
                                      <i
                                        class="fa fa-stethoscope fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding-top:6px"
                                        name="limit_button"
                                        title="Campaign Health Analysis"
                                        onclick="Limit_Func(1,783468,2,3);"
                                      ></i>
                                    </div>
                                    <div style="width:25%;cursor:pointer;">
                                      <i
                                        class="fa fa-exclamation-triangle"
                                        id="NOSRCCLICKID783468"
                                        style="padding-top:7px;font-size:12px;z-index:4;color:var(--orange);"
                                        onclick="curr_selected = 'line_783468';selectLine('line_783468');popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_no_tracking_note.dbm?ID_Token=R150TN08K92EGQ9',500,280,'no')"
                                        title="Campaign Alert"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  title="InPage Mobile"
                                  id="ad_type783468"
                                  style="width:100px;white-space:nowrap;padding-left:10px"
                                >
                                  <div
                                    id="source_type_783468"
                                    style="padding:5px 5px 5px 0;float:left;position:relative;;"
                                    title="Source Type: Mainstream Traffic"
                                  >
                                    <i
                                      class="fa fa-circle-thin"
                                      aria-hidden="true"
                                      style="position:absolute;color:var(--greyBlue);font-size:15px;padding-bottom:1px"
                                    >
                                      <span style="position:absolute;left:3px;top:3pt;color:var(--greyBlue);font-size:8px;font-family:verdana">
                                        M
                                      </span>
                                    </i>
                                  </div>

                                  <i
                                    class="fa fa-mobile"
                                    onmouseover="return escape('<div style=width:300px>Mobile Targeting - ALL</div>')"
                                    onclick="More_Func(1,783468,2,3,'UA_Targeting_Func');"
                                    aria-hidden="true"
                                    style="color:var(--greyBlue);cursor:pointer;min-width:15px;text-align:center;font-size:17px;padding:4px 5px 4px 15px;"
                                    title=""
                                    id="what_device_783468"
                                  ></i>
                                  <span title="InPage">InPage</span>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  class="index"
                                  id="ORDER_783468"
                                  headers="2"
                                  title="783468"
                                >
                                  <span style=""></span>783468
                                </td>

                                <td
                                  style="min-width:80px;max-width:100%;white-space:nowrap;"
                                  id="ad_name_title_783468"
                                  title="Uni Test 3"
                                >
                                  <div style="display:flex;justify-content: space-between;">
                                    <div style="float:left">
                                      <span class="CNAME" id="cname_783468">
                                        <a
                                          href="javascript:void(0);"
                                          onclick="doAnalyticsReport_Func(this, 783468);"
                                        >
                                          <i
                                            class="fa fa-bar-chart"
                                            aria-hidden="true"
                                            style="color:var(--darkGreen);padding:0 3px;"
                                          ></i>
                                        </a>
                                        <input
                                          maxlength="45"
                                          style="background:none;outline:0;font-size:12px;font-family:'Open Sans','Open Sans', sans-serif;"
                                          class="vlad2"
                                          name="Name"
                                          id="ad_name_783468"
                                          value="Uni Test 3"
                                          onclick="document.getElementById('UAN_783468').className = 'fa fa-send-o';document.getElementById('UAN_783468').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;')"
                                        />
                                      </span>
                                    </div>
                                    <div style="float:right;padding:2px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;"
                                        title="Edit Ad Name"
                                        onclick="save_name(783468);"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UAN_783468"
                                          aria-hidden="true"
                                          style="opacity:0;font-size:14px;cursor:default"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;white-space:nowrap;width:90px;"
                                  title="0.00401"
                                >
                                  <div style="display:flex">
                                    <div style="display:flex">
                                      <div style="" width="20">
                                        <i
                                          class="fa fa-exclamation-triangle"
                                          aria-hidden="true"
                                          style="font-size:12px;color:rgba(0,0,0,0);position:relative;padding-top:16px;"
                                        ></i>
                                      </div>

                                      <div
                                        width="10"
                                        style="padding:10px 2px 0 10px;"
                                      >
                                        <a
                                          href="javascript:void(0);"
                                          id="CB_783468"
                                          onclick="Bids_Func(783468);"
                                          title="Change Bid"
                                          style="text-decoration:none;display:block;color:var(--darkGreen);font-size:13px"
                                        >
                                          $
                                        </a>
                                      </div>
                                      <div
                                        width="100%"
                                        style="position:relative;white-space:nowrap;"
                                      >
                                        <div style="padding:2px 0;min-width:70px;position:relative;display: flex;">
                                          <span style="cursor:text;color:inherit;">
                                            <div
                                              class="quantity"
                                              style="padding-top:3px"
                                            >
                                              <input
                                                type="number"
                                                title="Bid Range: $0.00044 - $1.25"
                                                id="max_bid_id783468"
                                                class="vlad"
                                                min="0.00001"
                                                max="100"
                                                step="0.00001"
                                                value="0.00401"
                                                onclick="document.getElementById('UB_783468').className = 'fa fa-send-o';document.getElementById('UB_783468').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1')"
                                                style="min-height:1px"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div width="20" style="padding:10px 5px;">
                                        <a
                                          href="javascript:void(0);"
                                          style="text-decoration:none;width:20px;"
                                          title="Submit Bid"
                                          onclick="Bids_Update_Func(783468);"
                                        >
                                          <i
                                            class="fa fa-send-o"
                                            id="UB_783468"
                                            aria-hidden="true"
                                            style="opacity:0;font-size:14px;cursor:default"
                                          ></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  title="Change Country Targeting"
                                >
                                  <a
                                    href="javascript:void(0);"
                                    style="text-decoration:none;color:inherit;position:relative;font-family:'Open Sans';"
                                    onclick="More_Func(1,783468,2,3,'Geographical_Func');"
                                    id="targeting783468"
                                  >
                                    <i
                                      class="fa fa-globe"
                                      aria-hidden="true"
                                      style="color:var(--greyBlue);"
                                      onmouseover="return escape('<span style=font-family:Courier>US   CA</span>')"
                                    ></i>
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="requests783468"
                                  title="0"
                                >
                                  0
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="vidimps783468"
                                  title="Available only for Video Ads"
                                >
                                  -
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  id="visits783468"
                                  title="0"
                                >
                                  0
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;"
                                  title="0"
                                >
                                  0.00%
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  title="0"
                                >
                                  $0.00
                                </td>

                                <td
                                  id="daily_budget_td783468"
                                  style="width:105px;white-space:nowrap;text-align:right;;"
                                  title="5"
                                >
                                  <div style="display:flex;float:left">
                                    <div style="padding:10px 2px 0 0;font-size:13px;">
                                      $
                                    </div>
                                    <div
                                      class="quantity"
                                      style="padding-top:7px"
                                    >
                                      <input
                                        type="number"
                                        style="width:65px;min-height:1px;padding-left:4px;"
                                        id="daily_budget783468"
                                        class="vlad"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        value="5.00"
                                        onclick="enableSend('UBG',783468);"
                                      />
                                      <input
                                        type="hidden"
                                        id="daily_budget_org783468"
                                        value="5.00"
                                      />
                                    </div>
                                    <div width="20" style="padding:10px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;opacity:0;cursor:default"
                                        title="Submit Budget"
                                        onclick=""
                                        id="UBG_783468"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UBG_783468_bttn"
                                          aria-hidden="true"
                                          style="font-size:14px;"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  style="padding-left:10px;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  title=""
                                  id="conv783468"
                                ></td>
                                <td
                                  style="padding:0 10px;white-space:nowrap;text-align:right"
                                  id="convrate783468"
                                ></td>
                              </tr>

                              <input
                                type="Hidden"
                                id="UA_783397"
                                name="UA_783397"
                                value="1"
                                style=""
                              />

                              <tr
                                id="line_783397"
                                class="work_line"
                                onclick="workLine(this.id,);"
                              >
                                <td
                                  nowrap=""
                                  style="width:130px;text-align:center;border-left:none"
                                >
                                  <div style="display:flex">
                                    <div
                                      style="width:16%;"
                                      id="func_type_783397"
                                    >
                                      <div class="handle ui-sortable-handle">
                                        <i
                                          class="fa fa-bars"
                                          aria-hidden="true"
                                          style="cursor:n-resize;color:rgba(80,80,80,0.5);padding:4px 5px;font-size:11px;"
                                        ></i>
                                      </div>
                                    </div>
                                    <div
                                      style="width:16%;cursor:pointer;"
                                      id="status_box_783397"
                                    >
                                      <div
                                        title="Paused - click to resume"
                                        id="content_status_783397"
                                        onclick="PR_Func(783397,0);"
                                        class=""
                                        style="cursor:pointer;padding:2px 2px"
                                      >
                                        <i
                                          class="fa fa-step-forward"
                                          aria-hidden="true"
                                          style="color:var(--red);width:11px;overflow:hidden"
                                        ></i>
                                        <i
                                          class="fa fa-pause"
                                          style="color:var(--red);width:2px;overflow:hidden;"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <span
                                        style="display:none"
                                        id="running783397"
                                      >
                                        Paused
                                      </span>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-pencil fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="Preferences_button"
                                        title="Edit"
                                        onclick="Preferences_Func(783397);"
                                      ></i>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-copy fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="copy_button"
                                        title="Duplicate"
                                        onclick="Copy_Func(783397);"
                                      ></i>
                                    </div>
                                    <div style="width:16%">
                                      <i
                                        class="fa fa-archive fa-fw"
                                        aria-hidden="true"
                                        style="cursor:pointer;color:var(--greyBlue);padding:2px 5px"
                                        name="archive_button"
                                        title="Archive Campaign"
                                        onclick="Delete_Func(783397,3);"
                                      ></i>
                                    </div>
                                    <div
                                      id="buttons_control_3"
                                      style="cursor:pointer;"
                                    >
                                      <div
                                        name="More_button"
                                        title="Advanced Settings"
                                        id="more_funcs_783397"
                                        style="position:relative;margin: 4px 0 0 2px;"
                                        onclick="More_Func(1,783397,3,1);"
                                        onmouseover="document.getElementById('cog1_783397').className=document.getElementById('cog2_783397').className=document.getElementById('cog3_783397').className='fa fa-cog fa-spin'"
                                        onmouseout="document.getElementById('cog1_783397').className=document.getElementById('cog2_783397').className=document.getElementById('cog3_783397').className='fa fa-cog'"
                                      >
                                        <i
                                          class="fa fa-cog"
                                          id="cog1_783397"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:0;left:14px;font-size:7px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog2_783397"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:9px;left:15px;font-size:8px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog3_783397"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:2px;left:3px;font-size:14px"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  id="status783397"
                                  style="width:80px;padding-left:5px;white-space:nowrap;"
                                  nowrap=""
                                >
                                  <div style="text-align:center;display:flex;width:80px;">
                                    <div style="width:25%;;">
                                      <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                        style="padding:5px 4px;min-width:13px;font-size:12pt;float:left"
                                        title="Editorial Status: Approved"
                                        id="editorial_status_783397"
                                      ></i>
                                    </div>

                                    <span id="THR_783397" style="display:none">
                                      40
                                    </span>

                                    <div
                                      onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge40.png border=0 id=TDIMG783397 style=margin-right:10px align=absmiddle width=50><span id=TDTXT783397>Throttling: 40%</span></td></tr></table>')"
                                      onclick="User_Defined_Throttling_Func(783397);"
                                      style="width:25%;position:relative;cursor:pointer;;"
                                    >
                                      <div style="position:absolute;top:4px;left:8px;;">
                                        <span
                                          class="fa-stack fa-lg"
                                          style="transform:rotate(120deg);width:10pt;height:10pt;transform-origin:50% 100%;position:absolute;top:-2pt;"
                                        >
                                          <i
                                            class="fa fa-circle fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:#FFF;font-size:10pt;"
                                            title=""
                                            id="TIMG783397"
                                          ></i>
                                          <div style="position:absolute;top:-1pt;left:4.3pt">
                                            <i
                                              class="fa fa-long-arrow-up"
                                              style="color:var(--orange);padding:0;font-weight:normal;font-weight:bold;font-size:4.5pt;"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                          <i
                                            class="fa fa-circle-thin fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:var(--greyBlue);font-size:11pt;position:absolute;top:0pt;left:0pt;"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div style="width:25%;cursor:pointer;;">
                                      <i
                                        class="fa fa-stethoscope fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding-top:6px"
                                        name="limit_button"
                                        title="Campaign Health Analysis"
                                        onclick="Limit_Func(1,783397,3,1);"
                                      ></i>
                                    </div>
                                    <div style="width:25%;cursor:pointer;">
                                      <i
                                        class="fa fa-exclamation-triangle"
                                        id="NOSRCCLICKID783397"
                                        style="padding-top:7px;font-size:12px;z-index:4;color:var(--orange);"
                                        onclick="curr_selected = 'line_783397';selectLine('line_783397');popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_no_tracking_note.dbm?ID_Token=R150TN08K92EGQ9',500,280,'no')"
                                        title="Campaign Alert"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  title="Direct Mobile"
                                  id="ad_type783397"
                                  style="width:100px;white-space:nowrap;padding-left:10px"
                                >
                                  <div
                                    id="source_type_783397"
                                    style="padding:5px 5px 5px 0;float:left;position:relative;;"
                                    title="Source Type: Mainstream Traffic"
                                  >
                                    <i
                                      class="fa fa-circle-thin"
                                      aria-hidden="true"
                                      style="position:absolute;color:var(--greyBlue);font-size:15px;padding-bottom:1px"
                                    >
                                      <span style="position:absolute;left:3px;top:3pt;color:var(--greyBlue);font-size:8px;font-family:verdana">
                                        M
                                      </span>
                                    </i>
                                  </div>

                                  <i
                                    class="fa fa-mobile"
                                    onmouseover="return escape('<div style=width:300px>Mobile Targeting - ALL</div>')"
                                    onclick="More_Func(1,783397,3,1,'UA_Targeting_Func');"
                                    aria-hidden="true"
                                    style="color:var(--greyBlue);cursor:pointer;min-width:15px;text-align:center;font-size:17px;padding:4px 5px 4px 15px;"
                                    title=""
                                    id="what_device_783397"
                                  ></i>
                                  <span title="Direct">Direct</span>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  class="index"
                                  id="ORDER_783397"
                                  headers="3"
                                  title="783397"
                                >
                                  <span style=""></span>783397
                                </td>

                                <td
                                  style="min-width:80px;max-width:100%;white-space:nowrap;"
                                  id="ad_name_title_783397"
                                  title="UNI 3"
                                >
                                  <div style="display:flex;justify-content: space-between;">
                                    <div style="float:left">
                                      <span class="CNAME" id="cname_783397">
                                        <a
                                          href="javascript:void(0);"
                                          onclick="doAnalyticsReport_Func(this, 783397);"
                                        >
                                          <i
                                            class="fa fa-bar-chart"
                                            aria-hidden="true"
                                            style="color:var(--darkGreen);padding:0 3px;"
                                          ></i>
                                        </a>
                                        <input
                                          maxlength="45"
                                          style="background:none;outline:0;font-size:12px;font-family:'Open Sans','Open Sans', sans-serif;"
                                          class="vlad2"
                                          name="Name"
                                          id="ad_name_783397"
                                          value="UNI 3"
                                          onclick="document.getElementById('UAN_783397').className = 'fa fa-send-o';document.getElementById('UAN_783397').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;')"
                                        />
                                      </span>
                                    </div>
                                    <div style="float:right;padding:2px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;"
                                        title="Edit Ad Name"
                                        onclick="save_name(783397);"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UAN_783397"
                                          aria-hidden="true"
                                          style="opacity:0;font-size:14px;cursor:default"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;white-space:nowrap;width:90px;"
                                  title="0.05340"
                                >
                                  <div style="display:flex">
                                    <div style="display:flex">
                                      <div style="" width="20">
                                        <i
                                          class="fa fa-exclamation-triangle"
                                          aria-hidden="true"
                                          style="font-size:12px;color:rgba(0,0,0,0);position:relative;padding-top:16px;"
                                        ></i>
                                      </div>

                                      <div
                                        width="10"
                                        style="padding:10px 2px 0 10px;"
                                      >
                                        <a
                                          href="javascript:void(0);"
                                          id="CB_783397"
                                          onclick="Bids_Func(783397);"
                                          title="Change Bid"
                                          style="text-decoration:none;display:block;color:var(--darkGreen);font-size:13px"
                                        >
                                          $
                                        </a>
                                      </div>
                                      <div
                                        width="100%"
                                        style="position:relative;white-space:nowrap;"
                                      >
                                        <div style="padding:2px 0;min-width:70px;position:relative;display: flex;">
                                          <span style="cursor:text;color:inherit;">
                                            <div
                                              class="quantity"
                                              style="padding-top:3px"
                                            >
                                              <input
                                                type="number"
                                                title="Bid Range: $0.0020 - $3"
                                                id="max_bid_id783397"
                                                class="vlad"
                                                min="0.0001"
                                                max="100"
                                                step="0.0001"
                                                value="0.0534"
                                                onclick="document.getElementById('UB_783397').className = 'fa fa-send-o';document.getElementById('UB_783397').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1')"
                                                style="min-height:1px"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div width="20" style="padding:10px 5px;">
                                        <a
                                          href="javascript:void(0);"
                                          style="text-decoration:none;width:20px;"
                                          title="Submit Bid"
                                          onclick="Bids_Update_Func(783397);"
                                        >
                                          <i
                                            class="fa fa-send-o"
                                            id="UB_783397"
                                            aria-hidden="true"
                                            style="opacity:0;font-size:14px;cursor:default"
                                          ></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  title="Change Country Targeting"
                                >
                                  <a
                                    href="javascript:void(0);"
                                    style="text-decoration:none;color:inherit;position:relative;font-family:'Open Sans';"
                                    onclick="More_Func(1,783397,3,1,'Geographical_Func');"
                                    id="targeting783397"
                                  >
                                    <i
                                      class="fa fa-globe"
                                      aria-hidden="true"
                                      style="color:var(--greyBlue);"
                                      onmouseover="return escape('<span style=font-family:Courier>US   CA   UK</span>')"
                                    ></i>
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="requests783397"
                                  title="0"
                                >
                                  0
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="vidimps783397"
                                  title="Available only for Video Ads"
                                >
                                  -
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  id="visits783397"
                                  title="0"
                                >
                                  0
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;"
                                  title="0"
                                >
                                  0.00%
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  title="0"
                                >
                                  $0.00
                                </td>

                                <td
                                  id="daily_budget_td783397"
                                  style="width:105px;white-space:nowrap;text-align:right;;"
                                  title="5"
                                >
                                  <div style="display:flex;float:left">
                                    <div style="padding:10px 2px 0 0;font-size:13px;">
                                      $
                                    </div>
                                    <div
                                      class="quantity"
                                      style="padding-top:7px"
                                    >
                                      <input
                                        type="number"
                                        style="width:65px;min-height:1px;padding-left:4px;"
                                        id="daily_budget783397"
                                        class="vlad"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        value="5.00"
                                        onclick="enableSend('UBG',783397);"
                                      />
                                      <input
                                        type="hidden"
                                        id="daily_budget_org783397"
                                        value="5.00"
                                      />
                                    </div>
                                    <div width="20" style="padding:10px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;opacity:0;cursor:default"
                                        title="Submit Budget"
                                        onclick=""
                                        id="UBG_783397"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UBG_783397_bttn"
                                          aria-hidden="true"
                                          style="font-size:14px;"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  style="padding-left:10px;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  title=""
                                  id="conv783397"
                                ></td>
                                <td
                                  style="padding:0 10px;white-space:nowrap;text-align:right"
                                  id="convrate783397"
                                ></td>
                              </tr>

                              <input
                                type="Hidden"
                                id="UA_783296"
                                name="UA_783296"
                                value="1"
                                style=""
                              />

                              <tr
                                id="line_783296"
                                class="work_line"
                                onclick="workLine(this.id,);"
                              >
                                <td
                                  nowrap=""
                                  style="width:130px;text-align:center;border-left:none"
                                >
                                  <div style="display:flex">
                                    <div
                                      style="width:16%;"
                                      id="func_type_783296"
                                    >
                                      <div class="handle ui-sortable-handle">
                                        <i
                                          class="fa fa-bars"
                                          aria-hidden="true"
                                          style="cursor:n-resize;color:rgba(80,80,80,0.5);padding:4px 5px;font-size:11px;"
                                        ></i>
                                      </div>
                                    </div>
                                    <div
                                      style="width:16%;cursor:pointer;"
                                      id="status_box_783296"
                                    >
                                      <div
                                        title="Paused - click to resume"
                                        id="content_status_783296"
                                        onclick="PR_Func(783296,0);"
                                        class=""
                                        style="cursor:pointer;padding:2px 2px"
                                      >
                                        <i
                                          class="fa fa-step-forward"
                                          aria-hidden="true"
                                          style="color:var(--red);width:11px;overflow:hidden"
                                        ></i>
                                        <i
                                          class="fa fa-pause"
                                          style="color:var(--red);width:2px;overflow:hidden;"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <span
                                        style="display:none"
                                        id="running783296"
                                      >
                                        Paused
                                      </span>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-pencil fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="Preferences_button"
                                        title="Edit"
                                        onclick="Preferences_Func(783296);"
                                      ></i>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-copy fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="copy_button"
                                        title="Duplicate"
                                        onclick="Copy_Func(783296);"
                                      ></i>
                                    </div>
                                    <div style="width:16%">
                                      <i
                                        class="fa fa-archive fa-fw"
                                        aria-hidden="true"
                                        style="cursor:pointer;color:var(--greyBlue);padding:2px 5px"
                                        name="archive_button"
                                        title="Archive Campaign"
                                        onclick="Delete_Func(783296,4);"
                                      ></i>
                                    </div>
                                    <div
                                      id="buttons_control_4"
                                      style="cursor:pointer;"
                                    >
                                      <div
                                        name="More_button"
                                        title="Advanced Settings"
                                        id="more_funcs_783296"
                                        style="position:relative;margin: 4px 0 0 2px;"
                                        onclick="More_Func(1,783296,4,3);"
                                        onmouseover="document.getElementById('cog1_783296').className=document.getElementById('cog2_783296').className=document.getElementById('cog3_783296').className='fa fa-cog fa-spin'"
                                        onmouseout="document.getElementById('cog1_783296').className=document.getElementById('cog2_783296').className=document.getElementById('cog3_783296').className='fa fa-cog'"
                                      >
                                        <i
                                          class="fa fa-cog"
                                          id="cog1_783296"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:0;left:14px;font-size:7px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog2_783296"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:9px;left:15px;font-size:8px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog3_783296"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:2px;left:3px;font-size:14px"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  id="status783296"
                                  style="width:80px;padding-left:5px;white-space:nowrap;"
                                  nowrap=""
                                >
                                  <div style="text-align:center;display:flex;width:80px;">
                                    <div style="width:25%;;">
                                      <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                        style="padding:5px 4px;min-width:13px;font-size:12pt;float:left"
                                        title="Editorial Status: Approved"
                                        id="editorial_status_783296"
                                      ></i>
                                    </div>

                                    <span id="THR_783296" style="display:none">
                                      100
                                    </span>

                                    <div
                                      onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge100.png border=0 id=TDIMG783296 style=margin-right:10px align=absmiddle width=50><span id=TDTXT783296>Throttling: 100%</span></td></tr></table>')"
                                      onclick="User_Defined_Throttling_Func(783296);"
                                      style="width:25%;position:relative;cursor:pointer;;"
                                    >
                                      <div style="position:absolute;top:1px;left:2px;">
                                        <span
                                          class="fa-stack fa-lg"
                                          style="transform:rotate(300deg);width:10pt;height:10pt;transform-origin:50% 100%;position:absolute;top:-2pt;"
                                        >
                                          <i
                                            class="fa fa-circle fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:#FFF;font-size:10pt;"
                                            title=""
                                            id="TIMG783296"
                                          ></i>
                                          <div style="position:absolute;top:-1pt;left:4.3pt">
                                            <i
                                              class="fa fa-long-arrow-up"
                                              style="color:var(--lightGreen);padding:0;font-weight:normal;font-weight:bold;font-size:4.5pt;"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                          <i
                                            class="fa fa-circle-thin fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:var(--greyBlue);font-size:11.8pt;position:absolute;top:0pt;left:0pt;"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div style="width:25%;cursor:pointer;;">
                                      <i
                                        class="fa fa-stethoscope fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding-top:6px"
                                        name="limit_button"
                                        title="Campaign Health Analysis"
                                        onclick="Limit_Func(1,783296,4,3);"
                                      ></i>
                                    </div>
                                    <div style="width:25%;cursor:pointer;">
                                      <i
                                        class="fa fa-exclamation-triangle"
                                        id="NOSRCCLICKID783296"
                                        style="padding-top:7px;font-size:12px;z-index:4;color:var(--orange);"
                                        onclick="curr_selected = 'line_783296';selectLine('line_783296');popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_no_tracking_note.dbm?ID_Token=R150TN08K92EGQ9',500,280,'no')"
                                        title="Campaign Alert"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  title="Native Mobile"
                                  id="ad_type783296"
                                  style="width:100px;white-space:nowrap;padding-left:10px"
                                >
                                  <div
                                    id="source_type_783296"
                                    style="padding:5px 5px 5px 0;float:left;position:relative;;"
                                    title="Source Type: Mainstream Traffic"
                                  >
                                    <i
                                      class="fa fa-circle-thin"
                                      aria-hidden="true"
                                      style="position:absolute;color:var(--greyBlue);font-size:15px;padding-bottom:1px"
                                    >
                                      <span style="position:absolute;left:3px;top:3pt;color:var(--greyBlue);font-size:8px;font-family:verdana">
                                        M
                                      </span>
                                    </i>
                                  </div>

                                  <i
                                    class="fa fa-mobile"
                                    onmouseover="return escape('<div style=width:300px>Mobile Targeting - ALL</div>')"
                                    onclick="More_Func(1,783296,4,3,'UA_Targeting_Func');"
                                    aria-hidden="true"
                                    style="color:var(--greyBlue);cursor:pointer;min-width:15px;text-align:center;font-size:17px;padding:4px 5px 4px 15px;"
                                    title=""
                                    id="what_device_783296"
                                  ></i>
                                  <span title="Native">Native</span>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  class="index"
                                  id="ORDER_783296"
                                  headers="4"
                                  title="783296"
                                >
                                  <span style=""></span>783296
                                </td>

                                <td
                                  style="min-width:80px;max-width:100%;white-space:nowrap;"
                                  id="ad_name_title_783296"
                                  title="UniBot Solar"
                                >
                                  <div style="display:flex;justify-content: space-between;">
                                    <div style="float:left">
                                      <span class="CNAME" id="cname_783296">
                                        <a
                                          href="javascript:void(0);"
                                          onclick="doAnalyticsReport_Func(this, 783296);"
                                        >
                                          <i
                                            class="fa fa-bar-chart"
                                            aria-hidden="true"
                                            style="color:var(--darkGreen);padding:0 3px;"
                                          ></i>
                                        </a>
                                        <input
                                          maxlength="45"
                                          style="background:none;outline:0;font-size:12px;font-family:'Open Sans','Open Sans', sans-serif;"
                                          class="vlad2"
                                          name="Name"
                                          id="ad_name_783296"
                                          value="UniBot Solar"
                                          onclick="document.getElementById('UAN_783296').className = 'fa fa-send-o';document.getElementById('UAN_783296').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;')"
                                        />
                                      </span>
                                    </div>
                                    <div style="float:right;padding:2px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;"
                                        title="Edit Ad Name"
                                        onclick="save_name(783296);"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UAN_783296"
                                          aria-hidden="true"
                                          style="opacity:0;font-size:14px;cursor:default"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;white-space:nowrap;width:90px;"
                                  title="0.00200"
                                >
                                  <div style="display:flex">
                                    <div style="display:flex">
                                      <div style="" width="20">
                                        <i
                                          class="fa fa-exclamation-triangle"
                                          aria-hidden="true"
                                          onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td>Country</td><td style=white-space:nowrap; class=msb_table_bid>Effective Bid</td><td style=white-space:nowrap; class=\'msb_table_bid mab783296\'>Bid Range</td><td></td></tr><tr style=opacity:1><td bgcolor=F6F8FA nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg align=absmiddle class=msb_table_country_name width=15>US</td><td bgcolor=F6F8FA class=msb_table_bid nowrap>$0.1651</td><td bgcolor=F6F8FA class=\'msb_table_bid mab783296\' nowrap>$0.0020 - $5.0</td><td bgcolor=F6F8FA class=msb_table_bid nowrap></td><td bgcolor=F6F8FA><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr><tr style=opacity:1><td bgcolor=FFFFFF nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/UK.svg align=absmiddle class=msb_table_country_name width=15>UK</td><td bgcolor=FFFFFF class=msb_table_bid nowrap>$0.1017</td><td bgcolor=FFFFFF class=\'msb_table_bid mab783296\' nowrap>$0.0010 - $5.0</td><td bgcolor=FFFFFF class=msb_table_bid nowrap></td><td bgcolor=FFFFFF><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr><tr style=opacity:1><td bgcolor=F6F8FA nowrap align=left class=msb_table_flag><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/AU.svg align=absmiddle class=msb_table_country_name width=15>AU</td><td bgcolor=F6F8FA class=msb_table_bid nowrap>$0.0515</td><td bgcolor=F6F8FA class=\'msb_table_bid mab783296\' nowrap>$0.0020 - $5.0</td><td bgcolor=F6F8FA class=msb_table_bid nowrap></td><td bgcolor=F6F8FA><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:10px 3px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr></table>')"
                                          style="font-size:12px;color:var(--orange);position:relative;cursor:pointer;padding-top:16px;"
                                          onclick="popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_recommended_min_bids.dbm?ID_Token=R150TN08K92EGQ9&amp;MAX_BID=5.0&amp;getIP_TARGETING=US,UK,AU&amp;getTYPE=MOBILE&amp;getZCLICK=4&amp;getAdult=Mainstream&amp;getBID=0.002',550,210,'no')"
                                        ></i>
                                      </div>

                                      <div
                                        width="10"
                                        style="padding:10px 2px 0 10px;"
                                      >
                                        <a
                                          href="javascript:void(0);"
                                          id="CB_783296"
                                          onclick="Bids_Func(783296);"
                                          title="Change Bid"
                                          style="text-decoration:none;display:block;color:var(--darkGreen);font-size:13px"
                                        >
                                          $
                                        </a>
                                      </div>
                                      <div
                                        width="100%"
                                        style="position:relative;white-space:nowrap;"
                                      >
                                        <div style="padding:2px 0;min-width:70px;position:relative;display: flex;">
                                          <span style="cursor:text;color:inherit;">
                                            <div
                                              class="quantity"
                                              style="padding-top:3px"
                                            >
                                              <input
                                                type="number"
                                                title="Bid Range: $0.0020 - $5.0"
                                                id="max_bid_id783296"
                                                class="vlad"
                                                min="0.0001"
                                                max="100"
                                                step="0.0001"
                                                value="0.0020"
                                                onclick="document.getElementById('UB_783296').className = 'fa fa-send-o';document.getElementById('UB_783296').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1')"
                                                style="min-height:1px"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div width="20" style="padding:10px 5px;">
                                        <a
                                          href="javascript:void(0);"
                                          style="text-decoration:none;width:20px;"
                                          title="Submit Bid"
                                          onclick="Bids_Update_Func(783296);"
                                        >
                                          <i
                                            class="fa fa-send-o"
                                            id="UB_783296"
                                            aria-hidden="true"
                                            style="opacity:0;font-size:14px;cursor:default"
                                          ></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  title="Change Country Targeting"
                                >
                                  <a
                                    href="javascript:void(0);"
                                    style="text-decoration:none;color:inherit;position:relative;font-family:'Open Sans';"
                                    onclick="More_Func(1,783296,4,3,'Geographical_Func');"
                                    id="targeting783296"
                                  >
                                    <i
                                      class="fa fa-globe"
                                      aria-hidden="true"
                                      style="color:var(--greyBlue);"
                                      onmouseover="return escape('<span style=font-family:Courier>US   UK   AU</span>')"
                                    ></i>
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="requests783296"
                                  title="0"
                                >
                                  0
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="vidimps783296"
                                  title="Available only for Video Ads"
                                >
                                  -
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  id="visits783296"
                                  title="0"
                                >
                                  0
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;"
                                  title="0"
                                >
                                  0.00%
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  title="0"
                                >
                                  $0.00
                                </td>

                                <td
                                  id="daily_budget_td783296"
                                  style="width:105px;white-space:nowrap;text-align:right;;"
                                  title="5"
                                >
                                  <div style="display:flex;float:left">
                                    <div style="padding:10px 2px 0 0;font-size:13px;">
                                      $
                                    </div>
                                    <div
                                      class="quantity"
                                      style="padding-top:7px"
                                    >
                                      <input
                                        type="number"
                                        style="width:65px;min-height:1px;padding-left:4px;"
                                        id="daily_budget783296"
                                        class="vlad"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        value="5.00"
                                        onclick="enableSend('UBG',783296);"
                                      />
                                      <input
                                        type="hidden"
                                        id="daily_budget_org783296"
                                        value="5.00"
                                      />
                                    </div>
                                    <div width="20" style="padding:10px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;opacity:0;cursor:default"
                                        title="Submit Budget"
                                        onclick=""
                                        id="UBG_783296"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UBG_783296_bttn"
                                          aria-hidden="true"
                                          style="font-size:14px;"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  style="padding-left:10px;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  title=""
                                  id="conv783296"
                                ></td>
                                <td
                                  style="padding:0 10px;white-space:nowrap;text-align:right"
                                  id="convrate783296"
                                ></td>
                              </tr>

                              <input
                                type="Hidden"
                                id="UA_755621"
                                name="UA_755621"
                                value="1"
                                style=""
                              />

                              <tr
                                id="line_755621"
                                class="work_line"
                                onclick="workLine(this.id,);"
                              >
                                <td
                                  nowrap=""
                                  style="width:130px;text-align:center;border-left:none"
                                >
                                  <div style="display:flex">
                                    <div
                                      style="width:16%;"
                                      id="func_type_755621"
                                    >
                                      <div class="handle ui-sortable-handle">
                                        <i
                                          class="fa fa-bars"
                                          aria-hidden="true"
                                          style="cursor:n-resize;color:rgba(80,80,80,0.5);padding:4px 5px;font-size:11px;"
                                        ></i>
                                      </div>
                                    </div>
                                    <div
                                      style="width:16%;cursor:pointer;"
                                      id="status_box_755621"
                                    >
                                      <div
                                        title="Paused - click to resume"
                                        id="content_status_755621"
                                        onclick="PR_Func(755621,0);"
                                        class=""
                                        style="cursor:pointer;padding:2px 2px"
                                      >
                                        <i
                                          class="fa fa-step-forward"
                                          aria-hidden="true"
                                          style="color:var(--red);width:11px;overflow:hidden"
                                        ></i>
                                        <i
                                          class="fa fa-pause"
                                          style="color:var(--red);width:2px;overflow:hidden;"
                                          aria-hidden="true"
                                        ></i>
                                      </div>
                                      <span
                                        style="display:none"
                                        id="running755621"
                                      >
                                        Paused
                                      </span>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-pencil fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="Preferences_button"
                                        title="Edit"
                                        onclick="Preferences_Func(755621);"
                                      ></i>
                                    </div>
                                    <div style="width:16%;cursor:pointer;">
                                      <i
                                        class="fa fa-copy fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding:2px 5px"
                                        name="copy_button"
                                        title="Duplicate"
                                        onclick="Copy_Func(755621);"
                                      ></i>
                                    </div>
                                    <div style="width:16%">
                                      <i
                                        class="fa fa-archive fa-fw"
                                        aria-hidden="true"
                                        style="cursor:pointer;color:var(--greyBlue);padding:2px 5px"
                                        name="archive_button"
                                        title="Archive Campaign"
                                        onclick="Delete_Func(755621,5);"
                                      ></i>
                                    </div>
                                    <div
                                      id="buttons_control_5"
                                      style="cursor:pointer;"
                                    >
                                      <div
                                        name="More_button"
                                        title="Advanced Settings"
                                        id="more_funcs_755621"
                                        style="position:relative;margin: 4px 0 0 2px;"
                                        onclick="More_Func(1,755621,5,3);"
                                        onmouseover="document.getElementById('cog1_755621').className=document.getElementById('cog2_755621').className=document.getElementById('cog3_755621').className='fa fa-cog fa-spin'"
                                        onmouseout="document.getElementById('cog1_755621').className=document.getElementById('cog2_755621').className=document.getElementById('cog3_755621').className='fa fa-cog'"
                                      >
                                        <i
                                          class="fa fa-cog"
                                          id="cog1_755621"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:0;left:14px;font-size:7px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog2_755621"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:9px;left:15px;font-size:8px"
                                        ></i>
                                        <i
                                          class="fa fa-cog"
                                          id="cog3_755621"
                                          aria-hidden="true"
                                          style="color:var(--greyBlue);position:absolute;top:2px;left:3px;font-size:14px"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  id="status755621"
                                  style="width:80px;padding-left:5px;white-space:nowrap;"
                                  nowrap=""
                                >
                                  <div style="text-align:center;display:flex;width:80px;">
                                    <div style="width:25%;;">
                                      <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                        style="padding:5px 4px;min-width:13px;font-size:12pt;float:left"
                                        title="Editorial Status: Approved"
                                        id="editorial_status_755621"
                                      ></i>
                                    </div>

                                    <span id="THR_755621" style="display:none">
                                      100
                                    </span>

                                    <div
                                      onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge100.png border=0 id=TDIMG755621 style=margin-right:10px align=absmiddle width=50><span id=TDTXT755621>Throttling: 100%</span></td></tr></table>')"
                                      onclick="User_Defined_Throttling_Func(755621);"
                                      style="width:25%;position:relative;cursor:pointer;;"
                                    >
                                      <div style="position:absolute;top:1px;left:2px;">
                                        <span
                                          class="fa-stack fa-lg"
                                          style="transform:rotate(300deg);width:10pt;height:10pt;transform-origin:50% 100%;position:absolute;top:-2pt;"
                                        >
                                          <i
                                            class="fa fa-circle fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:#FFF;font-size:10pt;"
                                            title=""
                                            id="TIMG755621"
                                          ></i>
                                          <div style="position:absolute;top:-1pt;left:4.3pt">
                                            <i
                                              class="fa fa-long-arrow-up"
                                              style="color:var(--lightGreen);padding:0;font-weight:normal;font-weight:bold;font-size:4.5pt;"
                                              aria-hidden="true"
                                            ></i>
                                          </div>
                                          <i
                                            class="fa fa-circle-thin fa-stack-1x"
                                            aria-hidden="true"
                                            style="color:var(--greyBlue);font-size:11.8pt;position:absolute;top:0pt;left:0pt;"
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div style="width:25%;cursor:pointer;;">
                                      <i
                                        class="fa fa-stethoscope fa-fw"
                                        aria-hidden="true"
                                        style="color:var(--greyBlue);padding-top:6px"
                                        name="limit_button"
                                        title="Campaign Health Analysis"
                                        onclick="Limit_Func(1,755621,5,3);"
                                      ></i>
                                    </div>
                                    <div style="width:25%;cursor:pointer;">
                                      <i
                                        class="fa fa-exclamation-triangle"
                                        id="NOSRCCLICKID755621"
                                        style="padding-top:7px;font-size:12px;z-index:4;color:var(--orange);"
                                        onclick="curr_selected = 'line_755621';selectLine('line_755621');popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_no_tracking_note.dbm?ID_Token=R150TN08K92EGQ9',500,280,'no')"
                                        title="Campaign Alert"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  title="InPage Mobile"
                                  id="ad_type755621"
                                  style="width:100px;white-space:nowrap;padding-left:10px"
                                >
                                  <div
                                    id="source_type_755621"
                                    style="padding:5px 5px 5px 0;float:left;position:relative;;"
                                    title="Source Type: Mainstream Traffic"
                                  >
                                    <i
                                      class="fa fa-circle-thin"
                                      aria-hidden="true"
                                      style="position:absolute;color:var(--greyBlue);font-size:15px;padding-bottom:1px"
                                    >
                                      <span style="position:absolute;left:3px;top:3pt;color:var(--greyBlue);font-size:8px;font-family:verdana">
                                        M
                                      </span>
                                    </i>
                                  </div>

                                  <i
                                    class="fa fa-mobile"
                                    onmouseover="return escape('<div style=width:300px>Mobile Targeting - ALL</div>')"
                                    onclick="More_Func(1,755621,5,3,'UA_Targeting_Func');"
                                    aria-hidden="true"
                                    style="color:var(--greyBlue);cursor:pointer;min-width:15px;text-align:center;font-size:17px;padding:4px 5px 4px 15px;"
                                    title=""
                                    id="what_device_755621"
                                  ></i>
                                  <span title="InPage">InPage</span>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  class="index"
                                  id="ORDER_755621"
                                  headers="5"
                                  title="755621"
                                >
                                  <span style=""></span>755621
                                </td>

                                <td
                                  style="min-width:80px;max-width:100%;white-space:nowrap;"
                                  id="ad_name_title_755621"
                                  title="new 1"
                                >
                                  <div style="display:flex;justify-content: space-between;">
                                    <div style="float:left">
                                      <span class="CNAME" id="cname_755621">
                                        <a
                                          href="javascript:void(0);"
                                          onclick="doAnalyticsReport_Func(this, 755621);"
                                        >
                                          <i
                                            class="fa fa-bar-chart"
                                            aria-hidden="true"
                                            style="color:var(--darkGreen);padding:0 3px;"
                                          ></i>
                                        </a>
                                        <input
                                          maxlength="45"
                                          style="background:none;outline:0;font-size:12px;font-family:'Open Sans','Open Sans', sans-serif;"
                                          class="vlad2"
                                          name="Name"
                                          id="ad_name_755621"
                                          value="new 1"
                                          onclick="document.getElementById('UAN_755621').className = 'fa fa-send-o';document.getElementById('UAN_755621').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;')"
                                        />
                                      </span>
                                    </div>
                                    <div style="float:right;padding:2px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;"
                                        title="Edit Ad Name"
                                        onclick="save_name(755621);"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UAN_755621"
                                          aria-hidden="true"
                                          style="opacity:0;font-size:14px;cursor:default"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;white-space:nowrap;width:90px;"
                                  title="0.00044"
                                >
                                  <div style="display:flex">
                                    <div style="display:flex">
                                      <div style="" width="20">
                                        <i
                                          class="fa fa-exclamation-triangle"
                                          aria-hidden="true"
                                          onmouseover="return escape('<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td>Country</td><td style=white-space:nowrap; class=msb_table_bid>Effective Bid</td><td></td></tr><tr><td bgcolor=F6F8FA class=msb_table_flag style=white-space:nowrap;text-align:left><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg align=absmiddle class=msb_table_country_name width=15>US</td><td bgcolor=F6F8FA class=msb_table_bid style=white-space:nowrap;>$0.002426</td><td bgcolor=F6F8FA><i class=\'fa fa-exclamation-triangle\' style=\'font-size:12px;color:var(--orange);float:right;padding:6px;cursor:pointer\' aria-hidden=\'true\'></i></td></tr></table>')"
                                          style="font-size:12px;color:var(--orange);position:relative;cursor:pointer;padding-top:16px;"
                                          onclick="popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_recommended_min_bids.dbm?ID_Token=R150TN08K92EGQ9&amp;MAX_BID=1.25&amp;getIP_TARGETING=US&amp;getTYPE=MOBILE&amp;getZCLICK=0&amp;getAdult=Mainstream&amp;getBID=0.00044',550,150,'no')"
                                        ></i>
                                      </div>

                                      <div
                                        width="10"
                                        style="padding:10px 2px 0 10px;"
                                      >
                                        <a
                                          href="javascript:void(0);"
                                          id="CB_755621"
                                          onclick="Bids_Func(755621);"
                                          title="Change Bid"
                                          style="text-decoration:none;display:block;color:var(--darkGreen);font-size:13px"
                                        >
                                          $
                                        </a>
                                      </div>
                                      <div
                                        width="100%"
                                        style="position:relative;white-space:nowrap;"
                                      >
                                        <div style="padding:2px 0;min-width:70px;position:relative;display: flex;">
                                          <span style="cursor:text;color:inherit;">
                                            <div
                                              class="quantity"
                                              style="padding-top:3px"
                                            >
                                              <input
                                                type="number"
                                                title="Bid Range: $0.00044 - $1.25"
                                                id="max_bid_id755621"
                                                class="vlad"
                                                min="0.00001"
                                                max="100"
                                                step="0.00001"
                                                value="0.00044"
                                                onclick="document.getElementById('UB_755621').className = 'fa fa-send-o';document.getElementById('UB_755621').setAttribute('style','color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1')"
                                                style="min-height:1px"
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div width="20" style="padding:10px 5px;">
                                        <a
                                          href="javascript:void(0);"
                                          style="text-decoration:none;width:20px;"
                                          title="Submit Bid"
                                          onclick="Bids_Update_Func(755621);"
                                        >
                                          <i
                                            class="fa fa-send-o"
                                            id="UB_755621"
                                            aria-hidden="true"
                                            style="opacity:0;font-size:14px;cursor:default"
                                          ></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  title="Change Country Targeting"
                                >
                                  <a
                                    href="javascript:void(0);"
                                    style="border-bottom:1px dotted grey;text-decoration:none;color:inherit;position:relative;font-family:'Open Sans';"
                                    onclick="More_Func(1,755621,5,3,'Geographical_Func');"
                                    id="targeting755621"
                                  >
                                    US
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="requests755621"
                                  title="0"
                                >
                                  0
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:75px;"
                                  id="vidimps755621"
                                  title="Available only for Video Ads"
                                >
                                  -
                                </td>
                                <td
                                  align="left"
                                  style="padding-left:5px;width:50px;"
                                  id="visits755621"
                                  title="0"
                                >
                                  0
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;"
                                  title="0"
                                >
                                  0.00%
                                </td>

                                <td
                                  align="right"
                                  style="padding-left:10px;width:50px;white-space:nowrap;"
                                  title="0"
                                >
                                  $0.00
                                </td>

                                <td
                                  id="daily_budget_td755621"
                                  style="width:105px;white-space:nowrap;text-align:right;;"
                                  title="5"
                                >
                                  <div style="display:flex;float:left">
                                    <div style="padding:10px 2px 0 0;font-size:13px;">
                                      $
                                    </div>
                                    <div
                                      class="quantity"
                                      style="padding-top:7px"
                                    >
                                      <input
                                        type="number"
                                        style="width:65px;min-height:1px;padding-left:4px;"
                                        id="daily_budget755621"
                                        class="vlad"
                                        min="0"
                                        max="10000"
                                        step="1"
                                        value="5.00"
                                        onclick="enableSend('UBG',755621);"
                                      />
                                      <input
                                        type="hidden"
                                        id="daily_budget_org755621"
                                        value="5.00"
                                      />
                                    </div>
                                    <div width="20" style="padding:10px 5px;">
                                      <a
                                        href="javascript:void(0);"
                                        style="text-decoration:none;width:20px;opacity:0;cursor:default"
                                        title="Submit Budget"
                                        onclick=""
                                        id="UBG_755621"
                                      >
                                        <i
                                          class="fa fa-send-o"
                                          id="UBG_755621_bttn"
                                          aria-hidden="true"
                                          style="font-size:14px;"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  style="padding-left:10px;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  title=""
                                  id="conv755621"
                                ></td>
                                <td
                                  style="padding:0 10px;white-space:nowrap;text-align:right"
                                  id="convrate755621"
                                ></td>
                              </tr>
                            </tbody>

                            <tfoot>
                              <tr>
                                <td
                                  align="left"
                                  style="line-height:35px;"
                                  colspan="2"
                                >
                                  <div
                                    title="Pause all"
                                    style="padding:2px 5px 0 23px;float:left"
                                  >
                                    <i
                                      class="fa fa-step-forward"
                                      aria-hidden="true"
                                      style="color:#fc7c7c;width:9px;overflow:hidden"
                                    ></i>
                                    <i
                                      class="fa fa-pause"
                                      style="color:#fc7c7c;width:2px;overflow:hidden;"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    style="float:left"
                                    onclick="Pause_Func(2);"
                                  >
                                    Pause all
                                  </a>
                                  <div
                                    title="Resume all"
                                    style="padding:2px 5px 0 40px;float:left"
                                  >
                                    <i
                                      class="fa fa-step-forward"
                                      aria-hidden="true"
                                      style="color:var(--darkGreen);width:9px;overflow:hidden"
                                    ></i>
                                    <i
                                      class="fa fa-pause"
                                      style="color:var(--darkGreen);width:2px;overflow:hidden;"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <a
                                    href="javascript:void(0);"
                                    style="float:left;"
                                    onclick="Run_Func(2);"
                                  >
                                    Resume all
                                  </a>
                                </td>
                                <td
                                  align="left"
                                  style="line-height:35px;padding-left:30px;"
                                  colspan="3"
                                >
                                  <div style="float:left;">
                                    <span
                                      style="float:left;line-height:15px;position:relative;padding-right:10px;text-decoration:underline;text-decoration-style:dotted;cursor:help;font-size:12px;"
                                      onmouseover="return escape('<b>How can I change the order in which the campains are displayed?</b><br><br>You can change your campaigns\' order by way of <i>Drag and Drop</i> each line to a new position.<br>Once you are done, hit the <b><i class=\'fa fa-floppy-o\' style=color:#505050 aria-hidden=true></i></b> button.<br>To reset the order, just hit the <b><i class=\'fa fa-undo\' style=color:#505050 aria-hidden=true></i></b> button');"
                                    >
                                      Re-Order Table:{" "}
                                    </span>
                                    <a
                                      onclick="save_order()"
                                      style="cursor:pointer;float:left;font-size:12px;line-height:15px"
                                    >
                                      <i
                                        class="fa fa-floppy-o"
                                        id="or_save"
                                        style="color:rgba(80,80,80,0.3);margin-right:5px;"
                                        aria-hidden="true"
                                      ></i>
                                      <u>Save</u>
                                    </a>
                                    <a
                                      onclick="clear_order()"
                                      style="cursor:pointer;float:left;margin-left:10px;font-size:12px;line-height:15px"
                                    >
                                      <i
                                        class="fa fa-undo"
                                        id="or_clear"
                                        style="color:rgba(80,80,80,0.3);margin-right:5px;"
                                        aria-hidden="true"
                                      ></i>
                                      <u>Clear</u>
                                    </a>
                                  </div>
                                </td>
                                <td
                                  align="right"
                                  style="line-height:35px;padding-right:20px;"
                                  colspan="2"
                                >
                                  <b>Total</b>
                                </td>
                                <td
                                  style="padding-left:5px;text-align:left"
                                  id="requests_tot"
                                >
                                  0
                                </td>
                                <td
                                  style="padding-left:5px;text-align:left"
                                  id="vidimp_tot"
                                >
                                  0
                                </td>
                                <td
                                  style="padding-left:5px;text-align:left"
                                  id="visits_tot"
                                >
                                  0
                                </td>
                                <td
                                  style="padding-left:10px;text-align:right"
                                  id="ctr_tot"
                                >
                                  0.00%
                                </td>
                                <td
                                  style="padding-left:10px;white-space:nowrap;text-align:right"
                                  id="cost_tot"
                                >
                                  $0.00
                                </td>

                                <td
                                  style="padding-left:10px;white-space:nowrap;text-align:right"
                                  id="budget_tot"
                                ></td>

                                <td
                                  align="left"
                                  style="padding-left:10px;text-align:right;border-left:1px solid rgba(0, 0, 0, 0.15)"
                                  id="conv_tot"
                                >
                                  0
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </tfoot>
                          </table>

                          <table
                            border="0"
                            width="100%"
                            class="main_table_style"
                            style="margin-top:15px;"
                          >
                            <tbody>
                              <tr style="border:0;">
                                <td style="background-color:white;">
                                  <div style="display:flex;float:left">
                                    <a
                                      id="dl_csv_full"
                                      style="display:none;cursor:pointer;float:right;font-size:12px;line-height:15px;padding:3px;"
                                    >
                                      <i
                                        class="fa fa-file-excel-o"
                                        aria-hidden="true"
                                        style="color:var(--darkGreen);margin-right:5px;"
                                        title="Export as .csv file"
                                      ></i>
                                      <u>All Campaigns</u>
                                    </a>
                                    <a
                                      id="dl_csv"
                                      style="display:none;cursor:pointer;float:right;font-size:12px;line-height:15px;padding:3px;"
                                    >
                                      <i
                                        class="fa fa-file-excel-o"
                                        aria-hidden="true"
                                        style="color:var(--darkGreen);margin-right:5px;"
                                        title="Export as .csv file"
                                      ></i>
                                      <u>Displayed Campaigns</u>
                                    </a>
                                    <select
                                      name="car"
                                      onchange="if(this.value != 'default')get_csv(this.value)"
                                      style="min-width:145px;margin:5px"
                                    >
                                      <option value="default">
                                        Export Campaigns
                                      </option>
                                      <option value="">Current Page</option>
                                      <option value="_full">
                                        All Campaigns
                                      </option>
                                    </select>
                                  </div>

                                  <div style="display:flex;float:right">
                                    <div style="float:left">
                                      Show
                                      <select
                                        style="min-width:55px;margin:5px"
                                        onchange="document.report_form2.maxRows.value = this.value;document.report_form2.submit();"
                                      >
                                        <option value="10"> 10 </option>
                                        <option value="20"> 20 </option>
                                        <option value="50" selected="">
                                          {" "}
                                          50{" "}
                                        </option>
                                        <option value="100"> 100 </option>
                                        <option value="5"> ALL </option>
                                      </select>
                                      Campaings per page out of 5
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

                  <span id="SO"></span>
                </td>
              </tr>
            </tbody>
          </table>

          <iframe
            src="cssLoader.dbm?ID_Token=R150TN08K92EGQ9"
            style="display:none"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ManageComapings;
