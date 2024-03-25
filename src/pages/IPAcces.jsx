import React from "react";
import "../styles/IPAccess.css";
import Header from "../components/Header";

const IPAcces = () => {
  return (
    <div className="IPAccessContainer">
      <Header routename="API" />
      <div className="apimainbodycontaienr">
        <div id="page">
          <div className="main_box_style" style={{ padding: "10px 25px" }}>
            <h3>API Setup:</h3>
            <table cellpadding="0" cellspacing="15" border="0" width="100%">
              <tbody>
                <tr>
                  <td width="150" valign="top">
                    <font className="bdv_000000_Text_10">API Key :</font>
                  </td>
                  <td width="*" valign="top">
                    <font className="bdv_000000_Text_10">B8A7C58D88129E6AB76C9FF0D4406E17</font><br/>
                    <button className="function-button" style={{ marginLeft: "42px", marginTop: "10px" }} onClick={() => { if (window.confirm('Are you sure you want to Generate a new API KEY?\n\nYou will need to REPLACE ALL references to the old API KEY in your API calls!')) window.location.href = 'https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_api_settings.dbm?ID_Token=R150TN08K92EGQ9&amp;Edit=1&amp;newKey=1'; }}>reGenerate Key</button>
                  </td>
                </tr>
                <tr><td><br/></td></tr>
                <tr>
                  <td width="150" valign="top">
                    <font className="bdv_000000_Text_10">API Documentation :</font>
                  </td>
                  <td width="*" valign="top">
                    <font className="bdv_000000_Text_10"><a href="https://app.swaggerhub.com/apis-docs/BidVertiser/BidVertiser/2.1-oas3" target="_blank">Click here</a> to view the full API documentation [v2.1 - beta version] (opens in a new window)
                      <br/><br/>
                      Request body - under the "Request body" section in the API documentation you will find "Example Value" which shows the way the JSON should be scriptted while under "Schema" you can see more detailed information regarding the values and meaning of each parameter.
                      <br/><br/>
                      <b>Please note: </b>The API is fully operational - every action you take here will affect your campaigns, so please exercise caution when proceeding.
                    </font>
                  </td>
                </tr>
              </tbody>
            </table>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPAcces;
