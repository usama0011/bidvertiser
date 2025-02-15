import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MonthlyInvoice.css";
import Header from "../components/Header";
import { Select, Spin } from "antd";

const { Option } = Select;

const MonthlyInvoice = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch invoices based on selected year
  const fetchInvoices = async (year) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://bidvertiserserver.vercel.app/api/invoices", // Update with your API route
        {
          params: { year }, // Send selected year as query param
        }
      );
      setInvoices(response.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
    setLoading(false);
  };

  // Fetch invoices when component mounts or selectedYear changes
  useEffect(() => {
    fetchInvoices(selectedYear);
  }, [selectedYear]);

  return (
    <div>
      <Header routename="Monthly Invoices" />
      <div id="page" className="snipcss-235El">
        <div className="main_box_style style-HMOeY" id="style-HMOeY">
          <h3>Select invoices' year:</h3>

          {/* Year Filter Dropdown */}
          <form style={{ marginBottom: "25px" }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                padding: "5px",
                fontSize: "14px",
                borderRadius: "3px",
                border: "1px solid #ccc",
              }}
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            <input style={{ marginLeft: "5px" }} type="submit" />
          </form>

          {/* Table for invoices */}
          <table
            className="main_table_style style-UZC8U"
            width="100%"
            id="style-UZC8U"
          >
            <thead>
              <tr>
                <th style={{ padding: "3px 10px" }}>Period</th>
                <th style={{ padding: "3px 10px" }}>Amount</th>
                <th style={{ padding: "3px 10px" }}>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="3"
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    <Spin size="large" tip="Loading invoices..." />
                  </td>
                </tr>
              ) : invoices.length > 0 ? (
                invoices.map((invoice) => (
                  <tr key={invoice._id}>
                    <td style={{ padding: "3px 10px" }}>{invoice.Date}</td>
                    <td style={{ padding: "3px 10px" }}>
                      ${invoice.Amount.toFixed(2)}
                    </td>
                    <td style={{ padding: "3px 10px" }}>
                      <a
                        href={invoice.Invoice}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {invoice.Invoice}
                      </a>
                      <a
                        href={invoice.Invoice}
                        style={{ float: "right" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa fa-download"
                          aria-hidden="true"
                          title="Download Invoice"
                          style={{ color: "#81d34a" }}
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    No invoices found for {selectedYear}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonthlyInvoice;
