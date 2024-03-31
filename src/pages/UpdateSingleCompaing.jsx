import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const UpdateSingleCompaing = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCampaign();
  }, []);

  const fetchCampaign = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3001/api/newcompaing/${id}`
      );
      setCampaign(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching campaign:", error.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleUpdateCampaign = async () => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3001/api/newcompaing/${id}`, campaign);
      // Optionally, you can fetch the updated campaign after the update request
      await fetchCampaign();
      setLoading(false);
    } catch (error) {
      console.error("Error updating campaign:", error.message);
      setLoading(false);
    }
  };

  return (
    <>
    <Header routename={id}/>
      <div style={{ margin: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>Update Campaign</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="campaignName">Campaign Name:</label>
              <input
                type="text"
                id="campaignName"
                name="campaignName"
                value={campaign.campaignName || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={campaign.id || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="geo">Geo:</label>
              <input
                type="text"
                id="geo"
                name="geo"
                value={campaign.geo || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="dailyCap">Daily Cap:</label>
              <input
                type="text"
                id="dailyCap"
                name="dailyCap"
                value={campaign.dailyCap || ""}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleUpdateCampaign}>
              Update Campaign
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdateSingleCompaing;
