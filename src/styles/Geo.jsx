import React, { useContext, useState } from "react";
import "../styles/Geo.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { NewCampaignDetailsContext } from "../context/NewCompaingContext";
const Geo = () => {
  const [selectCountry, setSelectCountry] = useState("");
  const [selectRemoveCountry, setSelectRemoveCountry] = useState("");
  const [selectedCountries, setSelectedCountries] = useState(["US"]);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(NewCampaignDetailsContext);
  const handleUpdateState = (field, value) => {
    dispatch({ type: "UPDATE_STATE", payload: { field, value } });
  };
  const handleClickNext = () => {
    if (selectedCountries.length === 1) {
      handleUpdateState("geo", "US");
    } else {
      handleUpdateState("geo", "Globe");
    }
    navigate("/bdv/BideVertiser/targeting");
  };
  const checkCitiesDisabled = () => {};
  const checkZipDisabled = () => {};
  const handleAddcountry = (newcountry) => {
    setSelectedCountries((prev) => [...prev, newcountry]);
  };
  console.log(selectedCountries);
  const handleRemoveCountry = (removecountry) => {
    const filterCountries = selectedCountries.filter(
      (item) => item !== removecountry
    );
    setSelectedCountries(filterCountries);
  };
  return (
    <div>
      <Header routename="Create New Campaign" />
      <div className="newcompaingsbody">
        <div className="breadcurmcontainer">
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#1173b7",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Ad Type
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#1173b7",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#81d34a",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "white",
                }}
              >
                Geo
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#81d34a",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Targeting
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Quality
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Bid
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Creative
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "85px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Budget
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <div
              style={{
                position: "relative",
                width: "160px",
                height: "25px",
                zIndex: "2",
                textAlign: "center",
                backgroundColor: "#e7e8ea",
                color: "black",
              }}
            >
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  margin: "0",
                  position: "absolute",

                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  color: "white",
                }}
                aria-hidden="true"
              ></i>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "13px",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Advanced Settings
              </span>
            </div>
            <div style={{ float: "right", position: "relative" }}>
              <i
                className="fa fa-caret-right"
                style={{
                  padding: "0",
                  position: "relative",
                  left: "-2px",
                  top: "0",
                  lineHeight: "25px",
                  fontSize: "41px",
                  zIndex: "1",
                  color: "#e7e8ea",
                  backgroundColor: "white",
                }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
        <br />
        <div className="geobodycontainer">
          <strong className="bodytitlle">GEO Targeting</strong>
          <p className="compara">
            GEO Targeting BidVertiser allows you to display your ads within any
            geographic you determine. <br /> Select your desired countries and
            click
            <b>"Next"</b> and we will show your ads only to users located
            anywhere in the countries you select.
          </p>
          <strong className="bodytitlle">Countries Targeting</strong>
          <div className="geoflextop">
            <input
              style={{ marginRight: "5px" }}
              type="checkbox"
              name=""
              id=""
            />
            <p>Quikc selection by countries</p>
          </div>
          <div className="flexcoutnriesconatiner">
            <div>
              <strong className="bodytitlle">Available Counties</strong>
              <div className="countirescontainerlist">
                <select
                  onChange={(e) => setSelectCountry(e.target.value)}
                  id="all_countries"
                  name="all_countries"
                  multiple
                  size="18"
                  style={{ width: "250px", height: "380px" }}
                  className="bdv_000000_Text_11"
                  ondblclick="move(this.form.all_countries,this.form.selected_countries, 1);"
                >
                  <option
                    value="US"
                    className="bdv_000000_Text_11"
                    cont="North &amp; Central America"
                    cont2=""
                    selected=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    UNITED STATE
                  </option>
                  <option
                    value="AU"
                    className="bdv_000000_Text_11"
                    cont="Oceania"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AU.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    AUSTRALIA
                  </option>
                  <option
                    value="AF"
                    className="bdv_000000_Text_11"
                    cont="Asia"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AF.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    AFGHANISTAN
                  </option>
                  <option
                    value="AL"
                    className="bdv_000000_Text_11"
                    cont="Eastern Europe"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AL.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ALBANIA
                  </option>
                  <option
                    value="DZ"
                    className="bdv_000000_Text_11"
                    cont="Africa"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/DZ.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ALGERIA
                  </option>
                  <option
                    value="AS"
                    className="bdv_000000_Text_11"
                    cont="Oceania"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AS.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    AMERICAN SAMOA
                  </option>
                  <option
                    value="AD"
                    className="bdv_000000_Text_11"
                    cont="Western Europe"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AD.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ANDORRA
                  </option>
                  <option
                    value="AO"
                    className="bdv_000000_Text_11"
                    cont="Africa"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AO.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ANGOLA
                  </option>
                  <option
                    value="AI"
                    className="bdv_000000_Text_11"
                    cont="North &amp; Central America"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AI.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ANGUILLA
                  </option>
                  <option
                    value="AQ"
                    className="bdv_000000_Text_11"
                    cont="Antarctica"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AQ.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ANTARCTICA
                  </option>
                  <option
                    value="AG"
                    className="bdv_000000_Text_11"
                    cont="North &amp; Central America"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AG.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ANTIGUA AND BARBUDA
                  </option>
                  <option
                    value="AR"
                    className="bdv_000000_Text_11"
                    cont="South America"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AR.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ARGENTINA
                  </option>
                  <option
                    value="AM"
                    className="bdv_000000_Text_11"
                    cont="Asia"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AM.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ARMENIA
                  </option>
                  <option
                    value="AW"
                    className="bdv_000000_Text_11"
                    cont="North &amp; Central America"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AW.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    ARUBA
                  </option>
                  <option
                    value="AT"
                    className="bdv_000000_Text_11"
                    cont="Western Europe"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AT.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    AUSTRIA
                  </option>
                  <option
                    value="AZ"
                    className="bdv_000000_Text_11"
                    cont="Asia"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/AZ.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    AZERBAIJAN
                  </option>
                  <option
                    value="BS"
                    className="bdv_000000_Text_11"
                    cont="North &amp; Central America"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/BS.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    BAHAMAS
                  </option>
                  <option
                    value="BH"
                    className="bdv_000000_Text_11"
                    cont="Gulf"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/BH.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    BAHRAIN
                  </option>
                  <option
                    value="BD"
                    className="bdv_000000_Text_11"
                    cont="Asia"
                    cont2=""
                    style={{
                      background:
                        "url('https://my.bidvertiser.com/BidVertiser/Images/flags/BD.svg') no-repeat",
                      backgroundSize: "17px 15px",
                      backgroundPosition: "2px 2px",
                      paddingLeft: "23px",
                    }}
                  >
                    BANGLADESH
                  </option>
                </select>
                ;
              </div>
            </div>
            <div className="buttonscoutnniresven">
              <div>
                <button
                  onClick={() => handleAddcountry(selectCountry)}
                >{`Add >>`}</button>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveCountry(selectRemoveCountry)}
                >{`<< Remove`}</button>
              </div>
            </div>
            <div className="selectedcountr">
              <strong className="bodytitlle">Selected Countries</strong>
              <div className="countirescontainerlist">
                <select
                  id="all_countries"
                  name="all_countries"
                  onChange={(e) => setSelectRemoveCountry(e.target.value)}
                  size="18"
                  style={{ width: "250px", height: "380px" }}
                  className="bdv_000000_Text_11"
                  ondblclick="move(this.form.all_countries,this.form.selected_countries, 1);"
                >
                  {selectedCountries?.map((item) => (
                    <option
                      value={item}
                      className="bdv_000000_Text_11"
                      cont="North &amp; Central America"
                      cont2=""
                      selected=""
                      style={{
                        background:
                          "url('https://my.bidvertiser.com/BidVertiser/Images/flags/US.svg') no-repeat",
                        backgroundSize: "17px 15px",
                        backgroundPosition: "2px 2px",
                        paddingLeft: "23px",
                      }}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <label
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "12px",
              cursor: "default",
            }}
            id="clearSelector"
            for="Enable_Region_Targeting_ID"
          >
            <input
              type="Checkbox"
              style={{ position: "relative", top: "2px" }}
              id="Enable_Region_Targeting_ID"
              name="Enable_Region_Targeting"
              value=""
              onchange="checkStatesDisabled();"
            />{" "}
            <b>Enable Region/State Targeting</b> (Max 1 country selected)
          </label>
          <td colspan="3" style={{ lineHeight: "10px" }} align="left">
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "12px",
                cursor: "default",
              }}
              id="clearSelector"
              htmlFor="Enable_City_Targeting_ID"
            >
              <input
                type="checkbox"
                style={{ position: "relative", top: "2px" }}
                id="Enable_City_Targeting_ID"
                disabled=""
                name="Enable_City_Targeting"
                value=""
                onChange={checkCitiesDisabled}
              />
              <b>Enable City Targeting</b> (Max 5 regions/states selected)
            </label>
          </td>
          <br />
          <td colspan="4" align="left">
            <label
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "12px",
                cursor: "default",
              }}
              id="clearSelector"
              htmlFor="Enable_Zip_Targeting_ID"
            >
              <input
                type="checkbox"
                style={{ position: "relative", top: "2px" }}
                id="Enable_Zip_Targeting_ID"
                name="Enable_Zip_Targeting"
                value=""
                onChange={checkZipDisabled}
              />
              <i
                className="fa-solid fa-location-dot"
                style={{
                  color: "var(--lightBlue)",
                  marginRight: "5px",
                  fontSize: "17px",
                }}
              ></i>
              <i
                className="fa-solid fa-location-dot"
                style={{
                  color: "var(--lightBlue)",
                  marginRight: "5px",
                  fontSize: "17px",
                }}
              ></i>
              <strong style={{ color: "var(--lightGreen)" }}>Go Local</strong> -
              Target users around you! (Max 1 country selected)
            </label>
          </td>
        </div>{" "}
        <br /> <br />
        <center id="ad_select" className="buttonlargetwo">
          <button id="desk_select" class="function-button">
            Back
          </button>
          <button
            onClick={handleClickNext}
            id="mob_select"
            class="function-button"
            style={{ margin: "5px" }}
          >
            Next
          </button>
        </center>
      </div>
    </div>
  );
};

export default Geo;
