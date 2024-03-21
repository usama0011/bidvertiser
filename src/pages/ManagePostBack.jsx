import React from "react";
import "../styles/ManagePostBack.css";
import Header from "../components/Header";

const ManagePostBack = () => {
  return (
    <div className="managepostbackscontainer">
      <Header routename="Manage Postbacks" />
      <div className="maingebostpbackcontainerbody">
        <div className="main_box_styless">
          <h3>Global Postback Setup:</h3>
          <table className="postback_table">
            <tbody>
              <tr>
                <td>
                  <table className="bdv_table_style">
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            The BidVertiser Global Postback allows you to link
                            between a certain click and a conversion (sale,
                            signup, lead etc). This valuable information will
                            help you to optimize traffic sources.
                            <br />
                            <br />
                            You should configure your affiliate tracking
                            software or your in-house solution to fire the
                            postback URL upon a conversion.
                            <br />
                            <br />
                            Available parameters are:
                            <br />
                            <ul>
                              <li>
                                {`{BV_CLICKID}`} - Make sure to Tag you ad with
                                this parameter under the "Edit Ad" page
                              </li>
                              <li>
                                {`{REVENUE}`} - Represents the revenue of your
                                conversion
                              </li>
                            </ul>
                            Please make sure to tag your campaign accordingly so
                            that the {`{BV_CLICKID}`} will be sent to your
                            target URL (in order for you to be able to send it
                            back to us using the link below).
                            <br />
                            <br />
                            <span className="note">Please note:</span> Postback
                            tracking is meant to track conversions, not
                            pageviews! Do not fire the postback for each
                            pageview on your site as it will lead to postback
                            suspension.
                            <br />
                            <br />
                            You can tag your campaign in the "Edit Ad" page
                            (under Manage Campaigns -&gt; Actions).
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Postback URL:</strong>
                          <br />
                          <div className="postback_url">
                            <span id="{BV_TRCK}">
                              http://secure.bidvertiser.com/performance/pc.dbm?ver=1.0&amp;AID=389723625&amp;CLICKID=
                              {`{BV_CLICKID}`}&amp;revenue={`{REVENUE}`}
                            </span>
                            <img
                              className="btn btn-default btn-copy js-tooltip js-copy"
                              src="https://my.bidvertiser.com/BidVertiser/Images/bdv_action_copy.png"
                              width="12"
                              height="12"
                              alt="copy"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          Global Postback activation date : 01-Jun-23
                          <br />
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePostBack;
