import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Vinjari</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Make it easier to find your dream vacation and home
          </span>
          <button className="button" href>
            <a href="Trunkssoner@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
