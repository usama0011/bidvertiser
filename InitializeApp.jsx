import App from "./src/App.jsx";
import "./src/index.css";
import { Route, Routes } from "react-router-dom";

import SideBar from "./src/components/SideBar.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import { useState, useRef, useEffect } from "react";

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
import AddFund from "./src/pages/AddFund.jsx";
import AutoMaticFunding from "./src/pages/AutoMaticFunding.jsx";
import ProFormaInvocies from "./src/pages/ProFormaInvocies.jsx";
import TranscationHistory from "./src/pages/TranscationHistory.jsx";
import MonthlyInvoice from "./src/pages/MonthlyInvoice.jsx";
import TrafficEstimator from "./src/pages/TrafficEstimator.jsx";
import RefferalProgram from "./src/pages/RefferalProgram.jsx";
import SubBitResearch from "./src/pages/SubBitResearch.jsx";
import Geo from "./src/styles/Geo.jsx";
import Targeting from "./src/pages/Targeting.jsx";
import Quality from "./src/pages/Quality.jsx";
import Bid from "./src/pages/Bid.jsx";
import Creative from "./src/pages/Creative.jsx";
import Budget from "./src/pages/Budget.jsx";
import DailyActivity from "./src/pages/DailyActivity.jsx";
import SwitchPublisher from "./src/pages/SwitchPublisher.jsx";
import CreateNewSummary from "./src/pages/CreateNewSummary.jsx";
import UpdateSummary from "./src/pages/UpdateSummary.jsx";
import UpdateSingle from "./src/pages/UpdateSingle.jsx";
import ViewCompaings from "./src/pages/ViewCompaings.jsx";
import UpdateSingleCompaing from "./src/pages/UpdateSingleCompaing.jsx";
import ViewDailyActivity from "./src/pages/ViewDailyActivity.jsx";
import ViewDailyAnalytics from "./src/pages/ViewDailyAnalytics.jsx";
import CreateAnalytics from "./src/pages/CreateAnalytics.jsx";
import CreateDailyActivity from "./src/pages/CreateDailyActivity.jsx";
import Test from "./src/pages/Test.jsx";
import PopUpItem from "./src/components/PopUpItem.jsx";
import UpdateDailyActivity from "./src/pages/UpdateDailyActivity.jsx";
import EditAnalytics from "./src/pages/EditAnalytics.jsx";

const InitializeApp = () => {
  const [islogedIn, setIsLogedIn] = useState(false);
  const [showpopup, setShowPopUp] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const popupContainerRef = useRef(null);

  const handlepopupclick = (id) => {
    setCurrentItem(id);
    setShowPopUp(true);
  };
  const handleClosePopup = (e) => {
    setShowPopUp(false);
  };
  console.log(currentItem);
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
              <Route
                path="/"
                element={<App handlepopupclick={handlepopupclick} />}
              />
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
              <Route
                path="/useragentblacklist"
                element={<UserAgentBlackList />}
              />
              <Route path="/apiaccess" element={<IPAcces />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/addfund" element={<AddFund />} />
              <Route path="/automaticfunding" element={<AutoMaticFunding />} />
              <Route path="/proformainvocies" element={<ProFormaInvocies />} />
              <Route
                path="/transactionhistory"
                element={<TranscationHistory />}
              />
              <Route path="/monthlyinvoice" element={<MonthlyInvoice />} />
              <Route path="/trafficestimator" element={<TrafficEstimator />} />
              <Route path="/refferalprogram" element={<RefferalProgram />} />
              <Route path="/subbitresearch" element={<SubBitResearch />} />
              <Route path="/bdv/BideVertiser/geo" element={<Geo />} />
              <Route
                path="/bdv/BideVertiser/targeting"
                element={<Targeting />}
              />
              <Route path="/bdv/BideVertiser/quality" element={<Quality />} />
              <Route path="/bdv/BideVertiser/bid" element={<Bid />} />
              <Route path="/bdv/BideVertiser/creative" element={<Creative />} />
              <Route path="/bdv/BideVertiser/budget" element={<Budget />} />
              <Route
                path="/reporting/dailyactivity"
                element={<DailyActivity />}
              />
              <Route path="/publisher" element={<SwitchPublisher />} />
              <Route path="/createnewsummary" element={<CreateNewSummary />} />
              <Route path="/updatesummary" element={<UpdateSummary />} />
              <Route path="/updatesummaryitem/:id" element={<UpdateSingle />} />
              <Route path="/viewcompaings" element={<ViewCompaings />} />
              <Route path="/test" element={<Test />} />
              <Route
                path="/updatecompaing/:id"
                element={<UpdateSingleCompaing />}
              />
              <Route
                path="/updatedailyactivity/:id"
                element={<UpdateDailyActivity />}
              />
              <Route path="/viewanalytics" element={<ViewDailyAnalytics />} />
              <Route
                path="/viewdailyactivity"
                element={<ViewDailyActivity />}
              />
              <Route path="/createanalytics" element={<CreateAnalytics />} />
              <Route path="/editanalytics/:id" element={<EditAnalytics />} />
              <Route
                path="/createdailyactivity"
                element={<CreateDailyActivity />}
              />
            </Routes>
          </div>
          {showpopup && (
            <div className="popupmaincontainer">
              <PopUpItem
                handlepopupclick={handleClosePopup}
                currentItem={currentItem}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InitializeApp;
