import React from "react";
import "./DestinationsStyles.css";

import BoraBora from "../../assets/ooty5.jpg";
import BoraBora2 from "../../assets/ooty4.jpg";
import Maldives from "../../assets/ooty3.jpg";
import Maldives2 from "../../assets/ooty2.jpg";
import KeyWest from "../../assets/ooty1.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On Tamil Nadu best places</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={BoraBora} alt="/" />
          <img src={BoraBora2} alt="/" />
          <img src={Maldives} alt="/" />
          <img src={Maldives2} alt="/" />
          <img src={KeyWest} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
