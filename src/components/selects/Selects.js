import React from "react";
import "./SelectsStyles.css";

import BoraBora from "../../assets/ooty5.jpg";
import BoraBora2 from "../../assets/ooty4.jpg";
import Maldives from "../../assets/ooty1.jpg";
import Maldives2 from "../../assets/ooty3.jpg";
import Maldives3 from "../../assets/ooty2.jpg";
import KeyWest from "../../assets/ooty4.jpg";

import SelectsImg from "../SelectsImg/SelectsImg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={BoraBora} text="Ooty" />
        <SelectsImg bgImg={BoraBora2} text="Temple" />
        <SelectsImg bgImg={Maldives} text="Yercard" />
        <SelectsImg bgImg={Maldives2} text="Chennai beach" />
        <SelectsImg bgImg={Maldives3} text="Kannyakumari" />
        <SelectsImg bgImg={KeyWest} text="Temple" />
      </div>
    </div>
  );
}

export default Selects;
