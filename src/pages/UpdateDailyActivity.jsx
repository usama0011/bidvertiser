import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import Header from "../components/Header";

const UpdateDailyActivity = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    startdate: "",
    BidRequest: "",
    Visits: "",
    Cost: "",
    campaignname: "",
    CPC: "",
  });
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(
          `https://bidvertiserserver.vercel.app/api/dailyactivity/${id}`
        );
        setSummary(response.data);
        setFormData({
          startdate: response.data.Date,
          campaignname: response.data.campaignname,
          BidRequest: response.data.BidRequest,
          Visits: response.data.Vistis,
          Cost: response.data.Cost,
          CPC: response.data.CPC,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching summary:", error.message);
      }
    };

    fetchSummary();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(
        `https://bidvertiserserver.vercel.app/api/dailyactivity/${id}`,
        formData
      );
      console.log("Summary updated successfully!");
    } catch (error) {
      console.error("Error updating summary:", error.message);
    }
    setLoading(false);
  };
  console.log(summary);
  return (
    <div className="uddatesinglecontainer">
      <Header routename={id} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "500px",
            margin: "50px auto",
          }}
          onSubmit={handleSubmit}
        >
          <label style={{ marginBottom: "5px" }}>Date:</label>
          <input
            className="forminputt"
            type="text"
            name="startdate"
            value={formData.startdate}
            onChange={handleChange}
          />

          <label style={{ marginBottom: "5px" }}>BidRequest:</label>
          <input
            className="forminputt"
            type="text"
            name="BidRequest"
            value={formData.BidRequest}
            onChange={handleChange}
          />
          <label style={{ marginBottom: "5px" }}>Campaign name:</label>
          <input
            className="forminputt"
            type="text"
            name="campaignname"
            value={formData.campaignname}
            onChange={handleChange}
          />
          <label style={{ marginBottom: "5px" }}>Visits:</label>
          <input
            className="forminputt"
            type="text"
            name="Visits"
            value={formData.Visits}
            onChange={handleChange}
          />
          <label style={{ marginBottom: "5px" }}>Cost:</label>
          <input
            className="forminputt"
            type="text"
            name="Cost"
            value={formData.Cost}
            onChange={handleChange}
          />
          <label style={{ marginBottom: "5px" }}>CPC:</label>
          <input
            className="forminputt"
            type="text"
            name="CPC"
            value={formData.CPC}
            onChange={handleChange}
          />
          <button
            style={{ marginTop: "10px" }}
            className="desibutton"
            type="submit"
          >
            {loading ? "Updating..." : "Update Daily Activity"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateDailyActivity;
