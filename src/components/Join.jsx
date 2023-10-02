import React from "react";
// its css is written in app.css
import mail from "../assets/images/mail.png";
const Join = () => {
  return (
    <section id="join">
      <h1 className="mainHeading"># Join Us</h1>
      <div className="joinContentWrapper">
        <img src={mail} alt="" height="400px" />
        <div className="joinSectionLeftArea">
          <p>
            &ldquo;Subscribe to our newsletter and join us in unlocking the full
            potential of cryptocurrency with our cutting-edge data services
            &rdquo;
          </p>
          <div className="mailInput">
            <input type="text" placeholder="Enter Your Email Address" />
            <button onClick={(e) => e.preventDefault()}>
              <div className="insideBtn">
                <lord-icon
                  src="https://cdn.lordicon.com/rhvddzym.json"
                  trigger="click"
                  colors="primary:white,secondary:#08a88a"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
