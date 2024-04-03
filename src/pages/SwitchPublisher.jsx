import React from "react";
import Header from "../components/Header";
import "../styles/Publisher.css";
import { useNavigate } from "react-router-dom";
const SwitchPublisher = () => {
  const navigate = useNavigate();
  return (
    <div className="publisherContainer">
      <Header routename="Switch Publisher" />
      <div className="publisherbodycontainer">
        <button onClick={() => navigate("/createnewsummary")}>
          Create summary
        </button>
        <button onClick={() => navigate("/updatesummary")}>View summary</button>
        <button onClick={() => navigate("/viewcompaings")}>
          View Comapaings
        </button>
        <button onClick={() => navigate("/viewanalytics")}>
          View Analytics
        </button>
        <button onClick={() => navigate("/viewdailyactivity")}>
          Daily Activity
        </button>
        <button onClick={() => navigate("/createanalytics")}>
          Create Analytics
        </button>
        <button onClick={() => navigate("/createdailyactivity")}>
          Create Daily Activity
        </button>
        <button onClick={() => navigate("/test")}>
          Test
        </button>
      </div>
    </div>
  );
};

export default SwitchPublisher;
