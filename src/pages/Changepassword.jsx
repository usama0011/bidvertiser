import React from "react";
import "../styles/ChangePassword.css";
import Header from "../components/Header";
const Changepassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        // You can call the 'next()' function to perform validation
      };
    
      const next = () => {
        if (document.forms.Profile_Form.old_password.value.length === 0) {
          alert("Please fill your old Password");
          document.forms.Profile_Form.password.focus();
          document.forms.Profile_Form.password.select();
          return false;
        }
        if (document.forms.Profile_Form.password.value.length === 0) {
          alert("Please choose a Password");
          document.forms.Profile_Form.password.focus();
          document.forms.Profile_Form.password.select();
          return false;
        }
        if (
          document.forms.Profile_Form.password.value.length < 6 ||
          document.forms.Profile_Form.password.value.length > 20
        ) {
          alert("Password Length Must be between 6-20 characters");
          document.forms.Profile_Form.password.focus();
          document.forms.Profile_Form.password.select();
          return false;
        }
        if (document.forms.Profile_Form.password.value.indexOf(" ") !== -1) {
          alert("The Password is not valid - please remove all spaces");
          document.forms.Profile_Form.password.focus();
          document.forms.Profile_Form.password.select();
          return false;
        }
        if (document.forms.Profile_Form.confirm_password.value.length === 0) {
          alert("Confirm Password is Required");
          document.forms.Profile_Form.confirm_password.focus();
          document.forms.Profile_Form.confirm_password.select();
          return false;
        }
        if (document.forms.Profile_Form.confirm_password.value.indexOf(" ") !== -1) {
          alert(
            "The Password Confirmation is not valid - please remove all spaces"
          );
          document.forms.Profile_Form.confirm_password.focus();
          document.forms.Profile_Form.confirm_password.select();
          return false;
        }
        if (
          document.forms.Profile_Form.confirm_password.value !==
          document.forms.Profile_Form.password.value
        ) {
          alert("Password and Confirm Password do not match");
          document.forms.Profile_Form.password.focus();
          document.forms.Profile_Form.password.select();
          return false;
        } else return true;
      };
    
      const checkClose = (isChecked) => {
        if (isChecked) {
          if (window.confirm("Are you sure that you want to close your account?")) {
            document.forms.Profile_Form.Close_Account.checked = true;
          } else {
            document.forms.Profile_Form.Close_Account.checked = false;
          }
        }
      };
    
  return (
    <div className="ChangePasswordMainContianer">
      <Header routename="Change Password" />
      <div className="changepasswordbodycontainer">
      <div id="page">
      <form
        method="post"
        action="https://my.bidvertiser.com/bdv/BidVertiser/BidVertiserA/bdv_adv_Do_Change_Password.dbm?ID_Token=R150TN08K92EGQ9"
        name="Profile_Form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="universal_login_id" value="6013360" />
        <div className="main_box_style" style={{ padding: "10px 25px" }}>
          <h3>Change Password:</h3>
          <table
            cellpadding="0"
            cellspacing="5"
            border="0"
            width="100%"
            className="bdv_000000_Text_10"
            style={{ paddingLeft: "20px" }}
          >
            <tbody>
              <tr>
                <td width="50%" valign="top">
                  <font className="bdv_000000_Bold_Text_10">
                    Old Password :
                  </font>
                  &nbsp;
                  <font className="bdv_000000_Text_10">(Min 6 characters)</font>
                  <br />
                  <input
                    type="password"
                    className="form-field changepasswordinputItem"
                    size="51"
                    name="old_password"
                    value=""
                    maxLength="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <br />
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top">
                  <font className="bdv_000000_Bold_Text_10">
                    New Password :
                  </font>
                  &nbsp;
                  <font className="bdv_000000_Text_10">(Min 6 characters)</font>
                  <br />
                  <input
                    type="password"
                    className="form-field changepasswordinputItem"
                    size="51"
                    name="password"
                    value=""
                    maxLength="20"
                  />
                </td>
              </tr>
              <tr>
                <td width="50%" valign="top">
                  <font className="bdv_000000_Bold_Text_10 ">
                    Confirm New Password :
                  </font>
                  &nbsp;
                  <font className="bdv_000000_Text_10">
                    (Min 6 characters)
                  </font>
                  <br />
                  <input
                    type="password"
                    className="form-field changepasswordinputItem"
                    size="51"
                    name="confirm_password"
                    value=""
                    maxLength="20"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <br />
                </td>
              </tr>
              <tr>
                <td width="50%">
                  <div style={{ width: "400px" }} align="right">
                    <input
                      type="submit"
                      className="function-button"
                      name="Update"
                      value="  Update  "
                    />
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </form>
    </div>
  );
      </div>
    </div>
  );
};

export default Changepassword;
