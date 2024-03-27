import React from "react";
import "../styles/AutoMaticFunding.css";
import Header from "../components/Header";

const AutoMaticFunding = () => {
  const handlePayPalClick = () => {
    // Handle PayPal click logic here
    // Example: selected_price=1000;document.getElementById('SCCDI').value=491496;switchViews('pp_fillment','',3);
    console.log("PayPal clicked");
  };

  const handleTrashIconClick = () => {
    // Handle trash icon click logic here
    // Example: if (confirm('You are about to cancel this PayPal agreement from your account.\nAre you sure?'));window.location.href='https://my.bidvertiser.com/bdv/Bidvertiser/bidvertiserA/bdv_adv_Do_Remove_PP.dbm?ID_Token=R150TN08K92EGQ9&amp;CC_Details_ID=491496';
    console.log("Trash icon clicked");
  };

  return (
    <div className="automaticfundingcontainer">
      <Header routename="Automatic Funding" />
      <div className="automatifuncdingbodycontainer">
        <div className="main_box_style">
          <div nowrap="" height="22" width="135" className="autotitle" style={{ fontSize: "20px" }}>
            Setup Automatic Funding Agreement
            <br />
            <br />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "800px",
              rowGap: "10px",
              marginBottom: "30px",
            }}
          >
            <div className="pay_line ">
              <div onClick={handlePayPalClick}>PayPal</div>
              <div>No Fees</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "17% 55% 30%",
                  gap: "5px",
                }}
              >
                <div onClick={handlePayPalClick}>
                <i class="fa-brands fa-paypal"></i>
                </div>
                <div
                  style={{
                    fontFamily: "Courier New",
                    fontSize: "12px",
                    color: "#505050",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{ marginRight: "10px" }}
                    title="smily6916@yahoo.com"
                  >
                    smily6916@yahoo.com
                  </span>
                </div>
                <div style={{ display: "flex", width: "40px" }}>
                  <div onClick={handleTrashIconClick}>
                    <i
                      style={{
                        lineHeight: "30px",
                        fontSize: "17px",
                        color: "blue",
                      }}
                      className="fa fa-trash-o"
                    ></i>
                  </div>
                </div>
              </div>
              <div onClick={handlePayPalClick}>
                <i
                  className="fas fa-chevron-right"
                  style={{ fontSize: "20px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoMaticFunding;
