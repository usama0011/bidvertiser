import React from "react";
import Header from "../components/Header";
import '../styles/useragentblacklist.css'
const UserAgentBlackList = () => {
  const checkUserAgentsKey = () => {
    document.forms.user_agents_form.submit();
  };

  return (
    <div className="userageintmaincontainer">
      <Header routename="user agents Blacklist" />
      <div className="useragentbodycontinaer">
        <div id="page">
          <div className="main_box_style uiui">
            <h3>Edit your blacklisted user agents:</h3>
            <table>
              <tbody>
                <tr>
                  <td className="bdv_000000_Text_10">
                    <span>
                      You have the optional possibility to blacklist user agents for all your campaigns.
                      You will not receive any traffic from these user agents.
                    </span>
                    <br />
                    <br />
                    <span>
                      Examples:
                      <table className="userageintconatinertale">
                        <tbody>
                          <tr className="bdv_000000_Text_10">
                            <td>Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)</td>
                          </tr>
                          <tr>
                            <td>MSIE 9.0</td>
                          </tr>
                          <tr>
                            <td>9.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </span>
                    <br />
                    <form action="https://my.bidvertiser.com/bdv/BidVertiser/bidvertiserA/bdv_adv_blacklist_UA.dbm?ID_Token=R150TN08K92EGQ9&amp;AID=694693" name="user_agents_form" method="post">
                      <textarea rows="15" cols="30" id="user_agent_list_id" name="user_agent_list"></textarea>
                      <br />
                      Maximum of 100 Entries
                      <br />
                      <br />
                      <div align="center"><input type="button" value="Submit" className="function-button" onClick={checkUserAgentsKey} /></div>
                      <br />
                    </form>
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

export default UserAgentBlackList;
