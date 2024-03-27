import React from "react";
import "../styles/Budget.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Budget = () => {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/");
  };
  const handleSubmit = () => {
    // Handle form submission here
  };

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
        </div>
        <br />
        <p className="compara">
          By setting the Daily Ad Budget, you can control your daily spending
          for this ad.
        </p>
        <br />
        <br />
        <p>
          BidVertiser displays your ad as often as possible while staying within
          your Daily Ad Budget.
        </p>
        <br />
        <p>
          When the limit is reached, your ad will stop showing for that day.
        </p>
        <table
          cellpadding="0"
          cellspacing="7"
          border="0"
          width="100%"
          className="bdv_000000_Text_11"
        >
          <tbody>
            <tr>
              <td width="10" nowrap="">
                <input type="Radio" name="capping" value="0" checked="" />
              </td>
              <td>No Daily Limit</td>
            </tr>
            <tr>
              <td>
                <input
                  type="Radio"
                  name="capping"
                  value="1"
                  id="docap"
                  checked=""
                />
              </td>
              <td>
                Set Daily Ad Budget: $
                <input
                  type="Text"
                  className="form-field"
                  name="Daily_Cap"
                  value=""
                  size="7"
                  onfocus="document.getElementById('docap').checked='true'"
                  maxlength="10"
                />{" "}
                ($5 minimum)
              </td>
            </tr>
            <tr>
              <td colspan="2" height="10"></td>
            </tr>
            <tr>
              <td>
                <input
                  type="Checkbox"
                  name="notifyRunOfAdDailyBudget"
                  checked=""
                />
              </td>
              <td>
                Enable email notification once the daily ad budget is depleted
              </td>
            </tr>
          </tbody>
        </table>
        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" class="function-button">
            Complete and Start Campaign
          </button>
          <button
            onClick={handleClickNext}
            id="mob_select"
            class="function-button"
            style={{ margin: "5px" }}
          >
            Complete and Pause Campaing
          </button>
        </center>
      </div>
    </div>
  );
};

export default Budget;
