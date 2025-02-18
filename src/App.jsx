import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import ChartComponent from "./components/ChartComponent";
import axios from "axios";
import Test from "./pages/Test";
import PopUpItem from "./components/PopUpItem";
import moment from "moment";
const App = ({ handlepopupclick }) => {
  const navigate = useNavigate();
  const [timeframe, setTimeFrame] = useState("");
  const [showcharts, setshowCharts] = useState(false);

  const [campaignsPerPage, setCampaignsPerPage] = useState("50");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showstartdatePicker, setshowstartdatepicker] = useState(false);
  const [showendtdatePicker, setshowendtdatepicker] = useState(false);
  // Set default start and end date to the current month's first and last date
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return `02/01/${today.getFullYear()}`; // Default to January 1st of the current year
  });

  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    return `02/28/${today.getFullYear()}`; // Default to December 31st of the current year
  });

  const handleNewCompaings = () => {
    navigate("/newcompaings");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCampaignsPerPage(value);
    // You can submit the form or perform other actions here if needed
  };
  const workLine = (id) => {
    // Implement the workLine function logic here
  };

  const Declined_pop = (id) => {
    // Implement the Declined_pop function logic here
  };

  const Preferences_Func = (id) => {
    // Implement the Preferences_Func function logic here
  };

  const Copy_Func = (id) => {
    // Implement the Copy_Func function logic here
  };

  const Delete_Func = (id, option) => {
    // Implement the Delete_Func function logic here
  };

  const More_Func = (id, num1, num2, num3, str) => {
    // Implement the More_Func function logic here
  };

  const Bids_Func = (id) => {
    // Implement the Bids_Func function logic here
  };

  const Bids_Update_Func = (id) => {
    // Implement the Bids_Update_Func function logic here
  };
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await axios.delete(
        `https://bidvertiserserver.vercel.app/api/newcompaing/${id}`
      );
      // After successful delete, fetch campaigns again to update the list
      await fetchCampaigns();
      setLoading(false);
    } catch (error) {
      console.error("Error deleting campaign:", error.message);
      setLoading(false);
    }
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
  const handlefilterbuttons = () => {
    console.log(startDate, endDate);
  };
  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const params = {};
      if (startDate && endDate) {
        params.startDate = startDate;
        params.endDate = endDate;
      }
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/newcompaing",
        {
          params,
        }
      );
      console.log(response.data);
      setCampaigns(response.data);
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
    <div className="appcontainer">
      <Header routename="Manage Campaings" />
      <br />
      <div className="mangeconbianbodycontainer">
        <div className="uppermange">
          <div className="mangecomapingnuppercontainer ">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="selectmangecontainer">
                <select
                  name="statistic_option"
                  className="date_picker_item selectdatapickerfirst"
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
                      "url('https://my.bidvertiser.com/BidVertiser/Images/select_FF.png')",
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
                  <input
                    type="text"
                    id="Start_Date"
                    onClick={handlestartDateClick}
                    name="Start_Date"
                    size="8"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    className="hasDatepicker"
                    style={{
                      all: "unset",
                      borderLeft: "1px dashed grey",
                      padding: "0 40px 0 10px",
                    }}
                  />
                  {showstartdatePicker && (
                    <div className="ablutecatecontainer">
                      <Test
                        selectedDate={startDate}
                        setSelectedDate={setStartDate}
                        onClose={() => setshowstartdatepicker(false)} // Hide calendar on date select
                      />
                    </div>
                  )}
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
                    onClick={() => {
                      document.getElementById("Start_Date").focus();
                    }}
                  />
                </div>
                <div className="maindatecontainermainn">
                  <input
                    type="text"
                    id="Start_Date"
                    name="Start_Date"
                    size="8"
                    onFocus={() => {
                      document.forms.report_form2.statistic_option.selectedIndex = 6;
                    }}
                    onClick={hanleEndDateclick}
                    value={endDate}
                    className="hasDatepicker"
                    style={{
                      all: "unset",
                      borderLeft: "1px dashed grey",
                      padding: "0 40px 0 10px",
                    }}
                  />
                  {showendtdatePicker && (
                    <div className="ablutecatecontainerr">
                      <Test
                        selectedDate={endDate}
                        setSelectedDate={setEndDate}
                        onClose={() => setshowendtdatepicker(false)}
                      />
                    </div>
                  )}
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
                    onClick={() => {
                      document.getElementById("Start_Date").focus();
                    }}
                  />
                </div>
              </div>
              <div>
                <input
                  className="generatebutton"
                  id="content-button"
                  style={{
                    float: "right",
                    marginLeft: "10px",
                  }}
                  type="submit"
                  name="Create_button"
                  value="Generate"
                  onClick={handleGenreateCampaings}
                />
                <input
                  onClick={handlefilterbuttons}
                  type="button"
                  className="function-button"
                  name="f_nam"
                  value="Filters"
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    minWidth: "100px",
                    background:
                      "url('https://my.bidvertiser.com/BidVertiser/Images/bdv_action_filter.png') no-repeat",
                    backgroundSize: "13px 13px",
                    backgroundPosition: "17px 9px",
                    paddingLeft: "23px",
                    backgroundColor: "var(--lightBlue)",
                  }}
                />
                <button
                  className="function-button"
                  id="b_nam"
                  style={{
                    float: "left",
                    margin: "0px 10px",
                    minWidth: "100px",
                    width: "115px",
                    backgroundColor: "var(--lightBlue)",
                  }}
                >
                  <i
                    className="fa fa-asterisk"
                    aria-hidden="true"
                    style={{ fontSize: "12px", marginRight: "3px" }}
                  ></i>
                  Bulk Actions
                </button>
              </div>
            </div>
            <div>
              <div style={{ float: "right" }}>
                <input
                  type="button"
                  className="function-button"
                  name="new_cmp"
                  value="Create new campaign"
                  onClick={handleNewCompaings}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="chartmangeer">
          <table
            width="100%"
            border="0"
            height="35"
            className="table_style"
            id="graphs"
          >
            <tbody>
              <tr style={{ backgroundColor: "white" }}>
                <td width="*" nowrap="">
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "5px" }}>
                      <i
                        className="fas fa-chart-line"
                        style={{ fontSize: "14px", color: "var(--darkGreen)" }}
                      ></i>
                    </div>
                    <div
                      onClick={() => setshowCharts(!showcharts)}
                      id="graphs_button"
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "11px",
                        lineHeight: "22px",
                      }}
                    >
                      {showcharts ? "Hide Graphs" : "Show Graphs"}
                    </div>
                  </div>
                </td>

                <td width="150" nowrap="">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "30px",
                    }}
                  >
                    <div style={{ marginRight: "5px" }}>
                      <i
                        class="fa fa-youtube-play"
                        style={{ fontSize: "14px", color: "var(--darkRed)" }}
                      ></i>
                    </div>
                    <div
                      id="graphs_button"
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontSize: "11px",
                        lineHeight: "22px",
                      }}
                    >
                      Video Guide
                    </div>
                  </div>
                </td>
              </tr>
              {showcharts && (
                <tr>
                  <td
                    colSpan="2"
                    id="graph_display"
                    style={{
                      display: "block",
                      height: "28em",
                      overflow: "hidden",
                      marginLeft: "95px",
                    }}
                  >
                    <div style={{ margin: "0 20px", float: "left" }}>
                      Select two values:
                    </div>
                    <input
                      className="checkboxsttyles"
                      type="checkbox"
                      id="visit"
                      checked
                    />
                    Visits
                    <input
                      className="checkboxsttyles"
                      type="checkbox"
                      id="cost"
                      style={{ marginLeft: "20px" }}
                      checked
                    />
                    Cost
                    <input
                      className="checkboxsttyles"
                      type="checkbox"
                      id="conv"
                      style={{ marginLeft: "20px" }}
                      disabled
                      title="Only two graphs allowed at a time!"
                    />
                    Conversions
                    <div style={{ margin: "0 20px", float: "right" }}>
                      Display as:
                      <input
                        className="checkboxsttyles"
                        type="radio"
                        name="display_type"
                        value="line"
                      />
                      Line
                      <input
                        className="checkboxsttyles"
                        type="radio"
                        name="display_type"
                        value="bar"
                        checked
                      />
                      Bar
                    </div>
                    <div id="myChart_div">
                      <ChartComponent />
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mangecomapinpaginationonecontainer ">
          <table
            border="0"
            width="100%"
            className="main_table_style rrrr"
            style={{ margin: "15px 0" }}
          >
            <tbody>
              <tr style={{ border: 0 }}>
                <td style={{ backgroundColor: "white" }}>
                  <div style={{ display: "flex", float: "left" }}>
                    <div style={{ float: "left", marginLeft: "5px" }}>
                      Show{" "}
                      <select
                        className="paginatininiputite"
                        style={{ minWidth: "55px", margin: "5px" }}
                        value={campaignsPerPage}
                        onChange={handleChange}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="4">ALL</option>
                      </select>
                      Campaigns per page out of 4
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mangecomapigntablecontainer ">
          <table className="main_table_style">
            <thead>
              <tr
                style={{
                  border: "0",
                  fontSize: "13px",
                  fontWeight: "bold",
                  padding: "10px 0px",
                  lineHeight: "17px",
                }}
              >
                <td
                  colspan="13"
                  align="center"
                  style={{
                    paddingLeft: "14px",
                    borderLeft: "none",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                ></td>
                <td
                  align="center"
                  style={{
                    paddingLeft: "4px",
                    borderBottom: "thin solid rgba(0, 0, 0, 0.15)",
                    borderLeft: "none",
                  }}
                  colspan="3"
                >
                  Conversions
                </td>
              </tr>
            </thead>

            <thead id="head_ids" className="mangecontableheader">
              <tr>
                <th
                  valign="top"
                  style={{
                    paddingLeft: "13px",
                    width: "130px",
                    textAlign: "left",
                    cursor: "default",
                    borderLeft: "none",
                  }}
                  id="actTitle"
                >
                  <div style={{ float: "left", width: "19px" }}>&nbsp;</div>
                  Actions
                </th>
                <th
                  valign="top"
                  style={{
                    paddingLeft: "10px",
                    width: "80px",
                    textAlign: "left",
                    cursor: "default",
                  }}
                >
                  Status
                </th>
                <th
                  valign="top"
                  style={{
                    paddingLeft: "10px",
                    width: "100px",
                    textAlign: "left",
                  }}
                  nowrap=""
                >
                  Ad Format
                  <i
                    className="fa fa-sort-desc"
                    id="srt_2"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{
                    paddingLeft: "10px",
                    width: "50px",
                    textAlign: "left",
                  }}
                  nowrap=""
                  className="id_sort"
                >
                  ID
                  <i
                    className="fa fa-sort-desc"
                    id="srt_3"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ minWidth: "80px", textAlign: "left" }}
                  nowrap=""
                  id="campaign_width"
                >
                  Campaign Name
                  <i
                    className="fa fa-sort-desc"
                    id="srt_4"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "90px", textAlign: "left" }}
                  nowrap=""
                >
                  Your Bid US$
                  <i
                    className="fa fa-sort-desc"
                    id="srt_5"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "50px", textAlign: "left" }}
                  nowrap=""
                >
                  GEO
                  <i
                    className="fa fa-sort-desc"
                    id="srt_6"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "115px", textAlign: "left" }}
                  nowrap=""
                >
                  Bid Requests
                  <i
                    className="fa fa-sort-desc"
                    id="srt_7"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "115px", textAlign: "left" }}
                  title=""
                  nowrap=""
                >
                  Video Imp'
                  <i
                    className="fa fa-sort-desc"
                    id="srt_7"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "70px", textAlign: "left" }}
                  nowrap=""
                >
                  Visits
                  <i
                    className="fa fa-sort-desc"
                    id="srt_8"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "50px", textAlign: "left" }}
                  nowrap=""
                >
                  Win Rate
                  <i
                    className="fa fa-sort-desc"
                    id="srt_9"
                    style={{ marginLeft: "4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "50px", textAlign: "right" }}
                  nowrap=""
                >
                  Cost
                  <i
                    className="fa fa-sort-desc"
                    id="srt_10"
                    style={{ marginLeft: "4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ width: "105px", textAlign: "left" }}
                  nowrap=""
                >
                  Daily Cap
                  <i
                    className="fa fa-sort-desc"
                    id="srt_11"
                    style={{ marginLeft: "4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{ minWidth: "50px", textAlign: "left" }}
                >
                  Total
                  <i
                    className="fa fa-sort-desc"
                    id="srt_12"
                    style={{ margin: "0 4px", color: "lightgrey" }}
                    aria-hidden="true"
                  ></i>
                </th>
                <th
                  valign="top"
                  style={{
                    minWidth: "50px",
                    textAlign: "right",
                    paddingRight: "10px",
                  }}
                >
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? "loading..."
                : campaigns?.map((item) => (
                    <tr
                      id="line_799817"
                      className="work_line active_work_line"
                      onClick={() => workLine("line_799817")}
                    >
                      <td
                        nowrap
                        style={{
                          width: "130px",
                          textAlign: "center",
                          borderLeft: "none",
                        }}
                      >
                        <div
                          className="myworkbest"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div style={{ width: "16%" }} id="func_type_799817">
                            <div className="handle ui-sortable-handle">
                              <i
                                className="fa fa-bars"
                                aria-hidden="true"
                                style={{
                                  cursor: "n-resize",
                                  color: "rgba(80,80,80,0.5)",
                                  padding: "4px 5px",
                                  fontSize: "11px",
                                }}
                              ></i>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "16%",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                            }}
                            id="status_box_799817"
                          >
                            <div
                              className="isOffline"
                              title="Paused - Campaign is Offline"
                              id="content_status_799817"
                              style={{
                                padding: "2px 2px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <i
                                className="fa fa-step-forward"
                                aria-hidden="true"
                                style={{
                                  color: "var(--red)",
                                  width: "11px",
                                  overflow: "hidden",
                                }}
                              ></i>
                              <i
                                className="fa fa-pause"
                                style={{
                                  color: "#fc7c7c",
                                  width: "2px",
                                  overflow: "hidden",
                                }}
                                aria-hidden="true"
                              ></i>
                            </div>
                            <span
                              style={{ display: "none" }}
                              id="running799817"
                            >
                              paused
                            </span>
                          </div>
                          <div
                            onClick={() => handlepopupclick(item)}
                            style={{ width: "16%", cursor: "pointer" }}
                          >
                            <i
                              className="fa fa-pencil fa-fw"
                              aria-hidden="true"
                              style={{
                                color: "var(--greyBlue)",
                                padding: "2px 5px",
                              }}
                              name="Preferences_button"
                              title="Edit"
                              onClick={() => Preferences_Func(799817)}
                            ></i>
                          </div>
                          <div style={{ width: "16%", cursor: "pointer" }}>
                            <i
                              className="fa fa-copy fa-fw"
                              aria-hidden="true"
                              style={{
                                color: "var(--greyBlue)",
                                padding: "2px 5px",
                              }}
                              name="copy_button"
                              title="Duplicate"
                              onClick={() => Copy_Func(799817)}
                            ></i>
                          </div>
                          <div
                            onClick={() => handleDelete(item._id)}
                            style={{ width: "16%" }}
                          >
                            <i
                              className="fa fa-archive fa-fw"
                              aria-hidden="true"
                              style={{
                                cursor: "pointer",
                                color: "var(--greyBlue)",
                                padding: "2px 5px",
                              }}
                              name="archive_button"
                              title="Archive Campaign"
                              onClick={() => Delete_Func(799817, 1)}
                            ></i>
                          </div>
                          <div
                            id="buttons_control_1"
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div
                              name="More_button"
                              title="Advanced Settings"
                              id="more_funcs_799817"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                margin: "0px 0 0 2px",
                              }}
                              onClick={() => More_Func(0, 799817, 1, 1)}
                              onMouseOver={() => {
                                document.getElementById(
                                  "cog1_799817"
                                ).className = "fa fa-cog fa-spin";
                                document.getElementById(
                                  "cog2_799817"
                                ).className = "fa fa-cog fa-spin";
                                document.getElementById(
                                  "cog3_799817"
                                ).className = "fa fa-cog fa-spin";
                              }}
                              onMouseOut={() => {
                                document.getElementById(
                                  "cog1_799817"
                                ).className = "fa fa-cog";
                                document.getElementById(
                                  "cog2_799817"
                                ).className = "fa fa-cog";
                                document.getElementById(
                                  "cog3_799817"
                                ).className = "fa fa-cog";
                              }}
                            >
                              <i
                                className="fa fa-cog"
                                id="cog1_799817"
                                aria-hidden="true"
                                style={{
                                  color: "var(--greyBlue)",
                                  position: "absolute",
                                  top: "-13",
                                  left: "14px",
                                  fontSize: "7px",
                                }}
                              ></i>
                              <i
                                className="fa fa-cog"
                                id="cog2_799817"
                                aria-hidden="true"
                                style={{
                                  color: "var(--greyBlue)",
                                  position: "absolute",
                                  top: "-10px",
                                  left: "15px",
                                  fontSize: "8px",
                                }}
                              ></i>
                              <i
                                className="fa fa-cog"
                                id="cog3_799817"
                                aria-hidden="true"
                                style={{
                                  color: "var(--greyBlue)",
                                  position: "absolute",
                                  top: "-7px",
                                  left: "3px",
                                  fontSize: "14px",
                                }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        id="status799817"
                        style={{
                          width: "80px",
                          paddingLeft: "5px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            textAlign: "center",
                            width: "80px",
                          }}
                        >
                          <div style={{ width: "25%" }}>
                            {/* <i
                              className="fa fa-minus-circle"
                              aria-hidden="true"
                              style={{
                                padding: "5px 4px",
                                minWidth: "13px",
                                fontSize: "12pt",
                                float: "left",
                                color: "var(--red)",
                                cursor: "pointer",
                              }}
                              title="Editorial Status: Declined (click for more details)"
                              id="editorial_status_799817"
                              onClick={() => Declined_pop(799817)}
                            ></i> */}
                            <i
                              class="fa fa-check-circle"
                              aria-hidden="true"
                              style={{
                                padding: "5px 4px",
                                minWidth: "13px",
                                fontSize: "11pt",
                                float: "left",
                                color: "var(--greyBlue)",
                                cursor: "pointer",
                              }}
                              title="Editorial Status: Approved"
                              id="editorial_status_783468"
                            ></i>
                          </div>

                          <span id="THR_799817" style={{ display: "none" }}>
                            10
                          </span>

                          <div
                            style={{
                              width: "25%",
                              position: "relative",
                              cursor: "pointer",
                            }}
                            onMouseOver={() => {
                              return escape(
                                "<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td bgcolor=F6F8FA class=msb_table_flag style=padding-right:10px;text-align:left;white-space:nowrap;><img src=https://my.bidvertiser.com/BidVertiser/Images/gauge/w_gauge10.png border=0 id=TDIMG799817 style=margin-right:10px align=absmiddle width=50><span id=TDTXT799817>Throttling: 10%</span></td></tr></table>"
                              );
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "5px",
                              }}
                            >
                              <span
                                className="fa-stack fa-lg"
                                style={{
                                  transform: "rotate(30deg)",
                                  width: "10pt",
                                  height: "10pt",
                                  transformOrigin: "50% 100%",
                                  position: "absolute",
                                  top: "-2pt",
                                }}
                              >
                                <i
                                  className="fa fa-circle fa-stack-1x"
                                  aria-hidden="true"
                                  style={{ color: "#FFF", fontSize: "10pt" }}
                                  title=""
                                  id="TIMG799817"
                                ></i>
                                <div
                                  style={{
                                    position: "absolute",
                                    top: "-1pt",
                                    left: "4.3pt",
                                  }}
                                >
                                  <i
                                    className="fa fa-long-arrow-up"
                                    style={{
                                      color: "var(--red)",
                                      padding: "0",
                                      fontWeight: "bold",
                                      fontSize: "4.5pt",
                                    }}
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <i
                                  class="fa fa-circle-thin fa-stack-1x"
                                  aria-hidden="true"
                                  style={{
                                    color: "var(--greyBlue)",
                                    fontSize: "11pt",
                                    position: "absolute",
                                    top: "0pt",
                                    left: "0pt",
                                  }}
                                ></i>
                                {/* <i
                                  className="fa fa-circle-thin fa-stack-1x"
                                  aria-hidden="true"
                                  style={{
                                    color: "var(--greyBlue)",
                                    fontSize: "11pt",
                                    position: "absolute",
                                    top: "0pt",
                                    left: "0pt",
                                  }}
                                ></i> */}
                              </span>
                            </div>
                          </div>

                          <div style={{ width: "25%", cursor: "pointer" }}>
                            <i
                              className="fa fa-stethoscope fa-fw"
                              aria-hidden="true"
                              style={{
                                color: "var(--greyBlue)",
                                paddingTop: "6px",
                              }}
                              name="limit_button"
                              title="Campaign Health Analysis"
                            ></i>
                          </div>

                          <div style={{ width: "25%", cursor: "pointer" }}>
                            <i
                              className="fa fa-exclamation-triangle"
                              id="NOSRCCLICKID799817"
                              style={{
                                paddingTop: "7px",
                                fontSize: "12px",
                                zIndex: "4",
                                color: "var(--orange)",
                              }}
                              title="Campaign Alert"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </td>
                      <td
                        title="Direct Desktop"
                        id="ad_type799817"
                        style={{
                          width: "100px",
                          whiteSpace: "nowrap",
                          paddingLeft: "10px",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 5px 5px 0",
                            float: "left",
                            position: "relative",
                          }}
                          title="Source Type: Mainstream Traffic"
                          id="source_type_799817"
                        >
                          <i
                            className="fa fa-circle-thin"
                            aria-hidden="true"
                            style={{
                              position: "absolute",
                              color: "var(--greyBlue)",
                              fontSize: "15px",
                              paddingBottom: "1px",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: "3px",
                                top: "3pt",
                                color: "var(--greyBlue)",
                                fontSize: "8px",
                                fontFamily: "verdana",
                              }}
                            >
                              M
                            </span>
                          </i>
                        </div>
                        {item.adFor === "Desktop" ? (
                          <i
                            className="fa fa-desktop"
                            onMouseOver={() =>
                              escape(
                                "<div style=width:300px>Desktop Targeting - ALL</div>"
                              )
                            }
                            onClick={() =>
                              More_Func(0, 799817, 1, 1, "UA_Targeting_Func")
                            }
                            aria-hidden="true"
                            style={{
                              color: "var(--greyBlue)",
                              cursor: "pointer",
                              minWidth: "15px",
                              textAlign: "center",
                              fontSize: "14px",
                              padding: "6px 5px 6px 15px",
                            }}
                            title=""
                            id="what_device_799817"
                          ></i>
                        ) : (
                          <i
                            class="fa fa-mobile"
                            onmouseover="return escape('<div style= width:300px>Mobile Targeting - ALL</div>')"
                            onclick="More_Func(1,783468,2,3,'UA_Targeting_Func');"
                            aria-hidden="true"
                            style={{
                              color: "var(--greyBlue)",
                              cursor: "pointer",
                              minWidth: "15px",
                              textAlign: "center",
                              fontSize: "17px",
                              padding: "4px 5px 4px 15px",
                            }}
                            title=""
                            id="what_device_783468"
                          ></i>
                        )}

                        <span title="Direct" style={{ marginLeft: "5px" }}>
                          {item.adFormat}
                        </span>
                      </td>
                      <td
                        align="left"
                        style={{
                          paddingLeft: "10px",
                          width: "50px",
                          whiteSpace: "nowrap",
                        }}
                        className="index"
                        id="ORDER_799817"
                        headers="1"
                        title="799817"
                      >
                        <span style={{}}></span>
                        {item?.id}
                      </td>
                      <td
                        style={{
                          minWidth: "80px",
                          maxWidth: "100%",
                          whiteSpace: "nowrap",
                        }}
                        id="ad_name_title_799817"
                        title="sdas"
                        className=""
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ float: "left", minWidth: "140px" }}>
                            <span className="CNAME" id="cname_799817">
                              <a
                                href="javascript:void(0);"
                                onClick={() =>
                                  doAnalyticsReport_Func(this, 799817)
                                }
                              >
                                <i
                                  className="fa fa-bar-chart"
                                  aria-hidden="true"
                                  style={{
                                    color: "var(--darkGreen)",
                                    padding: "0 3px",
                                  }}
                                ></i>
                              </a>
                              <input
                                style={{
                                  background: "none",
                                  outline: "0",
                                  fontSize: "12px",
                                  minWidth: "100px",
                                  fontFamily:
                                    "'Open Sans', 'Open Sans', sans-serif",
                                }}
                                className=" ad_name_titlele"
                                name="Name"
                                id="ad_name_799817"
                                value={item.campaignName}
                                onClick={() => {
                                  document.getElementById(
                                    "UAN_799817"
                                  ).className = "fa fa-send-o";
                                  document
                                    .getElementById("UAN_799817")
                                    .setAttribute(
                                      "style",
                                      "color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1;"
                                    );
                                }}
                              />
                            </span>
                          </div>
                          <div style={{ float: "right", padding: "2px 5px" }}>
                            <a
                              href="javascript:void(0);"
                              style={{ textDecoration: "none", width: "20px" }}
                              title="Edit Ad Name"
                              onClick={() => save_name(799817)}
                            >
                              <i
                                className="fa fa-send-o"
                                id="UAN_799817"
                                aria-hidden="true"
                                style={{
                                  opacity: "0",
                                  fontSize: "14px",
                                  cursor: "default",
                                }}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td
                        align="left"
                        style={{
                          paddingLeft: "5px",
                          whiteSpace: "nowrap",
                          width: "90px",
                        }}
                        title="0.00100"
                      >
                        <div style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <div style={{ width: "20px" }}>
                              {/* <i
                                className="fa fa-exclamation-triangle"
                                aria-hidden="true"
                                onMouseOver={() =>
                                  escape(
                                    "<table class=table_style width=100% cellpadding=0 cellspacing=0><tr><td>Country</td><td style=white-space:nowrap; class=msb_table_bid>Effective Bid</td><td style=white-space:nowrap; class=msb_table_bid>Bid Range</td><td></td></tr><tr><td bgcolor=F6F8FA class=msb_table_flag style=white-space:nowrap;text-align:left><img src=https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg align=absmiddle class=msb_table_country_name width=15>US</td><td bgcolor=F6F8FA class=msb_table_bid style=white-space:nowrap;>$0.2896</td><td bgcolor=F6F8FA class=msb_table_bid style=white-space:nowrap;>$0.0020 - $3</td><td bgcolor=F6F8FA><i class='fa fa-exclamation-triangle' style='font-size:12px;color:var(--darkRed);float:right;padding:6px;cursor:pointer' aria-hidden='true'></i></td></tr></table>"
                                  )
                                }
                                style={{
                                  fontSize: "12px",
                                  color: "var(--darkRed)",
                                  position: "relative",
                                  cursor: "pointer",
                                  paddingTop: "16px",
                                }}
                              ></i> */}
                            </div>
                            <div
                              style={{
                                width: "10px",
                                padding: "10px 2px 0 10px",
                              }}
                            >
                              <a
                                href="javascript:void(0);"
                                id="CB_799817"
                                title="Change Bid"
                                style={{
                                  textDecoration: "none",
                                  display: "block",
                                  color: "var(--darkGreen)",
                                  fontSize: "13px",
                                }}
                              >
                                $
                              </a>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                position: "relative",
                                marginLeft: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              <div
                                style={{
                                  padding: "2px 0",
                                  minWidth: "70px",
                                  position: "relative",
                                  display: "flex",
                                }}
                              >
                                <span
                                  style={{ cursor: "text", color: "inherit" }}
                                >
                                  <div
                                    className="quantity"
                                    style={{ paddingTop: "3px" }}
                                  >
                                    <input
                                      type="number"
                                      title="Bid Range: $0.0020 - $3"
                                      id="max_bid_id799817"
                                      className="vlad ad_name_titlele"
                                      min="0.0001"
                                      max="100"
                                      step="0.0001"
                                      value={item?.bidRequests}
                                      onClick={() => {
                                        document.getElementById(
                                          "UB_799817"
                                        ).className = "fa fa-send-o";
                                        document
                                          .getElementById("UB_799817")
                                          .setAttribute(
                                            "style",
                                            "color:var(--darkGreen);cursor:pointer;font-size:14px;opacity:1"
                                          );
                                      }}
                                      style={{
                                        minHeight: "1px",
                                        maxHeight: "25px",
                                        fontSize: "12px",
                                      }}
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div style={{ width: "20px", padding: "10px 5px" }}>
                              <a
                                href="javascript:void(0);"
                                style={{
                                  textDecoration: "none",
                                  width: "20px",
                                }}
                                title="Submit Bid"
                                onClick={() => Bids_Update_Func(799817)}
                              >
                                <i
                                  className="fa fa-send-o"
                                  id="UB_799817"
                                  aria-hidden="true"
                                  style={{
                                    opacity: "0",
                                    fontSize: "14px",
                                    cursor: "default",
                                  }}
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        align="left"
                        style={{ paddingLeft: "5px", width: "50px" }}
                        title="Change Country Targeting"
                      >
                        <a
                          href="javascript:void(0);"
                          style={{
                            borderBottom: "1px dotted grey",
                            textDecoration: "none",
                            color: "inherit",
                            position: "relative",
                            fontFamily: "Open Sans",
                          }}
                          onClick={() =>
                            More_Func(0, 799817, 1, 1, "Geographical_Func")
                          }
                          id="targeting799817"
                        >
                          {item?.geo === "Globe" ? (
                            <i
                              class="fa fa-globe"
                              aria-hidden="true"
                              style={{ color: "var(--greyBlue)" }}
                              onmouseover="return escape('<span style=font-family:Courier>US   CA</span>')"
                            ></i>
                          ) : (
                            item?.geo
                          )}
                        </a>
                      </td>
                      <td
                        align="left"
                        style={{ paddingLeft: "5px", width: "75px" }}
                        id="requests799817"
                        title="0"
                      >
                        {item?.campaignBid}
                      </td>
                      <td
                        align="left"
                        style={{ paddingLeft: "5px", width: "75px" }}
                        id="vidimps799817"
                        title="Available only for Video Ads"
                      >
                        -
                      </td>
                      <td
                        align="left"
                        style={{ paddingLeft: "5px", width: "50px" }}
                        id="visits799817"
                        title="0"
                      >
                        {item.visits}
                      </td>
                      <td
                        align="right"
                        style={{ paddingLeft: "10px", width: "50px" }}
                        title="0"
                      >
                        {item.winRate}%
                      </td>
                      <td
                        align="right"
                        style={{
                          paddingLeft: "10px",
                          width: "50px",
                          whiteSpace: "nowrap",
                        }}
                        title="0"
                      >
                        ${item.cost}
                      </td>

                      <td
                        id="daily_budget_td799817"
                        style={{
                          width: "105px",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                        title="45"
                      >
                        <div style={{ display: "flex", float: "left" }}>
                          <div
                            style={{
                              padding: "10px 2px 0 0",
                              fontSize: "13px",
                            }}
                          >
                            $
                          </div>
                          <div
                            className="quantity"
                            style={{ paddingTop: "7px" }}
                          >
                            <input
                              type="number"
                              style={{
                                width: "65px",
                                paddingLeft: "4px",
                                minHeight: "1px",
                                maxHeight: "25px",
                                fontSize: "12px",
                              }}
                              id="daily_budget799817"
                              className="vlad ad_name_titleled"
                              step="1"
                              value={item.dailyCap}
                            />
                            <input
                              type="hidden"
                              id="daily_budget_org799817"
                              value="45.00"
                            />
                          </div>
                          <div style={{ width: "20px", padding: "10px 5px" }}>
                            <a
                              href="javascript:void(0);"
                              style={{
                                textDecoration: "none",
                                width: "20px",
                                opacity: "0",
                                cursor: "default",
                              }}
                              title="Submit Budget"
                              onClick=""
                              id="UBG_799817"
                            >
                              <i
                                className="fa fa-send-o"
                                id="UBG_799817_bttn"
                                aria-hidden="true"
                                style={{ fontSize: "14px" }}
                              ></i>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{
                          paddingLeft: "10px",
                          borderLeft: "1px solid rgba(0, 0, 0, 0.15)",
                        }}
                        title=""
                        id="conv799817"
                      ></td>
                      <td
                        style={{
                          padding: "0 10px",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                        id="convrate799817"
                      ></td>
                    </tr>
                  ))}
            </tbody>
            <tfoot>
              <tr>
                <td align="left" style={{ lineHeight: "35px" }} colspan="2">
                  <div
                    title="Pause all"
                    style={{ padding: "2px 5px 0 23px", float: "left" }}
                  >
                    <i
                      class="fa fa-step-forward"
                      aria-hidden="true"
                      style={{
                        color: "#fc7c7c",
                        width: "9px",
                        overflow: "hidden",
                      }}
                    ></i>
                    <i
                      class="fa fa-pause"
                      style={{
                        color: "#fc7c7c",
                        width: "2px",
                        overflow: "hidden",
                      }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <a
                    href="javascript:void(0);"
                    style={{ float: "left" }}
                    onclick="Pause_Func(2);"
                  >
                    Pause all
                  </a>
                  <div
                    title="Resume all"
                    style={{ padding: "2px 5px 0 40px", float: "left" }}
                  >
                    <i
                      class="fa fa-step-forward"
                      aria-hidden="true"
                      style={{
                        color: "var(--darkGreen)",
                        width: "9px",
                        overflow: "hidden",
                      }}
                    ></i>
                    <i
                      class="fa fa-pause"
                      style={{
                        color: "var(--darkGreen)",
                        width: "2px",
                        overflow: "hidden",
                      }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <a
                    href="javascript:void(0);"
                    style={{ float: "left" }}
                    onclick="Run_Func(2);"
                  >
                    Resume all
                  </a>
                </td>
                <td
                  align="left"
                  style={{ lineHeight: "35px", paddingLeft: "30px" }}
                  colspan="3"
                >
                  <div style={{ float: "left" }}>
                    <span
                      style={{
                        float: "left",
                        lineHeight: "15px",
                        position: "relative",
                        paddingRight: "10px",
                        textDecoration: "underline",
                        textDecorationStyle: "dotted",
                        cursor: "help",
                        fontSize: "12px",
                      }}
                      onmouseover="return escape('<b>How can I change the order in which the campains are displayed?</b><br><br>You can change your campaigns\' order by way of <i>Drag and Drop</i> each line to a new position.<br>Once you are done, hit the <b><i class=\'fa fa-floppy-o\' style=color:#505050 aria-hidden=true></i></b> button.<br>To reset the order, just hit the <b><i class=\'fa fa-undo\' style=color:#505050 aria-hidden=true></i></b> button');"
                    >
                      Re-Order Table:{" "}
                    </span>
                    <a
                      onclick="save_order()"
                      style={{
                        cursor: "pointer",
                        float: "left",
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    >
                      <i
                        class="fa fa-floppy-o"
                        id="or_save"
                        style={{
                          color: "rgba(80,80,80,0.3)",
                          marginRight: "5px",
                        }}
                        aria-hidden="true"
                      ></i>
                      <u>Save</u>
                    </a>
                    <a
                      onclick="clear_order()"
                      style={{
                        cursor: "pointer",
                        float: "left",
                        marginLeft: "10px",
                        fontSize: "12px",
                        lineHeight: "15px",
                      }}
                    >
                      <i
                        class="fa fa-undo"
                        id="or_clear"
                        style={{
                          color: "rgba(80,80,80,0.3)",
                          marginRight: "5px",
                        }}
                        aria-hidden="true"
                      ></i>
                      <u>Clear</u>
                    </a>
                  </div>
                </td>
                <td
                  align="right"
                  style={{ lineHeight: "35px", paddingRight: "20px" }}
                  colspan="2"
                >
                  <b>Total</b>
                </td>
                <td
                  style={{ paddingLeft: "5px", textAlign: "left" }}
                  id="requests_tot"
                >
                  0
                </td>
                <td
                  style={{ paddingLeft: "5px", textAlign: "left" }}
                  id="vidimp_tot"
                >
                  0
                </td>
                <td
                  style={{ paddingLeft: "5px", textAlign: "left" }}
                  id="visits_tot"
                >
                  0
                </td>
                <td
                  style={{ paddingLeft: "10px", textAlign: "right" }}
                  id="ctr_tot"
                >
                  0.00%
                </td>
                <td
                  style={{
                    paddingLeft: "10px",
                    whiteSpace: "nowrap",
                    textAlign: "right",
                  }}
                  id="cost_tot"
                >
                  $0.00
                </td>
                <td
                  style={{
                    paddingLeft: "10px",
                    whiteSpace: "nowrap",
                    textAlign: "right",
                  }}
                  id="budget_tot"
                ></td>
                <td
                  align="left"
                  style={{
                    paddingLeft: "10px",
                    textAlign: "right",
                    borderLeft: "1px solid rgba(0, 0, 0, 0.15)",
                  }}
                  id="conv_tot"
                >
                  0
                </td>
                <td>&nbsp;</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mangecomapignexports ">
          <table border="0" width="100%" style={{ marginTop: "15px" }}>
            <tbody>
              <tr style={{ border: "0" }}>
                <td style={{ backgroundColor: "white" }}>
                  <div style={{ display: "flex", float: "left" }}>
                    <a
                      id="dl_csv_full"
                      style={{
                        display: "none",
                        cursor: "pointer",
                        float: "right",
                        fontSize: "12px",
                        lineHeight: "15px",
                        padding: "3px",
                      }}
                    >
                      <i
                        className="fa fa-file-excel-o"
                        aria-hidden="true"
                        style={{
                          color: "var(--darkGreen)",
                          marginRight: "5px",
                        }}
                        title="Export as .csv file"
                      ></i>
                      <u>All Campaigns</u>
                    </a>
                    <a
                      id="dl_csv"
                      style={{
                        display: "none",
                        cursor: "pointer",
                        float: "right",
                        fontSize: "12px",
                        lineHeight: "15px",
                        padding: "3px",
                      }}
                    >
                      <i
                        className="fa fa-file-excel-o"
                        aria-hidden="true"
                        style={{
                          color: "var(--darkGreen)",
                          marginRight: "5px",
                        }}
                        title="Export as .csv file"
                      ></i>
                      <u>Displayed Campaigns</u>
                    </a>
                    <select
                      className="footeragenaintselectselect"
                      name="car"
                      onChange={() => {
                        if (this.value !== "default") get_csv(this.value);
                      }}
                      style={{ minWidth: "145px", margin: "5px" }}
                    >
                      <option value="default">Export Campaigns</option>
                      <option value="">Current Page</option>
                      <option value="_full">All Campaigns</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", float: "right" }}>
                    <div style={{ float: "left" }}>
                      Show
                      <select
                        className="paginatininiputite"
                        style={{ minWidth: "55px", margin: "5px" }}
                        onChange={() => {
                          document.report_form2.maxRows.value = this.value;
                          document.report_form2.submit();
                        }}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50" selected>
                          50
                        </option>
                        <option value="100">100</option>
                        <option value="4">ALL</option>
                      </select>
                      Campaings per page out of 4
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
