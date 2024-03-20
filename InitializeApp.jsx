import App from "./src/App.jsx";
import "./src/index.css";
import { Route, Routes } from "react-router-dom";

import SideBar from "./src/components/SideBar.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import { useState } from "react";

const InitializeApp = () => {
  const [islogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="main-container">
      {islogedIn ? (
        <LoginPage setIsLogedIn={setIsLogedIn} />
      ) : (
        <>
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default InitializeApp;
