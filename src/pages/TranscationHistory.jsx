import React, { useEffect, useState } from "react";
import "../styles/TransactionHistory.css";
import Header from "../components/Header";
import axios from "axios";
const TranscationHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://bidvertiserserver.vercel.app/api/transactionRoutes/getalldata"
        );
        console.log(response.data);
        setTransactions(response.data);
      } catch (err) {
        setError("Failed to load transactions.");
      } finally {
        setLoading(false);
      } 
    };
    fetchTransactions();
  }, []);
  console.log(transactions);
  return (
    <div>
      <Header routename="Transaction History" />
      <div id="content" class="snipcss-Q9Ut7">
        <div id="loaderDiv" class="style-EMmjK">
          <div class="loading_text" id="loading_text" align="center">
            <i
              class="fa fa-spinner fa-pulse fa-3x fa-fw style-nBJek"
              id="style-nBJek"
            ></i>
            <br />
            <br />
            <span id="style-UavWx" class="style-UavWx">
              <b>Loading data, please wait.</b>
            </span>
          </div>
        </div>
        <div id="page">
          <table
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="table_style"
          >
            <tbody>
              <tr>
                <td width="100%">
                  <div id="style-6ZWVf" class="style-6ZWVf">
                    <input
                      type="Button"
                      class="function-button"
                      name=""
                      value="Create Pro-Forma Invoice"
                      onclick="popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_generate_proforma.dbm?ID_Token=8330690Z116PU6U',800,360,'no');"
                    />
                    <br />
                  </div>
                  <a href="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_Get_Extra_Details.dbm?ID_Token=8330690Z116PU6U&amp;frm=TH&amp;Edit=1">
                    Click here
                  </a>{" "}
                  to add custom <b>Invoice Details</b>
                  <br />
                  <br />
                  <table
                    border="0"
                    cellpadding="2"
                    cellspacing="1"
                    width="100%"
                    bgcolor="#CED8E2"
                    class="table_style"
                  >
                    <tbody>
                      <tr bgcolor="#FFFFFF">
                        <td align="left" id="style-hViME" class="style-hViME">
                          <b>Date</b>
                        </td>
                        <td align="left" id="style-CG2y6" class="style-CG2y6">
                          <b>Starting Balance</b>
                        </td>
                        <td align="left" id="style-J7Kyt" class="style-J7Kyt">
                          <b>Amount</b>
                        </td>
                        <td align="left" id="style-ioNLE" class="style-ioNLE">
                          <b>Bonus</b>
                        </td>
                        <td align="left" id="style-tSIUk" class="style-tSIUk">
                          <b>Order Number</b>
                        </td>
                        <td align="left" id="style-jyA4K" class="style-jyA4K">
                          <b>Payment Method</b>
                        </td>
                        <td align="center">
                          <b>Status</b>
                        </td>
                        <td align="center">
                          <b>Balance</b>
                        </td>
                        <td align="left" id="style-orY1B" class="style-orY1B">
                          <b>Statement Description</b>
                        </td>
                        <td align="left" id="style-THsBz" class="style-THsBz">
                          <b>Invoice</b>
                        </td>
                      </tr>
                      {transactions?.map((item) => (
                        <tr
                          bgcolor="#FFFFFF"
                          style={{ color: "color:#505050" }}
                        >
                          <td id="style-gSgmd" class="style-gSgmd">
                            {item.date}
                          </td>
                          <td id="style-XKBDp" class="style-XKBDp">
                            ${item.startingBalance}
                          </td>
                          <td id="style-79cgm" class="style-79cgm">
                            ${item.amount}
                          </td>
                          <td id="style-ZJ1oi" class="style-ZJ1oi">
                            ${item.bonus}
                          </td>
                          <td id="style-Jo19R" class="style-Jo19R">
                            {item.orderNumber}
                          </td>
                          <td id="style-ZSXx6" class="style-ZSXx6">
                            {" "}
                            {item.paymentMethod}
                          </td>
                          <td
                            align="center"
                            id="ps_2"
                            nowrap=""
                            class="style-IMmPp"
                          >
                            {" "}
                            {item.status}
                          </td>
                          <td id="style-oNohM" class="style-oNohM">
                            {" "}
                            ${item.balance}{" "}
                          </td>
                          <td align="left" id="style-F54ZV" class="style-F54ZV">
                            {" "}
                            {item.statementDescription}
                          </td>
                          <td align="left" id="style-CtyZI" class="style-CtyZI">
                            <a
                              href="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_Receipt.dbm?ID_Token=8330690Z116PU6U&amp;Order_Number=85B52036TE4267914&amp;Payment_ID=BV3278231912160717&amp;NEW_PAYMENT_ID_DISPLAY=BV3278231912160717&amp;as=file"
                              style={{ paddingRight: "5px" }}
                              download="BidVeritser_Invoice_BV3278231912160717.pdf"
                              title="Download as PDF"
                            >
                              <i
                                class="fa fa-download"
                                aria-hidden="true"
                                style={{ color: "#81d34a" }}
                              ></i>
                            </a>
                            <a href="javascript:receipt_func('&amp;Order_Number=85B52036TE4267914&amp;Payment_ID=BV3278231912160717&amp;NEW_PAYMENT_ID_DISPLAY=BV3278231912160717')">
                              {item.invoice}
                            </a>
                          </td>
                        </tr>
                      ))}
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

export default TranscationHistory;
