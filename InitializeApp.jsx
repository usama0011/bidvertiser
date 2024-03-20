import App from "./src/App.jsx";
import "./src/index.css";
import { Route, Routes } from "react-router-dom";

import SideBar from "./src/components/SideBar.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import { useState } from "react";
import ManageComapings from "./src/pages/ManageComapings.jsx";
import Newcompaings from "./src/pages/Newcompaings.jsx";
import ConversionUploads from "./src/pages/ConversionUploads.jsx";
import BigAutoMation from "./src/pages/BigAutoMation.jsx";

const InitializeApp = () => {
  const [islogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="main-container">
      {islogedIn === false ? (
        <LoginPage setIsLogedIn={setIsLogedIn} />
      ) : (
        <>
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/managecompaings" element={<ManageComapings />} />
              <Route path="/newcompaings" element={<Newcompaings />} />
              <Route path="/newcompaings" element={<ConversionUploads />} />
              <Route path="/bigautomationlog" element={<BigAutoMation />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default InitializeApp;
