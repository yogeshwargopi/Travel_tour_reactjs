import React from "react";
import "./SearchStyles.css";

import Gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Experience the epitome of luxury in Tamil Nadu's diverse and
            enchanting destinations. Our state, known for its rich culture and
            heritage, offers a splendid array of experiences. From the historic
            charm of Chennai to the spiritual allure of Madurai, the natural
            beauty of Ooty, and the cultural treasures of Mahabalipuram, Tamil
            Nadu has it all. Explore pristine beaches, visit ancient temples,
            savor delectable cuisine, and immerse yourself in the vibrant
            traditions of our land.Explore our website to find detailed
            information about attractions, accommodations, and travel tips. Let
            us be your guide as you embark on a memorable journey through Tamil
            Nadu's exquisite landscapes and rich cultural tapestry.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
            <p className="timer">12 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select>
                <option value="1">Chennai</option>
                <option value="1">Coimbatore</option>
                <option value="1">Kannyakumari</option>
                <option value="1">Yercard</option>
                <option value="1">Esha</option>
                <option value="1">pondicherry</option>
                <option value="1">Aurovile</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
