import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const EditAnalytics = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    Date: "",
    BidRequest: "",
    Visits: "",
    WinRate: "",
    Cost: "",
    campaignname: "",
    CPC: "",
    CoversionRate: "",
    CostConversion: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bidvertiserserver.vercel.app/api/analytics/${id}`
        );
        const formattedDate = new Date(response.data.Date).toLocaleDateString(
          "en-US"
        );
        setFormData({
          Date: formattedDate,
          BidRequest: response.data.BidRequest,
          Visits: response.data.Visits,
          WinRate: response.data.WinRate,
          Cost: response.data.Cost,
          campaignname: response.data.campaignname,
          CPC: response.data.CPC,
          CoversionRate: response.data.CoversionRate,
          CostConversion: response.data.CostConversion,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(
        `https://bidvertiserserver.vercel.app/api/analytics/${id}`,
        formData
      );
      console.log("Analytics updated successfully");
    } catch (error) {
      console.error("Error updating analytics:", error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header routename="Edit Analytics" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            maxWidth: "500px",
            margin: "50px auto",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Date:</label>
          <input
            className="forminputt"
            type="text"
            name="Date"
            value={formData.Date}
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

          <label style={{ marginBottom: "5px" }}>Campaign Name:</label>
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

          <label style={{ marginBottom: "5px" }}>WinRate:</label>
          <input
            className="forminputt"
            type="text"
            name="WinRate"
            value={formData.WinRate}
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

          <label style={{ marginBottom: "5px" }}>Conversion Rate:</label>
          <input
            className="forminputt"
            type="text"
            name="CoversionRate"
            value={formData.CoversionRate}
            onChange={handleChange}
          />

          <label style={{ marginBottom: "5px" }}>Cost per Conversion:</label>
          <input
            className="forminputt"
            type="text"
            name="CostConversion"
            value={formData.CostConversion}
            onChange={handleChange}
          />

          <button
            style={{ marginTop: "10px" }}
            className="desibutton"
            type="submit"
          >
            {loading ? "Updating..." : "Update Analytics"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditAnalytics;
