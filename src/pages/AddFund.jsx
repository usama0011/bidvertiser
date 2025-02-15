import React from "react";
import "../styles/AddFund.css";
const AddFund = () => {
  return (
    <div>
      <div id="page" class="snipcss-PlDs4">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://my.bidvertiser.com/BidVertiser/Css/cryptofont.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://my.bidvertiser.com/BidVertiser/Css/paymentfont.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&amp;display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=0.3" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <div class="main_box_style style-GDaCQ" id="style-GDaCQ">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            class="bdv_000000_Text_11"
          >
            <form
              action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/payments/order_bidvertise.dbm?ID_Token=8330690Z116PU6U&amp;AID=694693&amp;PN=BidVertiser"
              method="post"
              name="xor_send"
              id="xor_sendID"
            ></form>
            <input type="Hidden" name="Advertiser_ID" value="694693" />
            <tbody>
              <tr id="add_funds">
                <td colspan="2">
                  <div>
                    <table
                      class="bdv_000000_Text_11 style-Io3bx"
                      width="100%"
                      border="0"
                      id="style-Io3bx"
                    >
                      <tbody>
                        <tr>
                          <td
                            nowrap=""
                            height="22"
                            width="155"
                            id="style-OqzoE"
                            class="style-OqzoE"
                          >
                            <span id="adfElement_1"> Add Funds: </span>
                          </td>
                          <td id="adfElement_2" class="style-BCgNX">
                            <div id="style-EdlWR" class="style-EdlWR">
                              <table
                                onclick="selectedAmount(1)"
                                id="sum_1"
                                class="fund_button"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <li
                                        class="pay_met padder_num"
                                        id="sum1"
                                        value="300"
                                      >
                                        <span
                                          id="style-3QDRA"
                                          class="style-3QDRA"
                                        >
                                          $300
                                        </span>
                                      </li>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div id="style-3avov" class="style-3avov">
                              <table
                                onclick="selectedAmount(2)"
                                id="sum_2"
                                class="fund_button"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <li
                                        class="pay_met padder_num"
                                        id="sum2"
                                        value="500"
                                        style={{ backgroundColor: "#FFFFFF" }}
                                      >
                                        <span
                                          id="style-ocMj9"
                                          class="style-ocMj9"
                                        >
                                          $500
                                        </span>
                                      </li>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div id="style-lzpN4" class="style-lzpN4">
                              <table
                                onclick="selectedAmount(3)"
                                id="sum_3"
                                class="fund_button style-1Z37G"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <li
                                        class="pay_met padder_num"
                                        id="sum3"
                                        value="1000"
                                        style={{ backgroundColor: "#bcd7bf" }}
                                      >
                                        <span
                                          id="style-ns74I"
                                          class="style-ns74I"
                                        >
                                          $1000
                                        </span>
                                      </li>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div id="style-Peoz4" class="style-Peoz4">
                                Popular!
                                <br />
                                <br />
                              </div>
                            </div>
                            <div id="style-edQ63" class="style-edQ63">
                              <table
                                onclick="selectedAmount(4)"
                                id="sum_4"
                                class="fund_button"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <li
                                        class="pay_met padder_num"
                                        id="sum4"
                                        value="2500"
                                      >
                                        <span
                                          id="style-D5oe3"
                                          class="style-D5oe3"
                                        >
                                          $2500
                                        </span>
                                      </li>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div id="style-SyPhB" class="style-SyPhB">
                              <table
                                onclick="selectedAmount(5)"
                                id="sum_5"
                                class="fund_button"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <li
                                        class="pay_met padder_num"
                                        id="sum5"
                                        value="10000"
                                      >
                                        <span
                                          id="style-Owmfs"
                                          class="style-Owmfs"
                                        >
                                          $10000
                                        </span>
                                      </li>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div id="style-qsMov" class="style-qsMov">
                              {" "}
                              or{" "}
                              <span id="dsign" class="style-E3MXB">
                                $
                              </span>
                              <input
                                id="sum6"
                                type="number"
                                onblur="selectedAmount(6)"
                                min="100"
                                placeholder="Custom Amount"
                                value=""
                                class="form-field style-oNfRK"
                              />
                              <div id="style-hDo8D" class="style-hDo8D">
                                ($100 minimum)
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            cellpadding="5"
            cellspacing="5"
            width="100%"
            class="bdv_000000_Text_11"
            border="0"
            id="setcoupon"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="bdv_000000_Text_11"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style={{ padding: "5px" }}
                  >
                    <tbody>
                      <tr>
                        <td
                          height="72"
                          valign="top"
                          width="155"
                          style={{ paddingTop: "10px" }}
                        ></td>
                        <td height="72" valign="top">
                          <div>
                            <table
                              class="table_style"
                              style={{ marginLeft: "13px" }}
                            >
                              <tbody>
                                <tr>
                                  <td id="cpnElement_2">
                                    <div id="style-8ROk7" class="style-8ROk7">
                                      <input
                                        type="text"
                                        id="couponID"
                                        value=""
                                        name="coupon"
                                        align="left"
                                        placeholder="Have a Coupon Code?"
                                        class="style-cmaVX"
                                      />
                                      <button
                                        type="button"
                                        class="function-button style-kkHrW"
                                        id="cpnElement_3"
                                        onclick="checkCoupon(document.getElementById('couponID').value);"
                                      >
                                        Activate Coupon
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="Hidden" name="Pass003" value="0" />
          <input type="Hidden" name="PayPal_currency_code" value="USD" />
          <input type="Hidden" name="PayPal_Currency_Option" value="0" />
          <input type="Hidden" name="PayPal_member_id" value="1737127" />
          <input type="Hidden" name="PayPal_amount" value="1000" />
          <input
            type="Hidden"
            name="Paypal_BidVertiser_http_Path"
            value="https://my.bidvertiser.com/bdv/BidVertiser/"
          />
          <input type="hidden" name="fundOpt" value="0" />
          <table
            cellpadding="5"
            cellspacing="5"
            width="100%"
            class="bdv_000000_Text_11"
            border="0"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    class="bdv_000000_Text_11 style-X6F18"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    id="style-X6F18"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="hidden"
                            id="PPID"
                            name="PPID"
                            value="7Y830252YF948035P"
                          />
                          <div id="APS" class="style-8pJNZ">
                            <span
                              align="left"
                              id="showExistingTitle"
                              class="style-zsaVF"
                            >
                              <b>
                                Existing Payment Sources:
                                <br />
                                <br />
                              </b>
                            </span>
                            <div id="style-Fpt8e" class="style-Fpt8e"></div>
                            <span
                              align="left"
                              id="showExistingTitle"
                              class="style-gOUff"
                            >
                              <div>
                                Payment Sources:
                                <br />
                                <br />
                              </div>
                            </span>
                            <div id="style-kq6tU" class="style-kq6tU">
                              <div
                                class="pay_line "
                                onclick="switchViews('cgx_fillment_card');"
                                id="cc"
                              >
                                <div>Credit Cards</div>
                                <div>
                                  No Fees
                                  <span id="style-Lobdg" class="style-Lobdg">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div id="style-jFNG6" class="style-jFNG6">
                                  <div>
                                    <i
                                      title="Visa"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-visa"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="MasterCard, Maestro"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-mastercard-alt"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="American Express"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-american-express-alt"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      class="pf pf-diners"
                                      style={{ fontSize: "20px" }}
                                      title="Diners Club"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="JCB"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-jcb"
                                    ></i>
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('xor_fillment_card');"
                                id="cc"
                              >
                                <div>Credit Cards</div>
                                <div>
                                  No Fees
                                  <span id="style-Tiinx" class="style-Tiinx">
                                    MANUAL APPROVAL
                                  </span>
                                </div>
                                <div id="style-kfSyp" class="style-kfSyp">
                                  <div>
                                    <i
                                      title="Visa"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-visa"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="MasterCard, Maestro"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-mastercard-alt"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="American Express"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-american-express-alt"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      class="pf pf-diners"
                                      style={{ fontSize: "20px" }}
                                      title="Diners Club"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="JCB"
                                      style={{ fontSize: "20px" }}
                                      class="pf pf-jcb"
                                    ></i>
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div class="paypal-button" id="paypalTitle">
                                <div
                                  id="paypal-button-container"
                                  class="style-FlmL5"
                                >
                                  <div
                                    id="zoid-paypal-buttons-uid_b1447ef61d_mte6ndg6mdg"
                                    class="paypal-buttons paypal-buttons-context-iframe paypal-buttons-label-unknown paypal-buttons-layout-horizontal style-wwE3X"
                                    data-paypal-smart-button-version="5.0.470"
                                  >
                                    <iframe
                                      allowtransparency="true"
                                      name="__zoid__paypal_buttons__eyJzZW5kZXIiOnsiZG9tYWluIjoiaHR0cHM6Ly9teS5iaWR2ZXJ0aXNlci5jb20ifSwibWV0YURhdGEiOnsid2luZG93UmVmIjp7InR5cGUiOiJwYXJlbnQiLCJkaXN0YW5jZSI6MH19LCJyZWZlcmVuY2UiOnsidHlwZSI6InJhdyIsInZhbCI6IntcInVpZFwiOlwiem9pZC1wYXlwYWwtYnV0dG9ucy11aWRfYjE0NDdlZjYxZF9tdGU2bmRnNm1kZ1wiLFwiY29udGV4dFwiOlwiaWZyYW1lXCIsXCJ0YWdcIjpcInBheXBhbC1idXR0b25zXCIsXCJjaGlsZERvbWFpbk1hdGNoXCI6e1wiX190eXBlX19cIjpcInJlZ2V4XCIsXCJfX3ZhbF9fXCI6XCJcXFxcLnBheXBhbFxcXFwuKGNvbXxjbikoOlxcXFxkKyk/JFwifSxcInZlcnNpb25cIjpcIjEwXzRfMFwiLFwicHJvcHNcIjp7XCJzdHlsZVwiOntcImxhYmVsXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImxheW91dFwiOlwiaG9yaXpvbnRhbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJzaGFwZVwiOlwicmVjdFwiLFwidGFnbGluZVwiOnRydWUsXCJoZWlnaHRcIjozMyxcInBlcmlvZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJtZW51UGxhY2VtZW50XCI6XCJiZWxvd1wiLFwiZGlzYWJsZU1heFdpZHRoXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImRpc2FibGVNYXhIZWlnaHRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYm9yZGVyUmFkaXVzXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifX0sXCJjcmVhdGVPcmRlclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2EyM2Y3NjBiYTJfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcImNyZWF0ZU9yZGVyXCJ9fSxcIm9uQXBwcm92ZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2RmNzMzOTVlOTVfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcIm9uQXBwcm92ZVwifX0sXCJjc3BOb25jZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJhcHBTd2l0Y2hXaGVuQXZhaWxhYmxlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInJlZGlyZWN0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNTNiYjJkYWY2N19tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwicmVkaXJlY3RcIn19LFwibGlzdGVuRm9ySGFzaENoYW5nZXNcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9jZWI3YmQ2MzgxX210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJsaXN0ZW5Gb3JIYXNoQ2hhbmdlc1wifX0sXCJyZW1vdmVMaXN0ZW5lckZvckhhc2hDaGFuZ2VzXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfOGJlYzlhYTM3MV9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwicmVtb3ZlTGlzdGVuZXJGb3JIYXNoQ2hhbmdlc1wifX0sXCJsaXN0ZW5Gb3JWaXNpYmlsaXR5Q2hhbmdlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZDhmZTE1MzQ1Y19tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwibGlzdGVuRm9yVmlzaWJpbGl0eUNoYW5nZVwifX0sXCJyZW1vdmVMaXN0ZW5lckZvclZpc2liaWxpdHlDaGFuZ2VzXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNjkyYzg1ZGVlOF9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwicmVtb3ZlTGlzdGVuZXJGb3JWaXNpYmlsaXR5Q2hhbmdlc1wifX0sXCJhbGxvd0JpbGxpbmdQYXltZW50c1wiOnRydWUsXCJhbW91bnRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYXBpU3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImFwcGxlUGF5XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImFwcGxlUGF5U3VwcG9ydFwiOmZhbHNlLFwiYnJhbmRlZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJidXR0b25Mb2NhdGlvblwiOlwibXkuYmlkdmVydGlzZXIuY29tXCIsXCJidXR0b25TZXNzaW9uSURcIjpcInVpZF9hZTgxMmE0NDNmX210ZTZuZGc2bWRnXCIsXCJidXR0b25TaXplXCI6XCJsYXJnZVwiLFwiYnV5ZXJDb3VudHJ5XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImNsaWVudEFjY2Vzc1Rva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImN1c3RvbWVySWRcIjpcIlwiLFwiY2xpZW50SURcIjpcIkFacVg3bVJMNzFhSUFYVE5FLVQxVkpsMG1qSXVNWkRlMENMcDZQdWNIY2hUeXZwdHJBb1JWdlBxOXZoWnNHdUhVSHpXdmoyVzI3WDRsTDdKXCIsXCJjbGllbnRNZXRhZGF0YUlEXCI6XCJ1aWRfMjMzMjZhYjQ4Yl9tdGU2bmRnNm1kZ1wiLFwiY29tbWl0XCI6dHJ1ZSxcImNvbXBvbmVudHNcIjpbXCJidXR0b25zXCJdLFwiY3JlYXRlQmlsbGluZ0FncmVlbWVudFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJjcmVhdGVTdWJzY3JpcHRpb25cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY3JlYXRlVmF1bHRTZXR1cFRva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImNzcFwiOntcIm5vbmNlXCI6XCJcIn0sXCJjdXJyZW5jeVwiOlwiVVNEXCIsXCJkZWJ1Z1wiOmZhbHNlLFwiZGlzYWJsZUNhcmRcIjpbXSxcImRpc2FibGVGdW5kaW5nXCI6W10sXCJkaXNhYmxlU2V0Q29va2llXCI6dHJ1ZSxcImRpc3BsYXlPbmx5XCI6W10sXCJlbmFibGVGdW5kaW5nXCI6W10sXCJlbmFibGVUaHJlZURvbWFpblNlY3VyZVwiOmZhbHNlLFwiZW5hYmxlVmF1bHRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiZW52XCI6XCJwcm9kdWN0aW9uXCIsXCJleHBlcmltZW50XCI6e1wiZW5hYmxlVmVubW9cIjpmYWxzZSxcInZlbm1vVmF1bHRXaXRob3V0UHVyY2hhc2VcIjpmYWxzZSxcInZlbm1vV2ViRW5hYmxlZFwiOmZhbHNlLFwidmVubW9FbmFibGVXZWJPbk5vbk5hdGl2ZUJyb3dzZXJcIjpmYWxzZX0sXCJleHBlcmltZW50YXRpb25cIjp7fSxcImZsb3dcIjpcInB1cmNoYXNlXCIsXCJmdW5kaW5nRWxpZ2liaWxpdHlcIjp7XCJwYXlwYWxcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcInBheWxhdGVyXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6ZmFsc2UsXCJwcm9kdWN0c1wiOntcInBheUluM1wiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXJpYW50XCI6bnVsbH0sXCJwYXlJbjRcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmFyaWFudFwiOm51bGx9LFwicGF5bGF0ZXJcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXJpYW50XCI6bnVsbH19fSxcImNhcmRcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJicmFuZGVkXCI6dHJ1ZSxcImluc3RhbGxtZW50c1wiOmZhbHNlLFwidmVuZG9yc1wiOntcInZpc2FcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcIm1hc3RlcmNhcmRcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImFtZXhcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImRpc2NvdmVyXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJoaXBlclwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjpmYWxzZX0sXCJlbG9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJqY2JcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJtYWVzdHJvXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJkaW5lcnNcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImN1cFwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9fSxcImd1ZXN0RW5hYmxlZFwiOmZhbHNlfSxcInZlbm1vXCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhdWx0YWJsZVwiOmZhbHNlfSxcIml0YXVcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImNyZWRpdFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYXBwbGVwYXlcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInNlcGFcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImlkZWFsXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJiYW5jb250YWN0XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJnaXJvcGF5XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJlcHNcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInNvZm9ydFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwibXliYW5rXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJwMjRcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIndlY2hhdHBheVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwicGF5dVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYmxpa1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwidHJ1c3RseVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwib3h4b1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYm9sZXRvXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJib2xldG9iYW5jYXJpb1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwibWVyY2Fkb3BhZ29cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIm11bHRpYmFuY29cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInNhdGlzcGF5XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJwYWlkeVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9fSxcImZ1bmRpbmdTb3VyY2VcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiZ2V0UGFnZVVybFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzI3YzcxOGU3ODNfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcImdldFBhZ2VVcmxcIn19LFwiZ2V0UG9wdXBCcmlkZ2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF85MDQxMzdkZTU2X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJnZXRQb3B1cEJyaWRnZVwifX0sXCJnZXRQcmVyZW5kZXJEZXRhaWxzXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNGVjODYxMTVmY19tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiZ2V0UHJlcmVuZGVyRGV0YWlsc1wifX0sXCJnZXRRdWVyaWVkRWxpZ2libGVGdW5kaW5nXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfN2Q0OWVhYzVlN19tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiZ2V0UXVlcmllZEVsaWdpYmxlRnVuZGluZ1wifX0sXCJob3N0ZWRCdXR0b25JZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJpbnRlbnRcIjpcImF1dGhvcml6ZVwiLFwianNTZGtMaWJyYXJ5XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImxvY2FsZVwiOntcImNvdW50cnlcIjpcIlVTXCIsXCJsYW5nXCI6XCJlblwifSxcIm1lcmNoYW50SURcIjpbXSxcIm1lcmNoYW50UmVxdWVzdGVkUG9wdXBzRGlzYWJsZWRcIjpmYWxzZSxcIm1lc3NhZ2VcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwibm9uY2VcIjpcIlwiLFwib25DYW5jZWxcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25DbGlja1wiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvbkNvbXBsZXRlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm9uSW5pdFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2JjMTkwNWY0YThfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcIm9uSW5pdFwifX0sXCJvbk1lc3NhZ2VDbGlja1wiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzU1ZTZiYjdlMDJfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcIm9uTWVzc2FnZUNsaWNrXCJ9fSxcIm9uTWVzc2FnZUhvdmVyXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfMmZlZTNhY2QzOV9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwib25NZXNzYWdlSG92ZXJcIn19LFwib25NZXNzYWdlUmVhZHlcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF85NWYxNTkyY2E3X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJvbk1lc3NhZ2VSZWFkeVwifX0sXCJvblNoaXBwaW5nQWRkcmVzc0NoYW5nZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvblNoaXBwaW5nQ2hhbmdlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm9uU2hpcHBpbmdPcHRpb25zQ2hhbmdlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImhhc1NoaXBwaW5nQ2FsbGJhY2tcIjpmYWxzZSxcInBhZ2VUeXBlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInBhcnRuZXJBdHRyaWJ1dGlvbklEXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInBheW1lbnRNZXRob2ROb25jZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJwYXltZW50TWV0aG9kVG9rZW5cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwicGF5bWVudFJlcXVlc3RcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwicGxhdGZvcm1cIjpcImRlc2t0b3BcIixcInJlZmVycmVyRG9tYWluXCI6XCJteS5iaWR2ZXJ0aXNlci5jb21cIixcInJlbWVtYmVyXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfOTA3YTA4MGFjYl9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwicmVtZW1iZXJcIn19LFwicmVtZW1iZXJlZFwiOltdLFwicmVuZGVyZWRCdXR0b25zXCI6W1wicGF5cGFsXCIsXCJwYXlsYXRlclwiXSxcInNlc3Npb25JRFwiOlwidWlkXzIzMzI2YWI0OGJfbXRlNm5kZzZtZGdcIixcInNka0NvcnJlbGF0aW9uSURcIjpcInByZWJ1aWxkXCIsXCJzZXNzaW9uU3RhdGVcIjp7XCJnZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF82N2E4ZjBjNDQ5X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJnZXRcIn19LFwic2V0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZTQ3NTIzMjg2Y19tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwic2V0XCJ9fX0sXCJnZXRTaG9wcGVySW5zaWdodHNVc2VkXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZGNkMmMzMzJiYl9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiYnJcIn19LFwic3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInN0b3JhZ2VJRFwiOlwidWlkXzFmMDVkNGM4ZTZfbXRlNm5kZzZtZGdcIixcInN0b3JhZ2VTdGF0ZVwiOntcImdldFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2Q0YzM0MDk1N2JfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcImdldFwifX0sXCJzZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8xMjY3YjA5MmMwX210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJzZXRcIn19fSxcInN1cHBvcnRlZE5hdGl2ZUJyb3dzZXJcIjpmYWxzZSxcInN1cHBvcnRzUG9wdXBzXCI6dHJ1ZSxcInRlc3RcIjp7XCJhY3Rpb25cIjpcImNoZWNrb3V0XCJ9LFwidXNlckV4cGVyaWVuY2VGbG93XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInVzZXJJRFRva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInZhdWx0XCI6ZmFsc2UsXCJ3YWxsZXRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9fSxcImV4cG9ydHNcIjp7XCJpbml0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfODRhOThhM2I1Ml9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiaW5pdFwifX0sXCJjbG9zZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2M4MTBlOWNkODNfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcImNsb3NlOjptZW1vaXplZFwifX0sXCJjaGVja0Nsb3NlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNGRlMTU4Yjk4Zl9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiY2hlY2tDbG9zZVwifX0sXCJyZXNpemVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9lNWYxMThkYzY4X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJfblwifX0sXCJvbkVycm9yXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfMmU4MjkyMjhiZV9tdGU2bmRnNm1kZ1wiLFwibmFtZVwiOlwiVW5cIn19LFwic2hvd1wiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzRhZGIwNGI3ZDNfbXRlNm5kZzZtZGdcIixcIm5hbWVcIjpcImduXCJ9fSxcImhpZGVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9jZDNkNzMwOGU3X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJ5blwifX0sXCJleHBvcnRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF83NjgwNmM1M2I3X210ZTZuZGc2bWRnXCIsXCJuYW1lXCI6XCJXblwifX19fSJ9fQ__"
                                      title="PayPal"
                                      allowpaymentrequest="allowpaymentrequest"
                                      scrolling="no"
                                      id="jsx-iframe-b153f7e7a0"
                                      class="component-frame visible style-r7kGn"
                                    ></iframe>
                                    <div
                                      id="smart-menu"
                                      class="smart-menu"
                                    ></div>
                                    <div
                                      id="installments-modal"
                                      class="installments-modal"
                                    ></div>
                                    <iframe
                                      name="__detect_close_uid_19f54027e3_mte6ndg6mdg__"
                                      id="style-NVewR"
                                      class="style-NVewR"
                                    ></iframe>
                                  </div>
                                </div>
                                <div class="pay_line  cover-paypal-button">
                                  <div>PayPal</div>
                                  <div>
                                    No Fees
                                    <span id="style-SvVxM" class="style-SvVxM">
                                      MANUAL APPROVAL
                                    </span>
                                  </div>
                                  <div>
                                    <i
                                      class="pf pf-paypal style-KzovG"
                                      id="style-KzovG"
                                    ></i>
                                    <div
                                      id="paypal_status"
                                      class="style-a2hgf"
                                    ></div>
                                  </div>
                                  <div>
                                    <i
                                      class="fas fa-chevron-right"
                                      style={{ fontSize: "20px" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="pay_line"
                                id="cp"
                                style={{ cursor: "default" }}
                              >
                                <div>Capitalist</div>
                                <div>
                                  No Fees
                                  <span id="style-6nSOQ" class="style-6nSOQ">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div id="style-NQsPh" class="style-NQsPh">
                                  <div
                                    onclick="switchViews('cap_fillment', 0 ,9)"
                                    id="style-CSgOY"
                                    class="style-CSgOY"
                                  >
                                    <img
                                      title="Capitalist"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Capitalist.png"
                                      border="0"
                                      vspace="5"
                                      height="20"
                                      id="style-iflU2"
                                      class="style-iflU2"
                                    />
                                    <i
                                      class="fa-solid fa-dollar-sign style-GzQ5m"
                                      id="style-GzQ5m"
                                    ></i>
                                  </div>
                                  <div
                                    onclick="switchViews('cap_fillment','b',9)"
                                    id="style-oee25"
                                    class="style-oee25"
                                  >
                                    <i
                                      title="Bitcoin"
                                      class="cf cf-btc style-TEU2a"
                                      id="style-TEU2a"
                                    ></i>
                                  </div>
                                  <div
                                    onclick="switchViews('cap_fillment','t',9)"
                                    id="style-lYXwG"
                                    class="style-lYXwG"
                                  >
                                    <i
                                      class="fa-solid fa-circle style-9iryp"
                                      id="style-9iryp"
                                    ></i>
                                    <i
                                      title="USDT - TRC20"
                                      class="cf cf-TRX style-cd8Jj"
                                      id="style-cd8Jj"
                                    ></i>
                                    <span id="style-I1g8R" class="style-I1g8R">
                                      (TRC20)
                                    </span>
                                  </div>
                                  <div
                                    onclick="switchViews('cap_fillment','e',9)"
                                    id="style-RtGta"
                                    class="style-RtGta"
                                  >
                                    <i
                                      title="USDT - ERC20"
                                      class="cf cf-USDT style-hYOnF"
                                      id="style-hYOnF"
                                    ></i>
                                    <span id="style-anCtw" class="style-anCtw">
                                      (ERC20)
                                    </span>
                                  </div>
                                  <div id="style-DJ6Ur" class="style-DJ6Ur">
                                    <i
                                      class="fas fa-chevron-right"
                                      style={{ fontSize: "20px" }}
                                    ></i>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('cm_fillment',0,14)"
                                id="cm"
                                onmouseover="document.getElementById('CryptomusLogos').style.maxHeight='15em';document.getElementById('CryptomusMore').style.display='none'"
                                onmouseout="document.getElementById('CryptomusLogos').style.maxHeight='25px';document.getElementById('CryptomusMore').style.display='block'"
                              >
                                <div>Cryptomus</div>
                                <div>
                                  No Fees
                                  <span id="style-Wdh5q" class="style-Wdh5q">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div id="CryptomusLogos" class="style-Y1TL9">
                                  <div>
                                    <i
                                      title="True USD"
                                      class="cf cf-TUSD style-KcoAY"
                                      id="style-KcoAY"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Bitcoin"
                                      class="cf cf-btc style-U2MgF"
                                      id="style-U2MgF"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Ethereum"
                                      class="cf cf-eth style-I4b7K"
                                      id="style-I4b7K"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="USDT"
                                      class="cf cf-USDT style-2rGZN"
                                      id="style-2rGZN"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Bitcoin Cash"
                                      class="cf cf-btc style-6L6ga"
                                      id="style-6L6ga"
                                    ></i>
                                  </div>
                                  <div id="CryptomusMore" class="style-TkW8h">
                                    More...
                                  </div>
                                  <div>
                                    <i
                                      title="DAI"
                                      class="cf cf-DAI style-cjaSv"
                                      id="style-cjaSv"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="CAKE"
                                      class="cf cf-cake style-2O3Gt"
                                      id="style-2O3Gt"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="DOGE Coin"
                                      class="cf cf-DOGE style-k2XrH"
                                      id="style-k2XrH"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="SHIBA"
                                      class="cf cf-SHIB style-dy1hR"
                                      id="style-dy1hR"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="APE"
                                      class="cf cf-APE style-7ATos"
                                      id="style-7ATos"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Matic"
                                      class="cf cf-matic style-JdXsN"
                                      id="style-JdXsN"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="HORIZEN"
                                      class="cf cf-zen style-yr9iP"
                                      id="style-yr9iP"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="FILECOIN"
                                      class="cf cf-fil style-gFoR1"
                                      id="style-gFoR1"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Tezos"
                                      class="cf cf-xtz style-SeBXw"
                                      id="style-SeBXw"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="yearn.finance"
                                      class="cf cf-yfi style-24WZi"
                                      id="style-24WZi"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="EOS"
                                      class="cf cf-eos style-sfTa5"
                                      id="style-sfTa5"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="MCO"
                                      class="cf cf-mco style-iticv"
                                      id="style-iticv"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="FUNToken"
                                      class="cf cf-fun style-74bSF"
                                      id="style-74bSF"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="DASH"
                                      class="cf cf-dash style-TrCEw"
                                      id="style-TrCEw"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="PAXOS"
                                      class="cf cf-pax style-ZaBlz"
                                      id="style-ZaBlz"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Monero"
                                      class="cf cf-xmr style-4scFB"
                                      id="style-4scFB"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Litecoin"
                                      class="cf cf-ltc style-oEVtb"
                                      id="style-oEVtb"
                                    ></i>
                                  </div>
                                  <div id="style-XeY5I" class="style-XeY5I">
                                    &amp; Hundreds
                                  </div>
                                  <div id="style-1pRb9" class="style-1pRb9">
                                    More...
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line"
                                onclick="switchViews('px_fillment',0,8)"
                                id="px"
                              >
                                <div>Paxum</div>
                                <div>
                                  No Fees
                                  <span id="style-CoEPH" class="style-CoEPH">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="Paxum"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/paxum.png"
                                    vspace="6"
                                    border="0"
                                    height="18"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line"
                                onclick="switchViews('wm_fillment',0,7)"
                                id="wm"
                              >
                                <div>WebMoney</div>
                                <div>
                                  (15% Fee)
                                  <span id="style-9LIJK" class="style-9LIJK">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="WebMoney"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/wm_full.png"
                                    vspace="5"
                                    border="0"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('py_fillment')"
                                id="py"
                              >
                                <div>Payoneer</div>
                                <div>
                                  No Fees
                                  <span id="style-XYBdY" class="style-XYBdY">
                                    MANUAL APPROVAL
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="Payoneer"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Payoneer_full.png"
                                    border="0"
                                    vspace="5"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('sk_fillment','IDL')"
                                id="sk"
                              >
                                <div>iDEAL</div>
                                <div>
                                  (5% Fee)
                                  <span id="style-Xlzyq" class="style-Xlzyq">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="iDEAL"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/iDEAL.png"
                                    vspace="5"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('sk_fillment')"
                                id="sk"
                              >
                                <div>Klarna</div>
                                <div>
                                  (5% Fee)
                                  <span id="style-4GCQ9" class="style-4GCQ9">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="Klarna"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Klarna.png"
                                    vspace="5"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('sk_fillment')"
                                id="sk"
                              >
                                <div>Skrill</div>
                                <div>
                                  (5% Fee)
                                  <span id="style-Zjs9d" class="style-Zjs9d">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <i
                                    title="Skrill"
                                    class="pf pf-skrill style-3KfCV"
                                    id="style-3KfCV"
                                  ></i>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('sk_fillment')"
                                id="sk"
                              >
                                <div>Neteller</div>
                                <div>
                                  (5% Fee)
                                  <span id="style-a3TMC" class="style-a3TMC">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="Neteller"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Neteller.png"
                                    vspace="5"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('sk_fillment')"
                                id="sk"
                              >
                                <div>Rapid Transfer</div>
                                <div>
                                  (5% Fee)
                                  <span id="style-jopLj" class="style-jopLj">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div>
                                  <img
                                    title="Rapid Transfer"
                                    src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Rapid.png"
                                    vspace="5"
                                    height="20"
                                  />
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('ik_fillment_card')"
                                id="ik"
                              >
                                <div>InterKassa</div>
                                <div>
                                  (3.2% Fee)
                                  <span id="style-tq8cS" class="style-tq8cS">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div id="InterKassaLogos" class="style-9PdOZ">
                                  <div>
                                    <img
                                      title="InterKassa"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/interkassa.png"
                                      border="0"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                  <div>
                                    <img
                                      title="Perfec tMoney"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/ik_1.png"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                  <div>
                                    <img
                                      title="AdvCash"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/ik_2.png"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                  <div>
                                    <img
                                      title="Tether"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/ik_5.png"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                  <div>
                                    <img
                                      title="Ripple"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/ik_7.png"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                  <div>
                                    <img
                                      title="NIX Money"
                                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/ik_9.png"
                                      vspace="5"
                                      height="20"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('bw_fillment_ny')"
                                id="bw"
                              >
                                <div>Bank Wire</div>
                                <div>
                                  No Fees
                                  <span id="style-gex2C" class="style-gex2C">
                                    MANUAL APPROVAL
                                  </span>
                                </div>
                                <div>
                                  <pf
                                    title="Bank Wire"
                                    class="pf pf-bank-transfer style-OWLHV"
                                    id="style-OWLHV"
                                  ></pf>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                onclick="switchViews('np_fillment',0,13)"
                                id="np"
                                onmouseover="document.getElementById('NowPaymentsLogos').style.maxHeight='15em';document.getElementById('NowPaymentsMore').style.display='none'"
                                onmouseout="document.getElementById('NowPaymentsLogos').style.maxHeight='25px';document.getElementById('NowPaymentsMore').style.display='block'"
                              >
                                <div>Now Payments</div>
                                <div>
                                  (Fees Applied)
                                  <span id="style-4JIVJ" class="style-4JIVJ">
                                    IMMEDIATE FUNDING
                                  </span>
                                </div>
                                <div id="NowPaymentsLogos" class="style-W1JnE">
                                  <div>
                                    <i
                                      title="True USD"
                                      class="cf cf-TUSD style-79x1x"
                                      id="style-79x1x"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Bitcoin"
                                      class="cf cf-btc style-sMgdC"
                                      id="style-sMgdC"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Ethereum"
                                      class="cf cf-eth style-aqNai"
                                      id="style-aqNai"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="USDT"
                                      class="cf cf-USDT style-yeyYP"
                                      id="style-yeyYP"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Bitcoin Cash"
                                      class="cf cf-btc style-Z4vel"
                                      id="style-Z4vel"
                                    ></i>
                                  </div>
                                  <div id="NowPaymentsMore" class="style-5ZxZf">
                                    More...
                                  </div>
                                  <div>
                                    <i
                                      title="DAI"
                                      class="cf cf-DAI style-RLGcU"
                                      id="style-RLGcU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="CAKE"
                                      class="cf cf-cake style-oSvmH"
                                      id="style-oSvmH"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="DOGE Coin"
                                      class="cf cf-DOGE style-CFfnf"
                                      id="style-CFfnf"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="SHIBA"
                                      class="cf cf-SHIB style-KHfbP"
                                      id="style-KHfbP"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="APE"
                                      class="cf cf-APE style-JBvHV"
                                      id="style-JBvHV"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Matic"
                                      class="cf cf-matic style-h5vlZ"
                                      id="style-h5vlZ"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="HORIZEN"
                                      class="cf cf-zen style-Ym9JU"
                                      id="style-Ym9JU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="FILECOIN"
                                      class="cf cf-fil style-ISjXK"
                                      id="style-ISjXK"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Tezos"
                                      class="cf cf-xtz style-34x3k"
                                      id="style-34x3k"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="yearn.finance"
                                      class="cf cf-yfi style-pplME"
                                      id="style-pplME"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="EOS"
                                      class="cf cf-eos style-BrolU"
                                      id="style-BrolU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="MCO"
                                      class="cf cf-mco style-sFkTy"
                                      id="style-sFkTy"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="FUNToken"
                                      class="cf cf-fun style-rvPgl"
                                      id="style-rvPgl"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="DASH"
                                      class="cf cf-dash style-cMIwU"
                                      id="style-cMIwU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="PAXOS"
                                      class="cf cf-pax style-3FoWG"
                                      id="style-3FoWG"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Monero"
                                      class="cf cf-xmr style-TqDQU"
                                      id="style-TqDQU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Litecoin"
                                      class="cf cf-ltc style-aOwdi"
                                      id="style-aOwdi"
                                    ></i>
                                  </div>
                                  <div id="style-tDdrT" class="style-tDdrT">
                                    &amp; Hundreds
                                  </div>
                                  <div id="style-wnEqh" class="style-wnEqh">
                                    More...
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                              <div
                                class="pay_line "
                                id="cb2"
                                onclick="switchViews('bc_fillment_ext')"
                                onmouseover="document.getElementById('crypto2Logos').style.maxHeight='15em';document.getElementById('cryptoMore').style.display='none'"
                                onmouseout="document.getElementById('crypto2Logos').style.maxHeight='25px';document.getElementById('cryptoMore').style.display='block'"
                              >
                                <div>Manual Crypto</div>
                                <div>
                                  No Fees
                                  <span id="style-JGIjF" class="style-JGIjF">
                                    MANUAL APPROVAL
                                  </span>
                                </div>
                                <div id="crypto2Logos" class="style-aRZ14">
                                  <div>
                                    <i
                                      title="BUSD"
                                      class="cf cf-BUSD style-LNz5o"
                                      id="style-LNz5o"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="True USD"
                                      class="cf cf-TUSD style-XjSQy"
                                      id="style-XjSQy"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="ADA"
                                      class="cf cf-ADA style-9j9kY"
                                      id="style-9j9kY"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="ATOM"
                                      class="cf cf-ATOM style-EoBa6"
                                      id="style-EoBa6"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="DASH"
                                      class="cf cf-DASH style-iHMkm"
                                      id="style-iHMkm"
                                    ></i>
                                  </div>
                                  <div id="cryptoMore" class="style-YDiHr">
                                    More...
                                  </div>
                                  <div>
                                    <i
                                      title="Zcash"
                                      class="cf cf-ZEC style-xjWJK"
                                      id="style-xjWJK"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Polka DOT"
                                      class="cf cf-DOT style-XeZbk"
                                      id="style-XeZbk"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="EOS"
                                      class="cf cf-EOS style-8RoZl"
                                      id="style-8RoZl"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Filecoin"
                                      class="cf cf-FIL style-c2Nno"
                                      id="style-c2Nno"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Hedera Hashgraph"
                                      class="cf cf-HBAR style-OrOot"
                                      id="style-OrOot"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="ChainLink"
                                      class="cf cf-LINK style-xgUOo"
                                      id="style-xgUOo"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="MATIC Network"
                                      class="cf cf-MATIC style-G9wqo"
                                      id="style-G9wqo"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="NEO"
                                      class="cf cf-NEO style-PaOpa"
                                      id="style-PaOpa"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Paxos Standard"
                                      class="cf cf-PAX style-kKqBU"
                                      id="style-kKqBU"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="QTUM"
                                      class="cf cf-QTUM style-HjBnk"
                                      id="style-HjBnk"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Swipe"
                                      class="cf cf-SXP style-9Jmdg"
                                      id="style-9Jmdg"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="TRON"
                                      class="cf cf-TRX style-X9hwR"
                                      id="style-X9hwR"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Uniswap"
                                      class="cf cf-UNI style-Kykrg"
                                      id="style-Kykrg"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="VeChain"
                                      class="cf cf-VET style-J81Mc"
                                      id="style-J81Mc"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="WazirX"
                                      class="cf cf-WRX style-ztKOm"
                                      id="style-ztKOm"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Stellar Lumens"
                                      class="cf cf-XLM style-zCRco"
                                      id="style-zCRco"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Monero"
                                      class="cf cf-XMR style-RBF3t"
                                      id="style-RBF3t"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Tezos"
                                      class="cf cf-XTZ style-AXr1L"
                                      id="style-AXr1L"
                                    ></i>
                                  </div>
                                  <div>
                                    <i
                                      title="Verge"
                                      class="cf cf-XVG style-PG6Jw"
                                      id="style-PG6Jw"
                                    ></i>
                                  </div>
                                </div>
                                <div>
                                  <i
                                    class="fas fa-chevron-right"
                                    style={{ fontSize: "20px" }}
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input
                            type="button"
                            id="firstSubmit"
                            class="function-button style-fMmZX"
                            value="Continue"
                            onclick="document.getElementById('firstSubmit').disabled=true;"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div id="bc_fillment_ext" class="style-xB1nN">
            <table width="100%" border="0" id="style-9WKWg" class="style-9WKWg">
              <tbody>
                <tr>
                  <td colspan="3">
                    {" "}
                    Payments using the following crypto currencies are processed
                    manually:
                    <br />
                    <br />
                    <div id="style-dSAPS" class="style-dSAPS">
                      <div>
                        <i
                          title="BUSD"
                          class="cf cf-BUSD style-moLpQ"
                          id="style-moLpQ"
                        ></i>
                        BUSD
                        <br />
                        <i
                          title="True USD"
                          class="cf cf-TUSD style-6IFrr"
                          id="style-6IFrr"
                        ></i>
                        TUSD (TrueUSD)
                        <br />
                        <i
                          title="ADA"
                          class="cf cf-ADA style-1EMGg"
                          id="style-1EMGg"
                        ></i>
                        ADA (Cardano)
                        <br />
                        <i
                          title="ATOM"
                          class="cf cf-ATOM style-ODI3M"
                          id="style-ODI3M"
                        ></i>
                        ATOM (Cosmos)
                        <br />
                        <i
                          title="DASH"
                          class="cf cf-DASH style-f9UAx"
                          id="style-f9UAx"
                        ></i>
                        DASH
                        <br />
                        <i
                          title="DOGE Coin"
                          class="cf cf-DOGE style-ecym2"
                          id="style-ecym2"
                        ></i>
                        DOGE (Dogecoin)
                        <br />
                        <i
                          title="Ethereum Classic"
                          class="cf cf-ETC style-jM9Ic"
                          id="style-jM9Ic"
                        ></i>
                        ETC (Ethereum Classic)
                        <br />
                      </div>
                      <div>
                        <i
                          title="Polka DOT"
                          class="cf cf-DOT style-o2SO7"
                          id="style-o2SO7"
                        ></i>
                        DOT (Polkadot)
                        <br />
                        <i
                          title="EOS"
                          class="cf cf-EOS style-CTzxJ"
                          id="style-CTzxJ"
                        ></i>
                        EOS
                        <br />
                        <i
                          title="Filecoin"
                          class="cf cf-FIL style-15sNY"
                          id="style-15sNY"
                        ></i>
                        FIL (Filecoin)
                        <br />
                        <i
                          title="Hedera Hashgraph"
                          class="cf cf-HBAR style-sqvkR"
                          id="style-sqvkR"
                        ></i>
                        HBAR (Hedera Hashgraph)
                        <br />
                        <i
                          title="ChainLink"
                          class="cf cf-LINK style-E6Smj"
                          id="style-E6Smj"
                        ></i>
                        LINK (ChainLink)
                        <br />
                        <i
                          title="MATIC Network"
                          class="cf cf-MATIC style-qRbBy"
                          id="style-qRbBy"
                        ></i>
                        MATIC (MATIC Network)
                        <br />
                        <i
                          title="NEO"
                          class="cf cf-NEO style-Pe7KR"
                          id="style-Pe7KR"
                        ></i>
                        NEO
                        <br />
                      </div>
                      <div>
                        <i
                          title="Paxos Standard"
                          class="cf cf-PAX style-XfAcc"
                          id="style-XfAcc"
                        ></i>
                        PAX (Paxos Standard)
                        <br />
                        <i
                          title="QTUM"
                          class="cf cf-QTUM style-CZFYT"
                          id="style-CZFYT"
                        ></i>
                        QTUM
                        <br />
                        <i
                          title="Swipe"
                          class="cf cf-SXP style-yxaZl"
                          id="style-yxaZl"
                        ></i>
                        SXP (Swipe)
                        <br />
                        <i
                          title="TRON"
                          class="cf cf-TRX style-CU6sI"
                          id="style-CU6sI"
                        ></i>
                        TRX (TRON)
                        <br />
                        <i
                          title="Uniswap"
                          class="cf cf-UNI style-DXq95"
                          id="style-DXq95"
                        ></i>
                        UNI (Uniswap)
                        <br />
                        <i
                          title="VeChain"
                          class="cf cf-VET style-VtbUK"
                          id="style-VtbUK"
                        ></i>
                        VET (VeChain)
                        <br />
                        <i
                          title="WazirX"
                          class="cf cf-WRX style-n5ehd"
                          id="style-n5ehd"
                        ></i>
                        WRX (WazirX)
                        <br />
                      </div>
                      <div>
                        <i
                          title="Stellar Lumens"
                          class="cf cf-XLM style-MOUU1"
                          id="style-MOUU1"
                        ></i>
                        XLM (Stellar Lumens)
                        <br />
                        <i
                          title="Monero"
                          class="cf cf-XMR style-Dq45Z"
                          id="style-Dq45Z"
                        ></i>
                        XMR (Monero)
                        <br />
                        <i
                          title="Tezos"
                          class="cf cf-XTZ style-ozzYm"
                          id="style-ozzYm"
                        ></i>
                        XTZ (Tezos)
                        <br />
                        <i
                          title="Verge"
                          class="cf cf-XVG style-8gGno"
                          id="style-8gGno"
                        ></i>
                        XVG (Verge)
                        <br />
                        <i
                          title="Zcash"
                          class="cf cf-ZEC style-ZPI3B"
                          id="style-ZPI3B"
                        ></i>
                        ZEC (Zcash)
                        <br />
                      </div>
                    </div>
                    <br />
                    <b>Deposit Instructions:</b>
                    <br />
                    <ul id="style-kwUCb" class="style-kwUCb">
                      <li>
                        Please contact your account manager over Skype or Email
                        to get an updated payment address.
                      </li>
                      <li>Minimum payment accepted is US$5000</li>
                    </ul>
                    <br /> Funds will be added to your account once confirmed by
                    our finance team, followed by email notification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="bw_fillment_ny" class="style-xysXe">
            <table width="100%" border="0" id="style-dQBF6" class="style-dQBF6">
              <tbody>
                <tr>
                  <td>
                    <pf
                      title="Bank Wire"
                      class="pf pf-bank-transfer style-6CVa8"
                      id="style-6CVa8"
                    ></pf>
                    <br />
                    <b>Deposit Instructions:</b>
                    <br />
                    <ul id="style-ogwSN" class="style-ogwSN">
                      <li>
                        Make a wire transfer to our bank account:
                        <br />
                        <table class="table_style style-GfykM" id="style-GfykM">
                          <tbody>
                            <tr>
                              <td>
                                <b>Beneficiary Name:</b>
                              </td>
                              <td>Bpath LTD</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Bank Name:</b>
                              </td>
                              <td>
                                Valley national bank (formerly bank Leumi)
                              </td>
                            </tr>
                            <tr>
                              <td valign="top">
                                <b>Bank Address:</b>
                              </td>
                              <td>
                                350 Madison Avenue
                                <br />
                                New York, NY 10017 USA
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Account Number:</b>
                              </td>
                              <td>07-629176-18</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Routing (ABA):</b>
                              </td>
                              <td>026002794</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Swift Code:</b>
                              </td>
                              <td>LUMIUS3NXXX</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        Please include your Account Number (<b>1737127</b>) in
                        the comments section of the transfer with your payment.
                      </li>
                      <li>
                        Minimum payment accepted via Bank Transfer is US$1000
                      </li>
                    </ul>
                    <br />
                    <br /> Once you have completed the payment, open a support
                    ticket and mention the SWIFT number you received from your
                    bank for the transaction along with your account number at
                    Bidvertiser: <strong>1737127</strong>
                    <br />
                    <br /> Funds will be added to your account once confirmed by
                    our finance team, followed by email notification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="py_fillment" class="style-wjp4S">
            <table width="100%" border="0" id="style-JeBPY" class="style-JeBPY">
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ float: "right" }}
                      title="Payoneer"
                      src="https://my.bidvertiser.com/BidVertiser/Images/funding_sources_logos/Payoneer_full.png"
                      border="0"
                      vspace="5"
                      height="50"
                    />
                    <br />
                    <b>Deposit Instructions:</b>
                    <br />
                    <ul id="style-D1oYA" class="style-D1oYA">
                      <li>
                        Send payment to account: <i>payoneer@bidvertiser.com</i>
                      </li>
                      <li>
                        Please include your Account Number (1737127) in the
                        payment details section.
                      </li>
                      <li>
                        <b>Minimum payment accepted via Payoneer is US$300</b>
                      </li>
                    </ul>
                    <br />
                    <br /> Funds will be added to your account once confirmed by
                    our finance team, followed by email notification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <iframe id="skrill_fillment_frame" class="style-TcT8y"></iframe>
          <iframe
            id="pp_fillment_frame"
            src="https://my.bidvertiser.com/bdv/BidVertiser/bidvertiserA/Payments/PayPal/bdv_adv_create_paypal.dbm?ID_Token=8330690Z116PU6U&amp;AID=694693&amp;PN=BidVertiser&amp;pr=1000&amp;type=card"
            class="style-9wKPF"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AddFund;
