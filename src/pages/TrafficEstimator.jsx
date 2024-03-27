import React from "react";
import "../styles/TrafficEstimator.css";
import Header from "../components/Header";
const TrafficEstimator = () => {
  return (
    <div className="TrafficEstimatorcontainer">
      <Header routename="Traffic Estimator" />
      <div className="trafficeEstimatorbodyContainer">
        <div className="main_box_style">
          <h3>Traffic Estimator</h3>
          <p className="trafficpresebody">
            Choose ad format and platform type to view daily traffic estimation
            and recommended minimum bid:
          </p>
          <div className="selectcontainer">
            <select name="zero_click" id="zero_clickID" className="selectonctinaertraffic">
              <option value="NULL" selected="">
                Select Ad Format
              </option>
              <option value="0">InPage Push</option>
              <option value="-1">Direct</option>
              <option value="2">Pop-Under</option>
              <option value="3">Push</option>
              <option value="4">Native</option>
            </select>
            <select name="device_type" id="device_typeID" className="selectonctinaertraffic">
              <option value="NULL" selected="">
                Select Platform Type
              </option>
              <option value="0">Desktop</option>
              <option value="1">Mobile</option>
            </select>
            <select name="is_adult" id="is_adultID" className="selectonctinaertraffic">
              <option value="NULL" selected="">
                Select Traffic Source Type
              </option>
              <option value="0">Mainstream</option>
              <option value="2">Adult</option>
            </select>
            <input
              type="submit"
              className="traffestmiatorbutton"
              value="Generate"
              name="submit"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficEstimator;
