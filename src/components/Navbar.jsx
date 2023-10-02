import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Navbar = ({ display, backgroundColor, add }) => {
  return (
    <nav style={{ backgroundColor }}>
      {add ? <a href="#home">COINSTEIN</a> : <Link to="/">COINSTEIN</Link>}
      <div className="midNav" style={{ display }}>
        <a href="#home" className="midnavLinks">
          Home
        </a>
        <a href="#market" className="midnavLinks">
          Market
        </a>
        <a href="#about" className="midnavLinks">
          About Us
        </a>
        <a href="#join" className="midnavLinks">
          Join us
        </a>
      </div>
      <div className="rightNav" style={{ display }}>
        <a href="#home">
          <FontAwesomeIcon
            icon={faDiscord}
            style={{
              color: "white",
              height: "23px",
              width: "23px",
            }}
          />
        </a>
        <a href="#home">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "white", height: "20px", width: "20px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
