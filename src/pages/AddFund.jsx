import React from "react";
import "../styles/AddFund.css";
import Header from "../components/Header";
const AddFund = () => {
  const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const selectedAmount = (_saID) => {
    for (let t = 1; t < 7; t++) {
      document.getElementById("sum" + t).style.backgroundColor = "#FFFFFF";
    }
    document.getElementById("sum" + _saID).style.backgroundColor = "#bcd7bf";
    let selected_price;
    if (_saID !== 6) {
      selected_price = document
        .getElementById("sum" + _saID)
        .getAttribute("value");
      document.getElementById("sum6").value = "";
      checkAgree(_saID);
    } else {
      selected_price = 1000;
      checkAgree(6);
    }
  };

  const checkAgree = (_saID) => {
    let selected_price;
    let pass = 1;
    if (document.getElementById("sum6").value === "") {
      if (selected_price === 100) {
        alert("Minimum deposit $100");
        pass = 0;
      }
    } else {
      if (
        !isNumeric(document.getElementById("sum6").value) ||
        document.getElementById("sum6").validity.rangeUnderflow
      ) {
        alert("Minimum deposit $100");
        pass = 0;
      } else selected_price = document.getElementById("sum6").value;
    }
    if (pass) {
      if (typeof document.xor_send.Price !== "undefined")
        document.xor_send.Price.value = selected_price;
      if (typeof document.xor_send.PayPal_amount !== "undefined")
        document.xor_send.PayPal_amount.value = selected_price;
      for (let dt = 1; dt < 7; dt++) {
        document.getElementById("sum" + dt).style.backgroundColor = "#FFFFFF";
      }
      document.getElementById("sum" + _saID).style.backgroundColor = "#bcd7bf";
      document.getElementById("paypal-button-container").style.cursor = "wait";
      document.getElementById("paypal-button-container").style.pointerEvents =
        "none";
      document.getElementById("paypal-button-container").style.opacity = "0.01";
      switchViews("mnl_pp_fillment");
    } else {
      if (typeof document.xor_send.Price !== "undefined")
        document.xor_send.Price.value = 1000;
      if (typeof document.xor_send.PayPal_amount !== "undefined")
        document.xor_send.PayPal_amount.value = 1000;
      selected_price = 1000;
      document.getElementById("sum6").value = "";
      document.getElementById("sum3").style.backgroundColor = "#bcd7bf";
      document.getElementById("sum6").style.backgroundColor = "#FFFFFF";
    }
  };

  const switchViews = (_id) => {
    if (_id === 1) {
      document.getElementById("cpnElement_1").style.opacity = "0.5";
      document.getElementById("cpnElement_2").style.opacity = "0.5";
      document.getElementById("cpnElement_3").disabled = true;
      document.getElementById("couponID").disabled = true;
      document.getElementById("adfElement_1").style.opacity = "1";
      document.getElementById("adfElement_2").style.opacity = "1";
      for (let dx = 1; dx < 6; dx++) {
        document
          .getElementById("sum_" + dx)
          .setAttribute("onclick", "selectedAmount(" + dx + ")");
        document.getElementById("sum_" + dx).style.cursor = "pointer";
      }
      document.getElementById("sum6").disabled = false;
    } else {
      document.getElementById("cpnElement_1").style.opacity = "1";
      document.getElementById("cpnElement_2").style.opacity = "1";
      document.getElementById("cpnElement_3").disabled = false;
      document.getElementById("couponID").disabled = false;
      document.getElementById("adfElement_1").style.opacity = "0.5";
      document.getElementById("adfElement_2").style.opacity = "0.5";
      for (let i = 1; i < 6; i++) {
        document
          .getElementById("sum_" + i)
          .setAttribute("onclick", "selectedAmount()");
        document.getElementById("sum_" + i).style.cursor = "default";
      }
      document.getElementById("sum6").disabled = true;
    }
  };
  return (
    <div className="addfundcontainer">
      <Header routename="Add Funds" />
      <div className="addufundcontainerbody">
        <div className="main_box_style">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            className="bdv_000000_Text_11"
          >
            <form
              action="order_bidvertise.dbm?ID_Token=R150TN08K92EGQ9&amp;AID=694693&amp;PN=BidVertiser"
              method="post"
              name="xor_send"
              id="xor_sendID"
            ></form>
            <input type="Hidden" name="Advertiser_ID" value="694693" />
            <tbody>
              <tr id="add_funds">
                <td colSpan="2">
                  <table
                    className="bdv_000000_Text_11"
                    width="100%"
                    border="0"
                    style={{ margin: "0 14px" }}
                  >
                    <tbody>
                      <tr>
                        <td
                          nowrap
                          height="22"
                          width="155"
                          style={{ fontSize: "20px" }}
                        >
                          <span id="adfElement_1">Add Funds:</span>
                        </td>
                        <td
                          style={{ position: "relative", top: "10px" }}
                          id="adfElement_2"
                        >
                          <div style={{ marginLeft: "5px", float: "left" }}>
                            <table
                              onClick={() => selectedAmount(1)}
                              id="sum_1"
                              className="fund_button"
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td>
                                  <td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td>
                                  <td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td>
                                  <td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td>
                                  <td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td><td>
                                    <li
                                      className="pay_met padder_num"
                                      id="sum1"
                                      value="300"
                                    >
                                      <span
                                        style={{
                                          color: "black",
                                          fontSize: "13px",
                                        }}
                                      >
                                        $300
                                      </span>
                                    </li>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* Remaining buttons */}
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

export default AddFund;
