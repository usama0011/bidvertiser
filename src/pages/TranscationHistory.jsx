import React, { useState, useEffect } from "react";
import "../styles/TransactionHistory.css";
import Header from "../components/Header";
import { DownloadOutlined } from "@ant-design/icons";

const TranscationHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/transactionRoutes"
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
  console.log(transactions, "ddd");
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
                      {transactions.map((transaction, index) => (
                        <tr
                          key={index}
                          bgcolor="#FFFFFF"
                          style={{ color: "#505050" }}
                        >
                          <td id="style-8oMx8" className="style-8oMx8">
                            {transaction.date}
                          </td>
                          <td id="style-1gvHN" className="style-1gvHN">
                            {transaction.startingBalance}
                          </td>
                          <td id="style-kWihF" className="style-kWihF">
                            {transaction.amount}
                          </td>
                          <td id="style-rSThp" className="style-rSThp">
                            {transaction.bonus}
                          </td>
                          <td id="style-7cVSx" className="style-7cVSx">
                            {transaction.orderNumber}
                          </td>
                          <td id="style-5TfUG" className="style-5TfUG">
                            {transaction.paymentMethod}
                          </td>
                          <td
                            align="center"
                            id="ps_1"
                            nowrap=""
                            className="style-xqzgI"
                          >
                            {transaction.status}
                          </td>
                          <td id="style-rU1ow" className="style-rU1ow">
                            {transaction.balance}
                          </td>
                          <td
                            align="left"
                            id="style-iUaKA"
                            className="style-iUaKA"
                          >
                            {transaction.statementDescription}
                          </td>
                          <td
                            align="left"
                            id="style-8dYGL"
                            className="style-8dYGL"
                          >
                            {transaction.invoice ? (
                              <a
                                href={`https://your-api-url/invoices/${transaction.invoice}`}
                                download
                              >
                                <DownloadOutlined
                                  style={{ color: "#81d34a", fontSize: "18px" }}
                                />
                              </a>
                            ) : (
                              "-"
                            )}
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
