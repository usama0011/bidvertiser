import React from "react";
import "../styles/TestPostBack.css";
import Header from "../components/Header";

const TestPostBack = () => {
  return (
    <div className="testpostbackcontainer">
      <Header routename="Test Global Postback" />
      <div className="testpostbackbody">
        <div className="main_box_style" style={{ padding: "10px 25px" }}>
          <h3>Test Global Postback:</h3>
          <table width="100%" border="0" className="table_style" style={{ paddingLeft: "20px", marginRight: "15px" }}>
            <tbody>
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0" className="bdv_000000_Text_11" width="100%" style={{ paddingTop: "5px" }}>
                    <form method="post" name="bdvCode"></form>
                    <tbody>
                      <tr>
                        <td>
                          <table cellpadding="0" cellspacing="7" border="0" width="100%" className="bdv_000000_Text_11">
                            <tbody>
                              <tr>
                                <td>
                                  <b>Test Conversion Tracking</b>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  After you have integrated our Global Postback in your platform, you can use this tool to test the integration: <br />
                                  <ol className='Myoltest'>
                                    <li>Choose one of your campaigns. Only campaigns with the {`{BV_CLICKID}`} macro will be displayed.</li>
                                    <li>Click the generated link or copy &amp; paste it to a new window or tab</li>
                                    <li>Now you have reached your landing page with a clickid passed over to it</li>
                                    <li>Complete the process in your page to generate a conversion (say registration, download etc.)</li>
                                    <li>Verify in your platform that a conversion was recorded</li>
                                    <li>Refresh this page to make sure that the conversion is recorded here a well</li>
                                  </ol>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <b>Generate test postback link:</b>
                                  <select name="CID" className="CID" id="URL_ID" style={{ marginLeft: "15px" }}>
                                    <option value="NULL">Select Campaign to Test</option>
                                  </select>
                                  <div id="testLinkID2" style={{ visibility: "hidden", marginLeft: "30px" }}>
                                    <br />
                                    <b>Test Link:</b> <span style={{ textDecoration: "underline", cursor: "pointer", color: "rgba(17,115,183,1)" }}>Change CLICKID value</span><br />
                                    <span id="testLinkID"></span><br />
                                    <span style={{ textDecoration: "underline", cursor: "pointer", color: "rgba(17,115,183,1)" }}>Open in a new tab</span> or
                                    <span onMouseOver="addCopy('TRCK','visible')">
                                      <span id="{BV_TRCK}" style={{ textDecoration: "underline", cursor: "pointer" }} className="btn btn-default btn-copy js-tooltip js-copy" data-toggle="tooltip" data-placement="bottom" data-copy="{BV_TRCK}" data-original-title="">
                                        <img style={{ visibility: "hidden", cursor: "pointer", paddingLeft: "5px" }} id="TRCK" src="https://my.bidvertiser.com/BidVertiser/Images/bdv_action_copy.png" width="12" height="12" />
                                        <span id="{BV_TRCK}_comment" style={{ textDecoration: "underline", cursor: "pointer", marginLeft: "5px", visibility: "hidden", color: "rgba(17,115,183,1)" }}></span>
                                      </span>
                                    </span>
                                    <br /><br />
                                    <div>Now complete the conversion process and return to this page to check if the conversion shows</div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><br /></td>
                              </tr>
                              <tr>
                                <td align="left">
                                  <b>Test Conversions:</b>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Recent test conversions results (last 2 days): [<span style={{ textDecoration: "underline", cursor: "pointer", color: "rgba(17,115,183,1)" }} onClick="GetDATA();">Refresh</span>]
                                  <br /><br />
                                  <table border="0" cellpadding="2" cellspacing="1" width="100%" bgcolor="#CED8E2" className="bdv_000000_Text_10" id="GetP">
                                    <tbody>
                                      <tr style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                                        <td><b>ClickID</b></td>
                                        <td><b>Test Time (UTC)</b></td>
                                        <td><b>Result</b></td>
                                        <td><b>Revenue (optional)</b></td>
                                      </tr>
                                      <tr style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                                        <td colspan="4" align="center">No Data</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td>* Conversions will show up to 10 minutes after completion</td>
                              </tr>
                            </tbody>
                          </table>
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

export default TestPostBack;
