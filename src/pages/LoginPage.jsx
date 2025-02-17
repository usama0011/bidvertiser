import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const LoginPage = ({ setIsLogedIn }) => {
  const [activeTab, setActiveTab] = useState("Login");
  const [email, setEmail] = useState("ads@maxmedialeads.com");
  const [password, setPassword] = useState("123456");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  useEffect(() => {
    document.title = "BidVertiser - Login";
  }, []);
  const handleRecaptchaVerify = (token) => {
    console.log("reCAPTCHA token:", token);
    setRecaptchaToken(token);
  };

  const handleLogin = async () => {
    if (!recaptchaToken) {
      alert("Please verify reCAPTCHA before signing in.");
      return;
    }
    console.log(recaptchaToken);
    const response = await fetch(
      "https://bidvertiserserver.vercel.app/api/verify-recaptcha",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: recaptchaToken }),
      }
    );
    console.log(response);

    setIsLogedIn(true);
  };
  return (
    <div className="logincontainer">
      <div className="loginheader">
        <div className="logologin">
          <img
            src="https://www.bidvertiser.com/wp-content/uploads/2018/01/bidvertiser.png"
            alt=""
          />
        </div>
        <div className="navibrnds">
          <ul>
            <li>HOME</li>
            <li>ADVERTISERS</li>
            <li>PUBLISHERS</li>
            <li>COMPANY</li>
            <li>CONTACT US</li>
            <li>SUPPORT</li>
            <li>LOGIN</li>
            <li>REGISTER</li>
            <li>SOCIAL</li>
            <li>
              <a
                class="social-icon-header social-icon-1"
                target="_blank"
                title="LinkedIn"
                href="https://www.linkedin.com/company/bidvertiser/"
              >
                <i style={{ color: "white" }} class="fa fa-linkedin fa-1x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="loginbody">
        <p>Login As:</p>
        <div className="buttonslogincotnaienr">
          <div>
            <input type="radio" checked name="one" id="one" />
            <label htmlFor="">Advertiser</label>
          </div>
          <div>
            <input type="radio" name="one" id="tow" />
            <label htmlFor="">Publisher</label>
          </div>
          <div>
            <input type="radio" name="one" id="three" />
            <label htmlFor="">Referral</label>
          </div>
        </div>
        <div className="inputformcontainer">
          <div>
            <label htmlFor="">Username</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="spedd">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mmm"
            />
          </div>
          <div className="forgetcontainer">
            <span>Forget Your Password?</span>
          </div>
        </div>
        <div className="rememberme">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Remember Me</label>
        </div>
        <div className="rechapchabox">
          <ReCAPTCHA
            sitekey="6LergdkqAAAAABpd3hMJmZrK7GXzvYjmLes58Yjy"
            onChange={handleRecaptchaVerify}
          />
        </div>
        <div className="loginbutton">
          <Link to="/">
            <button style={{ whiteSpace: "nowrap" }} onClick={handleLogin}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="footerlgin">
        <div>
          <ul>
            <li>Privacy</li>
            <li>Terms and Conditions</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="lastone">
          <p>© BidVertiser, Serving you Since 2008. Developed by Bpath, LTD</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
