import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span>
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="footer-text">Information</span>
          <span>MMMUT Gorakhpur , CSE Dept , 273010</span>
        </div>
      </div>
    </div>

    </>
    
  );
};

export default Footer;
