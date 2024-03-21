import React from "react";
import "../styles/MultiStep.css";
import Header from "../components/Header";
const MultStep = () => {
  return (
    <div className="multistepoutercontainer">
      <Header routename="Multi-Step" />
      <div className="multipstepbodycontinaer">
        <div className="main_box_stylemulti">
          <h3>Global Postback Setup:</h3>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style={{ paddingLeft: "20px" }}
          >
            <tbody>
              <tr>
                <td>
                  <table
                    cellpadding="0"
                    cellspacing="5"
                    border="0"
                    className="bdv_000000_Text_11"
                    width="100%"
                    style={{ paddingTop: "5px" }}
                  >
                    <form method="post" name="bdvCode"></form>
                    <tbody>
                      <tr>
                        <td>
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            width="100%"
                            className="table_style"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Multi-Step Conversion </strong>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Multi-Step conversion tracking allows you to
                                  track several conversions for the same click.
                                  For example -{" "}
                                  <i>
                                    <b>registration</b>
                                  </i>{" "}
                                  and then at a later point -{" "}
                                  <i>
                                    <b>purchase</b>
                                  </i>
                                  . To integrate with the Global Postback - add
                                  additional parameter named "ctype" with a
                                  pre-configured value.
                                  <br />
                                  <br />
                                  Choose conversion type to be added to your
                                  Global Postback:
                                  <br />
                                  <br />
                                  <select name="ctype" className="ctype" id="ctypeID">
                                    <option value="{CTYPE}">Choose Step</option>
                                    <option value="Registration">
                                      Registration
                                    </option>
                                    <option value="Signup">Signup</option>
                                    <option value="Subscribe">Subscribe</option>
                                    <option value="Download">Download</option>
                                    <option value="Deposit">Deposit</option>
                                    <option value="FTD">FTD</option>
                                    <option value="AddToCart">AddToCart</option>
                                    <option value="BeginCheckout">
                                      BeginCheckout
                                    </option>
                                    <option value="Purchase">Purchase</option>
                                    <option value="Order">Order</option>
                                    <option value="FirstOpen">FirstOpen</option>
                                    <option value="Open">Open</option>
                                    <option value="Call">Call</option>
                                    <option value="Contact">Contact</option>
                                    <option value="OutboundClick">
                                      OutboundClick
                                    </option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <br />
                                  <br />
                                  <div
                                    onmouseover="addCopy('TRCK2','visible')"
                                    onmouseout="addCopy('TRCK2','hidden')"
                                  >
                                    <span
                                      id="{BV_TRCK2}"
                                      style={{ textDecoration: "underline" }}
                                    >
                                      http://secure.bidvertiser.com/performance/pc.dbm?ver=1.0&amp;AID=389723625&amp;CLICKID=
                                      {`{BV_CLICKID}`}&amp;revenue={`{REVENUE}`}
                                      &amp;ctype={`{CTYPE}`}
                                    </span>
                                    <img
                                      style={{
                                       visibility:"hidden",
                                       cursor:"pointer",
                                       paddingLeft:'5px'
                                      }}
                                      id="TRCK2"
                                      className="btn btn-default btn-copy js-tooltip js-copy"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      data-copy="{BV_TRCK2}"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/bdv_action_copy.png"
                                      width="12"
                                      height="12"
                                      data-original-title=""
                                      title=""
                                    />
                                    <span
                                      id="{BV_TRCK2}_comment"
                                      style={{
                                        marginLeft: "5px",
                                        visibility: "hidden",
                                        color: "rgba(17,115,183,1)",
                                        cursor: "pointer",
                                      }}
                                      className="btn btn-default btn-copy js-tooltip js-copy"
                                      data-toggle="tooltip"
                                      data-placement="bottom"
                                      data-copy="{BV_TRCK2}"
                                      data-original-title=""
                                      title=""
                                    ></span>
                                  </div>
                                  <br />
                                  <b>{`{CTYPE}`}</b> value is limited to the
                                  values above!
                                  <br />
                                  Any other type will not be processed.
                                </td>
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

export default MultStep;
