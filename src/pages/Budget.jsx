import React, { useContext, useState } from "react";
import "../styles/Budget.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
import axios from "axios";
const Budget = () => {
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [Id, setID] = useState("");
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
  const navigate = useNavigate();
  const generateRandomId = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Usage

  const handleClickNext = async () => {
    // Generate random ID
    let newID = generateRandomId();

    // Update state with the generated ID
    setID(newID);

    // Update state with the budget value
    handleUpdateState("dailyCap", budget);

    // Prepare data object to submit
    const data = {
      adFormat: state.adFormat,
      id: newID,
      campaignName: state.campaignName,
      campaignBid: state.campaignBid,
      geo: state.geo,
      bidRequests: state.bidRequests,
      videoImp: state.videoImp,
      visits: state.visits,
      winRate: state.winRate,
      cost: state.cost,
      dailyCap: budget,
    };

    try {
      // Set loading state to true
      setLoading(true);

      // Make POST request to submit data
      const response = await axios.post(
        "http://localhost:3001/api/newcompaing",
        data
      );
      console.log(response);
      // Handle success response here if needed
      dispatch({ type: "RESET_STATE" });

      // Set loading state to false
      setLoading(false);

      // Navigate to the next page or perform any other actions
      navigate("/");
    } catch (error) {
      // Handle error here if needed
      console.error("Error submitting data:", error.message);

      // Set loading state to false
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  console.log(state);
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
        <div className="breadcurmcontainer">
          <div className="button-bar">
            <a
              href="#"
              style={{ backgroundColor: "#1173b7", color: "white" }}
              className="button next"
            >
              Ad type
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              GEO
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Targeting
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Quality
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Bid
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#1173b7", color: "white" }}
              href="#"
              className="button next"
            >
              Creative
            </a>
          </div>
          <div className="button-bar">
            <a
              style={{ backgroundColor: "#81d34a", color: "white" }}
              href="#"
              className="button next"
            >
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
                <input type="Radio" name="look" value="0" checked="" />
              </td>
              <td>No Daily Limit</td>
            </tr>
            <tr>
              <td>
                <input
                  type="Radio"
                  name="look"
                  value="1"
                  id="docap"
                  checked=""
                />
              </td>
              <td>
                Set Daily Ad Budget: $
                <input
                  type="Text"
                  className="form-field binput"
                  size="7"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
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
        <br />
        <center id="ad_select" className="buttonlargetwo">
          <button
            onClick={handleClickNext}
            disabled={loading}
            id="desk_select"
            class="function-button"
          >
            Complete and Start Campaign
          </button>
          <button
            disabled={loading}
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
