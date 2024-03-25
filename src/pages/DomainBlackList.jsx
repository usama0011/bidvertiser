import React from "react";
import Header from "../components/Header";
import '../styles/DomainBlackList.css'
const DomainBlackList = () => {
  const checkChar = (charCode) => {
    if (
      charCode == 45 ||
      charCode == 46 ||
      charCode == 13 ||
      (charCode >= 48 && charCode <= 57) ||
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isLeagalKey = (evt) => {
    var charCode = evt.which ? evt.which : evt.keyCode;

    if (checkChar(charCode)) {
      return true;
    } else {
      alert("Illegal character");
      return false;
    }
  };

  const checkDomainsKey = () => {
    const domainsList = document.getElementById("domains_list_id").value;
    const domainsListSplitted = domainsList.replace(/\n/g, " ").split(" ");
    for (let i = 0; i < domainsListSplitted.length; i++) {
      for (let j = 0; j < domainsListSplitted[i].length; j++) {
        if (!checkChar(domainsListSplitted[i][j].charCodeAt(0))) {
          alert(
            "Illegal character " +
              domainsListSplitted[i][j] +
              " at " +
              domainsListSplitted[i]
          );
          return false;
        }
      }
    }
    document.forms.domains_form.submit();
  };
  return (
    <div className="domainblackmaincontainer">
      <Header routename="Domains Blacklist" />
      <div className="domainblacklistbody">
        <div id="page">
          <link
            href="https://fonts.googleapis.com/css?family=Share+Tech+Mono"
            rel="stylesheet"
          />
          <div className="main_box_style" style={{ padding: "10px 25px" }}>
            <h3>Edit your blacklisted domains:</h3>
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
                              You have the optional possibility to blacklist
                              domain names for all your campaigns.
                              <br />
                              You will not receive any traffic from these
                              domains.
                              <br />
                              <br />
                              Please note that there are cases where we are not
                              able to get the referrer from our publishers in
                              real-time.
                              <br />
                              You can add the following dummy domain to your
                              list in order to block your ads from showing when
                              there is no referrer passed:
                              <br />
                              <span
                                style={{
                                  fontFamily: "monospace",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                  paddingLeft: "17px",
                                }}
                              >
                                noreferrer.com
                              </span>
                              <br />
                              (Please be aware though that this may
                              significantly decrease your traffic)
                              <br />
                              <br />
                              Examples:
                              <br />
                              <table className="bdv_000000_Text_11">
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily: "monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        paddingLeft: "15px",
                                      }}
                                    >
                                      cnn.com
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily: "monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        paddingLeft: "15px",
                                      }}
                                    >
                                      espn.com
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style={{
                                        fontFamily: "monospace",
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                        paddingLeft: "15px",
                                      }}
                                    >
                                      bbc.co.uk
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </span>
                            <br />
                            <form name="domains_form" method="post">
                              <textarea className="domainstextaraia"
                                rows="15"
                                cols="30"
                                id="domains_list_id"
                                name="domains_list"
                                style={{
                                  fontFamily: "'Share Tech Mono', monospace",
                                  fontSize: "20px",
                                  width: "700px",
                                }}
                                onKeyPress={isLeagalKey}
                              ></textarea>
                              <br />
                              Maximum of 1000 Entries
                              <br />
                              <br />
                              <div align="center" style={{ width: "700px" }}>
                                <input
                                  type="button"
                                  value="Submit"
                                  className="function-button"
                                  onClick={checkDomainsKey}
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

export default DomainBlackList;
