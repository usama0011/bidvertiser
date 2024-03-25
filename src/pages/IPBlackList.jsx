import React from "react";
import "../styles/IPBlackLists.css";
import Header from "../components/Header";
const IPBlackList = () => {
  const isNumberKey = (evt) => {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  };
  return (
    <div className="blackIPContainer">
      <Header routename="IP BlackList" />
      <div className="ipblacklistbodyc">
        <div id="page">
          <div className="main_box_style" style={{ padding: "10px 25px" }}>
            <h3>Edit your blacklisted IPs:</h3>
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table
                      cellpadding="10"
                      cellspacing="5"
                      border="0"
                      className="bdv_000000_Text_10"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <span className="bdv_000000_Text_10">
                              IPs will match by the starting pattern of the IP
                              provided.
                              <br />
                              IP can follow the IPv4 or IPv6 structures and
                              should be on separate lines.
                              <br />
                              <br />
                              Examples:
                              <br />
                              <table className="bdv_000000_Text_11">
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      10.112.21.2
                                    </td>
                                    <td width="20"></td>
                                    <td>(Will block specific IPv4 address)</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      10.124.6.
                                    </td>
                                    <td width="20"></td>
                                    <td>
                                      (will block all IPv4 addresses starting
                                      with 10.124.6.)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      10.1
                                    </td>
                                    <td width="20"></td>
                                    <td>
                                      (will block all IPv4 addresses starting
                                      with 10.1, 10.10, 10.100)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      10.1.
                                    </td>
                                    <td width="20"></td>
                                    <td>
                                      (will block all IPv4 addresses starting
                                      with 10.1.)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      2001:0db8:0000:0000:0000:0000:0000:0000
                                    </td>
                                    <td width="20"></td>
                                    <td>(Will block specific IPv6 address)</td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily:
                                          "'Share Tech Mono', monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      2001:0db8:{" "}
                                    </td>
                                    <td width="20"></td>
                                    <td>
                                      (Will block all IPv6 addresses in this
                                      range)
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </span>
                            <br />
                            <form method="post">
                              <textarea className="iplisttype"
                                rows="15"
                                cols="60"
                                name="ip_list"
                                style={{
                                  fontFamily: "'Share Tech Mono', monospace",
                                  fontSize: "20px",
                                  width: "700px",
                                }}
                              ></textarea>
                              <br />
                              Maximum of 3000 Entries
                              <br />
                              <br />
                              <div align="center" style={{ width: "700px" }}>
                                <input
                                  type="submit"
                                  value="Submit"
                                  className="function-button"
                                />
                              </div>
                              <br />
                            </form>
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
    </div>
  );
};

export default IPBlackList;
