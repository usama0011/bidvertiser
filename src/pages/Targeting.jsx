import React from "react";
import "../styles/Targeting.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Targeting = () => {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/bdv/BideVertiser/quality");
  };
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
        <div className="breadcurmcontainer">
          <div className="button-bar">
            <a
              href="#"
              style={{ backgroundColor: "#81d34a", color: "white" }}
              className="button next"
            >
              Ad type
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              GEO
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Targeting
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Quality
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Bid
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Creative
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Budget
            </a>
          </div>
          <div className="button-bar">
            <a href="#" className="button next">
              Advanced Settings
            </a>
          </div>
        </div>
        <br />
        <div className="internatargetContainerbody">
          <div className="conainertargetone">
            <div>
            <input type="radio" name="" id="" />
            </div>
            <div>
              <strong style={{ fontWeight: "bold" }}>
                Enable RON (Run Of Network) - No Targeting
              </strong>
              <br />
              <p>
                Choose this option if you want your ad to show for every
                impression served. This option is useful for websites that need
                high traffic volume at a lower price and for non-targeted
                products such as general downloads, casinos, general affiliate
                offers etc.
              </p>
              <span>Set Negative Keywords</span>
              {/* togogle start */}
              <p>
                Enter Keywords separated with NEW LINE. Do NOT use minus sign,
                just type the keywords as they are.
              </p>
              <br />
              <p>Your campaign will not show for the keywords listed here.</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              {/* toggle end */}
            </div>
          </div>
          <div className="conainertargettwo">
            <div>
            <input type="radio" name="" id="" />
            </div>
            <div>
              <h3>Enable Contextual Targeting</h3>
              <p>
                Use this tool to target your ads by keywords and brands. If you
                have a niche product, choose keywords and brands that are
                related to your business.
              </p>
              <br />
              <br />
              <p>
                Use broad phrases only, preferably 1 keyword per phrase and max
                of 2.
              </p>
              <br />
              <p>
                <b>Important:</b> Using brand names of leading companies that
                offer a similar product to yours can get you highly engaged
                visitors! For example, use the keyword "adidas" when running
                promotion for sports shoes (or even for a competing brand)
              </p>
              <table
                width="100%"
                border="0"
                style={{ margin: "20px  0" }}
                className="bdv_000000_Text_11"
              >
                <tbody>
                  <tr>
                    <td align="left" valign="top" width="1">
                      <input
                        className="buttonaddkeywork"
                        id="keywordsSpan"
                        type="Button"
                        name="categoriesButton"
                        value="Add Keywords"
                        onclick="updateClickedOption(2);checkRON();"
                        style={{
                          width: "150px",
                          backgroundColor: "rgb(129, 211, 74)",
                        }}
                        disabled=""
                      />
                    </td>

                    <td
                      align="left"
                      valign="top"
                      width="1"
                      style={{ position: "relative" }}
                    >
                      <input
                        className="buttonaddkeywork"
                        id="brandsSpan"
                        type="Button"
                        name="categoriesButton"
                        value="Add Brands"
                        onclick="updateClickedOption(3);checkRON();"
                        style={{
                          width: "150px",
                          marginLeft: "20px",
                          backgroundColor: "rgb(129, 211, 74)",
                        }}
                        disabled=""
                      />
                      <div className="buttonaddkeyworkk">
                        <div className="highlightttt"></div>
                      </div>
                      <div
                        className="buttonaddkeyworkk"
                        style={{
                          color: "white",
                          margin: "-2px 3px",
                          fontsize: "7px",
                        }}
                      >
                        NEW
                      </div>
                    </td>

                    <td width="*"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" class="function-button">
            Back
          </button>
          <button
            onClick={handleClickNext}
            id="mob_select"
            class="function-button"
            style={{ margin: "5px" }}
          >
            Done Selecting
          </button>
        </center>
      </div>
    </div>
  );
};

export default Targeting;
