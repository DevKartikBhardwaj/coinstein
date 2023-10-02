import React from "react";
import about from "../assets/images/about.png";
const About = () => {
  return (
    <section id="about">
      <h2 className="mainHeading">#About Us</h2>
      <div className="aboutContentWrapper">
        <img src={about} alt="about section img" height={"350px"} />
        <p>
          Explore <br />
          <span className="parahmain">
            Real-Time Cryptocurrency Prices
          </span>{" "}
          <br />
          and make informed investment decisions with our live market data
          tracker
        </p>
      </div>
    </section>
  );
};

export default About;
