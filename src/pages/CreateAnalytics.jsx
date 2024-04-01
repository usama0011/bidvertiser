import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const CreateAnalytics = () => {
  const [formData, setFormData] = useState({
    Date: "",
    BidRequest: "",
    Vistis: "",
    WinRate: "",
    Cost: "",
    CPC: "",
    CoversionRate: "",
    CostConversion: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://bidvertiserserver.vercel.app/api/analytics",
        formData
      );
      console.log("Analytics data submitted successfully");
      setFormData({
        Date: "",
        BidRequest: "",
        Vistis: "",
        WinRate: "",
        Cost: "",
        CPC: "",
        CoversionRate: "",
        CostConversion: "",
      });
      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error submitting analytics data:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Header routename="Create Analytics" />
      <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Create Analytics
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label>Date:</label>
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Bid Request:</label>
            <input
              type="text"
              name="BidRequest"
              value={formData.BidRequest}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Visits:</label>
            <input
              type="text"
              name="Vistis"
              value={formData.Vistis}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Win Rate:</label>
            <input
              type="text"
              name="WinRate"
              value={formData.WinRate}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Cost:</label>
            <input
              type="text"
              name="Cost"
              value={formData.Cost}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>CPC:</label>
            <input
              type="text"
              name="CPC"
              value={formData.CPC}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Conversion Rate:</label>
            <input
              type="text"
              name="CoversionRate"
              value={formData.CoversionRate}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Conversion Cost:</label>
            <input
              type="text"
              name="CostConversion"
              value={formData.CostConversion}
              onChange={handleChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAnalytics;
