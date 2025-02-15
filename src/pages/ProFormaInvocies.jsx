import React from "react";
import "../styles/ProFormaInvoices.css";
import Header from "../components/Header";
const ProFormaInvocies = () => {
  return (
    <div>
      <Header routename="Pro-Forma Invoices" />
      <div id="content" class="snipcss-ITqLM">
        <div id="loaderDiv" class="style-LwPXe">
          <div class="loading_text" id="loading_text" align="center">
            <i
              class="fa fa-spinner fa-pulse fa-3x fa-fw style-OWQHU"
              id="style-OWQHU"
            ></i>
            <br />
            <br />
            <span id="style-om3Rj" class="style-om3Rj">
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
                  <div id="style-FMkFg" class="style-FMkFg">
                    <input
                      type="Button"
                      class="function-button"
                      name=""
                      value="Create Pro-Forma Invoice"
                      onclick="popup_view('https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_generate_proforma.dbm?ID_Token=8330690Z116PU6U&amp;AID=694693',800,360,'no');"
                    />
                    <br />
                  </div>
                  <a href="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_Get_Extra_Details.dbm?ID_Token=8330690Z116PU6U&amp;AID=694693&amp;frm=TH&amp;Edit=1">
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
                    id="PFList"
                  >
                    <tbody>
                      <tr bgcolor="#FFFFFF" id="norec">
                        <td colspan="4" id="style-9XQbH" class="style-9XQbH">
                          No records found!
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

export default ProFormaInvocies;
