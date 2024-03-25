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
import ManagePostBack from "./src/pages/ManagePostBack.jsx";
import MultStep from "./src/pages/MultStep.jsx";
import TestPostBack from "./src/pages/TestPostBack.jsx";
import ErrorLogs from "./src/pages/ErrorLogs.jsx";
import Summery from "./src/pages/Summery.jsx";
import Analytics from "./src/pages/Analytics.jsx";
import IPAcces from "./src/pages/IPAcces.jsx";
import UserAgentBlackList from "./src/pages/UserAgentBlackList.jsx";
import IPBlackList from "./src/pages/IPBlackList.jsx";
import DomainBlackList from "./src/pages/DomainBlackList.jsx";
import ManageDevcies from "./src/pages/ManageDevcies.jsx";
import TowFectorAuth from "./src/pages/TowFectorAuth.jsx";
import Changepassword from "./src/pages/Changepassword.jsx";
import EditProfile from "./src/pages/EditProfile.jsx";

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
              <Route path="/conversionupload" element={<ConversionUploads />} />
              <Route path="/bigautomationlog" element={<BigAutoMation />} />
              <Route path="/managepostbacks" element={<ManagePostBack />} />
              <Route path="/multistep" element={<MultStep />} />
              <Route path="/testpostback" element={<TestPostBack />} />
              <Route path="/errorlogs" element={<ErrorLogs />} />
              <Route path="/summery" element={<Summery />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/twofectorauth" element={<TowFectorAuth />} />
              <Route path="/changepassword" element={<Changepassword />} />
              <Route path="/managedevices" element={<ManageDevcies />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/domainsblacklist" element={<DomainBlackList />} />
              <Route path="/ipblacklist" element={<IPBlackList />} />
              <Route path="/useragentblacklist" element={<UserAgentBlackList />} />
              <Route path="/apiaccess" element={<IPAcces />} />
              <Route path="/editprofile" element={<EditProfile />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default InitializeApp;
