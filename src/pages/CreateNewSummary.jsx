import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../styles/createsummary.css";
const CreateNewSummary = () => {
  const [startdate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campaingname, setcampaingname] = useState("");
  const [adRequests, setAdRequests] = useState("");
  const [visits, setVisits] = useState("");
  const [cost, setCost] = useState("");
  const [cpc, setCPC] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://bidvertiserserver.vercel.app/api/summary", {
        startdate,
        endDate,
        AdRequests: adRequests,
        Visits: visits,
        Cost: cost,
        CPC: cpc,
        campaignname: campaingname,
      });
      alert("Form Submit Successfully");
      // If successful, you might want to redirect the user or show a success message
      console.log("Summary created successfully!");
      setStartDate("");
      setEndDate("");
      setAdRequests("");
      setVisits("");
      setCost("");
      setCPC("");
    } catch (error) {
      console.error("Error creating summary:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className="createsummarycontainer">
      <Header routename="Create Summary" />
      <div className="createsummarybodycontainer">
        <form onSubmit={handleSubmit} className="summaryform">
          <div className="formgroupp">
            <label className="labell">Start Date:</label>
            <input
              required
              type="date"
              value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">End Date:</label>
            <input
              required
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">Ad Requests:</label>
            <input
              required
              type="number"
              value={adRequests}
              onChange={(e) => setAdRequests(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">Campaign name:</label>
            <input
              required
              type="number"
              value={campaingname}
              onChange={(e) => setcampaingname(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">Visits:</label>
            <input
              required
              type="number"
              value={visits}
              onChange={(e) => setVisits(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">Cost:</label>
            <input
              required
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="forminputt"
            />
          </div>
          <div className="formgroupp">
            <label className="labell">CPC:</label>
            <input
              required
              type="number"
              value={cpc}
              onChange={(e) => setCPC(e.target.value)}
              className="forminputt"
            />
          </div>
          <button type="submit" disabled={loading} className="submitbtnn">
            {loading ? "Creating..." : "Create Summary"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewSummary;
