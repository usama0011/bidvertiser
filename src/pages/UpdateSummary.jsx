import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateSummary = () => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const response = await axios.get("https://bidvertiserserver.vercel.app/api/summary");
        setSummaries(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching summaries:", error.message);
      }
    };

    fetchSummaries();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://bidvertiserserver.vercel.app/api/summary/${id}`);
      // Refetch data after deletion
      const response = await axios.get("https://bidvertiserserver.vercel.app/api/summary");
      setSummaries(response.data);
    } catch (error) {
      console.error("Error deleting summary:", error.message);
    }
  };
  return (
    <div className="publisherContainer">
      <Header routename="Update Summary" />
      <div className="publisherbodycontainer">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Start Date</th>
                <th>End Date</th>
                <th>AdRequests</th>
                <th>Visits</th>
                <th>Costs</th>
                <th>CPC</th>
              </tr>
            </thead>
            <tbody>
              {summaries?.map((summary) => (
                <tr key={summary._id}>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.startdate}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.endDate}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.AdRequests}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.Visits}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.Cost}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    {summary.CPC}
                  </td>
                  <td style={{ padding: "10px", textAlign: "left" }}>
                    <Link to={`/updatesummaryitem/${summary._id}`}>
                      <button className="desibutton">Update</button>
                    </Link>
                    <button
                      className="delsidelete"
                      onClick={() => handleDelete(summary._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UpdateSummary;
