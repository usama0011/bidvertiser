import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewCompaings = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/newcompaing"
      );
      setCampaigns(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching campaigns:", error.message);
      setLoading(false);
    }
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

  return (
    <div style={{ margin: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>All Campaigns</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {campaigns.map((campaign) => (
            <li
              key={campaign._id}
              style={{
                marginBottom: "10px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <strong>Campaign Name:</strong> {campaign.campaignName}
              </span>
              <span style={{ marginRight: "10px" }}>
                <strong>ID:</strong> {campaign.id}
              </span>
              <span style={{ marginRight: "10px" }}>
                <strong>Geo:</strong> {campaign.geo}
              </span>
              <span style={{ marginRight: "10px" }}>
                <strong>Daily Cap:</strong> {campaign.dailyCap}
              </span>
              <Link
                to={`/updatecompaing/${campaign._id}`}
                style={{ marginRight: "10px", textDecoration: "none" }}
              >
                <button className="desibutton">Update</button>
              </Link>
              <button
                className="delsidelete"
                onClick={() => handleDelete(campaign._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewCompaings;
