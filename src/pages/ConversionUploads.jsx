import React from "react";
import Header from "../components/Header";
import "../styles/conversionupload.css";
const ConversionUploads = () => {
  return (
    <div>
      <Header routename="Coversion Upload" />
      <div className="coversoinuplaodbody">
        <div class="main_box_style">
          <h3 className="converstitle">Conversions Upload:</h3>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            class="bdv_000000_Text_11 conversion_upload"
          >
            <tbody>
              <tr>
                <td valign="top">
                  <table
                    cellpadding="7"
                    cellspacing="0"
                    border="0"
                    width="100%"
                    class="bdv_000000_Text_11"
                  >
                    <tbody>
                      <tr>
                        <td align="left">
                          Conversions Upload allows you to manually upload
                          conversions that were not reported during the last 30
                          days. <br /> <br />
                          You may want to use this feature in the following use
                          cases:
                          <br />
                          <ol class="use_cases_list">
                            <li>
                              You can't implement server to server postback and
                              you can only report conversions manually
                            </li>
                            <li>
                              You wish to correct any discrepancies in
                              conversion revenue between BidVertiser and your
                              own tracking software
                            </li>
                          </ol>
                          Similar to receiving a postback from your tracking
                          software, you will need to submit a valid ClickID,
                          represented by the Macro, and a matching revenue of
                          the specific ClickID
                          <br /> <br />
                          To upload conversions, enter one entry per line in the
                          following text box. <br />
                          Each line should contain the ClickID and the revenue
                          (payout), separated by a comma. <br />
                          (Maximum number of conversions in each batch upload is
                          limited to 5000)
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          <textarea
                            name="conversions"
                            class="conversions_textarea"
                            placeholder="BV_CLICKID_1, REVENUE_1
BV_CLICKID_2, REVENUE_2
BV_CLICKID_3, REVENUE_3
.
.
."
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          {" "}
                          <br />
                          <input
                            type="Hidden"
                            name="updateConversions"
                            value=""
                          />
                          <input
                            type="Button"
                            class="nnnnn"
                            name="updateConversionsButton"
                            value="Upload Conversions"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="lastoneupload">
                <td align="left">
                  <strong style={{marginBottom:10}}>Important Notes:</strong>
                  <br />
                  1. You can only upload conversions that were generated during
                  the last 30 days <br />
                  2. If the Click ID is already associated with a conversion
                  (due to either manual or postback conversion that was
                  received) - it will be ignored!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConversionUploads;
