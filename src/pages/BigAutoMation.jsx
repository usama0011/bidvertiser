import React from "react";
import Header from "../components/Header";
import "../styles/bigautmationlog.css";
const BigAutoMation = () => {
  return (
    <div>
      <Header routename="Big Automation Log" />
      <div className="biguatomationbody">
        <div class="main_box_style" style={{ padding: "10px 25px" }}>
          <h3>Bid Automation:</h3>
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="2"
            align="center"
            style={{ margin: "10px" }}
            class="bdv_000000_Text_11"
          >
            <tbody>
              <tr>
                <td width="100%">Bid Automation is not enabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BigAutoMation;
