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
        `https://bidvertiserserver.vercel.app/api/newcompaing/${id}`
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
      await axios.put(
        `https://bidvertiserserver.vercel.app/api/newcompaing/${id}`,
        campaign
      );
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
      <Header routename={id} />
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
              <label htmlFor="adFormat">Ad Format:</label>
              <input
                type="text"
                id="adFormat"
                name="adFormat"
                value={campaign.adFormat || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="campaignBid">Campaign Bid:</label>
              <input
                type="text"
                id="campaignBid"
                name="campaignBid"
                value={campaign.campaignBid || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="bidRequests">Bid Requests:</label>
              <input
                type="text"
                id="bidRequests"
                name="bidRequests"
                value={campaign.bidRequests || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="videoImp">Video Impressions:</label>
              <input
                type="text"
                id="videoImp"
                name="videoImp"
                value={campaign.videoImp || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="visits">Visits:</label>
              <input
                type="text"
                id="visits"
                name="visits"
                value={campaign.visits || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="winRate">Win Rate:</label>
              <input
                type="text"
                id="winRate"
                name="winRate"
                value={campaign.winRate || ""}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="cost">Cost:</label>
              <input
                type="text"
                id="cost"
                name="cost"
                value={campaign.cost || ""}
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
