import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/EditProfile.css";
const EditProfile = () => {
  const [nonIsraeli, setNonIsraeli] = useState(0);

  const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const checkBalanceNotification = () => {
    if (
      document.getElementById("min_balance_notification_checkbox_ID").checked
    ) {
      if (
        !isNumeric(document.getElementById("min_balance_notification_ID").value)
      ) {
        alert("Balance Notification Limit must be a number");
        return false;
      } else {
        if (document.getElementById("min_balance_notification_ID").value < 0) {
          alert("Balance Notification Limit must be at least $0");
          return false;
        }
      }
    }
    return true;
  };

  const next = () => {
    if (document.forms.Profile_Form.Current_Password.value.length === 0) {
      alert(
        "Changes in your profile require password validation. Please enter your password and try again."
      );
      document.forms.Profile_Form.Current_Password.focus();
      document.forms.Profile_Form.Current_Password.select();
      return false;
    }
    if (document.forms.Profile_Form.Member_Contact_Name.value.length === 0) {
      alert("First Name is Required");
      document.forms.Profile_Form.Member_Contact_Name.focus();
      document.forms.Profile_Form.Member_Contact_Name.select();
      return false;
    }
    if (
      document.forms.Profile_Form.Member_Contact_Last_Name.value.length === 0
    ) {
      alert("Last Name is Required");
      document.forms.Profile_Form.Member_Contact_Last_Name.focus();
      document.forms.Profile_Form.Member_Contact_Last_Name.select();
      return false;
    }
    if (document.forms.Profile_Form.Member_Contact_Email.value.length === 0) {
      alert("Email address is Required");
      document.forms.Profile_Form.Member_Contact_Email.focus();
      document.forms.Profile_Form.Member_Contact_Email.select();
      return false;
    }

    if (!checkBalanceNotification()) {
      return false;
    }
    return true;
  };

  const checkClose = () => {
    if (window.confirm("Are you sure that you want to close your account?")) {
      const current_action =
        "https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_account_closure.dbm?ID_Token=R150TN08K92EGQ9&AID=694693&popup_mode=1";
      document.getElementById("popup_content").src = current_action;
      popup_view(current_action, 370, 245, "yes");
    }
  };

  const nonIsraelies = (_val) => {
    if (_val === true) {
      setNonIsraeli(1);
      document.getElementById("tax_id_tag").style.visibility = "hidden";
      document.getElementById("details_id_tag").style.visibility = "hidden";
    } else {
      setNonIsraeli(0);
      document.getElementById("tax_id_tag").style.visibility = "visible";
      document.getElementById("details_id_tag").style.visibility = "visible";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (next()) {
      document.Profile_Form.submit();
    }
  };

  return (
    <div className="editProfileContainer">
      <Header routename="Edit Profile" />
      <div className="editprofilebodyContianer">
        <div className="ediptprofilebodypart" id="page">
          <form
            method="post"
            action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_Do_Get_Extra_Details.dbm?ID_Token=R150TN08K92EGQ9&amp;AID=694693"
            name="Profile_Form"
            onSubmit={handleSubmit}
            style={{ height: "700px" }}
          >
            <input type="Hidden" name="universal_login_id" value="6013360" />
            <input type="Hidden" name="Edit" value="1" />
            <h3>Edit Account Details:</h3>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="1030"
              style={{ paddingLeft: "20px" }}
            >
              <tbody>
                <tr>
                  <td width="500" valign="top">
                    <font className="bdv_000000_Bold_Text_10">
                      First Name :
                    </font>
                    &nbsp;
                    <span style={{ color: "var(--red)" }}>
                      * Required Field
                    </span>
                    <br />
                    <input
                      type="Text"
                      className="form-field ediptpageinputItme"
                      size="51"
                      name="Member_Contact_Name"
                      value="tayyab"
                      maxlength="50"
                    />
                  </td>
                  <td width="400" valign="top" rowspan="3">
                    <font className="bdv_000000_Bold_Text_10">
                      Company Name and Address (for invoicing) :
                    </font>
                    &nbsp;
                    <span style={{ color: "var(--red)" }} id="details_id_tag">
                      * Required Field
                    </span>
                    <br />
                    <textarea
                      className="form-field editpagetextarea"
                      style={{ width: "380px", height: "100px" }}
                      name="Member_Invoice_details"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td width="*" valign="top">
                    <font className="bdv_000000_Bold_Text_10">Last Name :</font>
                    &nbsp;
                    <span style={{ color: "var(--red)" }}>
                      * Required Field
                    </span>
                    <br />
                    <input
                      type="Text"
                      className="form-field ediptpageinputItme"
                      size="51"
                      name="Member_Contact_Last_Name"
                      value="rashid"
                      maxlength="50"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td width="500" valign="top">
                    <font className="bdv_000000_Bold_Text_10">
                      Email Address :
                    </font>
                    &nbsp;
                    <span style={{ color: "var(--red)" }}>
                      * Required Field
                    </span>
                    <br />
                    <input
                      type="Text"
                      className="form-field ediptpageinputItme"
                      size="51"
                      name="Member_Contact_Email"
                      value="pixxax@gmail.com"
                      maxlength="50"
                    />
                  </td>
                  <td width="500" valign="top" rowspan="3">
                    <font className="bdv_000000_Bold_Text_10">Tax ID :</font>
                    &nbsp;
                    <span style={{ color: "var(--red)" }} id="tax_id_tag">
                      * Required Field
                    </span>
                    <br />
                    <input
                      type="Text"
                      className="form-field ediptpageinputItme"
                      style={{ width: "380px" }}
                      size="51"
                      name="Tax_ID"
                      value=""
                      maxlength="50"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colspan="3" valign="top" className="bdv_000000_Text_10">
                    <input
                      style={{ verticalAlign: "text-top" }}
                      type="Checkbox"
                      name="Mail_Flag"
                      value="-1"
                      checked
                    />{" "}
                    Subscribe to the Advertiser Email Notifications
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" valign="top" className="bdv_000000_Text_10">
                    <strong style={{ marginLeft: "23px" }}>
                      Email Notifications Subscriptions:
                    </strong>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" valign="top" className="bdv_000000_Text_10">
                    <input
                      style={{
                        marginLeft: "23px",
                        verticalAlign: "text-top",
                        marginRight: "5px",
                      }}
                      type="Checkbox"
                      name="min_balance_notification_checkbox"
                      id="min_balance_notification_checkbox_ID"
                      value="-1"
                      checked
                    />
                    Balance Notification Limit: US
                    <span
                      style={{
                        position: "relative",
                        left: "12px",
                        fontSize: "14px",
                      }}
                    >
                      $
                    </span>
                    <input
                      type="number"
                      className="form-field ediptpageinputItme"
                      style={{
                        width: "80px",
                        paddingLeft: "12px",
                        fontSize: "13px",
                        minHeight: "10px",
                      }}
                      id="min_balance_notification_ID"
                      name="min_balance_notification"
                      min="0"
                      onKeyUp={checkBalanceNotification}
                      value="20"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" valign="top" className="bdv_000000_Text_10">
                    <input
                      style={{
                        marginLeft: "23px",
                        verticalAlign: "text-top",
                        marginRight: "5px",
                      }}
                      type="Checkbox"
                      name="daily_ad_budget_depletion_checkbox"
                      value="-1"
                      checked
                    />
                    Daily ad budget depletion
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="Password"
                      placeholder="Password"
                      class="form-field"
                      size="20"
                      name="Current_Password"
                      value=""
                      className="ediptpageinputItme"
                      maxlength="50"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="submit"
                      className="function-button updpdp"
                      id="content-button"
                      name="Update"
                      value="  Update  "
                    />
                    <div id="errSpn"></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div
              style={{
                marginBottom: "30px",
                marginTop: "100px",
                padding: "10px",
            
              }}
            >
              <hr size="1" noshade />
              <h3 className="accountColouser" style={{paddingTop:"10px"}}>Account Closure:</h3>
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="1050"
                style={{ paddingLeft: "20px" }}
              >
                <tbody>
                  <tr>
                    <td
                      colspan="2"
                      valign="top"
                      className="bdv_000000_Bold_Text_10"
                      style={{ lineHeight: "14px" }}
                    >
                      If you wish to close your account permanently and delete
                      its entire data - click the button below.
                    </td>
                  </tr>
                  <tr>
                    <td align="left" colspan="2">
                      <br />
                      <button
                        name="Close_Account"
                        className="block-button mybuttonbelow"
                        value="1"
                        onClick={checkClose}
                        style={{
                          position: "relative",
                          top: "2px",
                          fontWeight: "normal",
                        }}
                      >
                        Delete all of my personal data and close my account
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
