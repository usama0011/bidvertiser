import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewDailyAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          "https://bidvertiserserver.vercel.app/api/analytics"
        );
        setAnalytics(response?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchAnalytics();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://bidvertiserserver.vercel.app/api/analytics/${id}`
      );
      // Refetch data after deletion
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/analytics"
      );
      setAnalytics(response.data);
    } catch (error) {
      console.error("Error deleting analytics:", error.message);
    }
  };
  return (
    <div>
      <Header routename="Daily Analytics" />
      <div className="analyticsbodycontainer">
        <div style={{ padding: "10px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Analytics Data
          </h2>

          {loading ? (
            <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
          ) : (
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #000" }}>
                  <th style={tableHeaderStyle}>Date</th>
                  <th style={tableHeaderStyle}>Bid Request</th>
                  <th style={tableHeaderStyle}>Visits</th>
                  <th style={tableHeaderStyle}>Win Rate</th>
                  <th style={tableHeaderStyle}>Cost</th>
                  <th style={tableHeaderStyle}>CPC</th>
                  <th style={tableHeaderStyle}>Conversion Rate</th>
                  <th style={tableHeaderStyle}>Conversion Cost</th>
                  <th style={tableHeaderStyle}>Edit</th>
                  <th style={tableHeaderStyle}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {analytics?.length > 0 ? (
                  analytics?.map((analytic) => (
                    <tr
                      key={analytic._id}
                      style={{ borderBottom: "1px solid #000" }}
                    >
                      <td style={tableCellStyle}>{analytic.Date}</td>
                      <td style={tableCellStyle}>{analytic.BidRequest}</td>
                      <td style={tableCellStyle}>{analytic.Vistis}</td>
                      <td style={tableCellStyle}>{analytic.WinRate}</td>
                      <td style={tableCellStyle}>{analytic.Cost}</td>
                      <td style={tableCellStyle}>{analytic.CPC}</td>
                      <td style={tableCellStyle}>{analytic.CoversionRate}</td>
                      <td style={tableCellStyle}>{analytic.CostConversion}</td>
                      <td style={tableCellStyle}>
                        <button className="desibutton">
                          <Link to={`/editanalytics/${analytic._id}`}>
                            Edit
                          </Link>
                        </button>
                      </td>
                      <td style={tableCellStyle}>
                        <button
                          className="delsidelete"
                          onClick={() => handleDelete(analytic._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>
                      No analytics data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "10px",
};
export default ViewDailyAnalytics;
