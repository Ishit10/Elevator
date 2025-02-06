import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section" >
          <h3>About Us</h3>
          <p>
            Prince Elevator Lifts is a manufacturer of the most advanced and
            cost-efficient home lifts technology available today. We have
            achieved the above and much more, with our European Quality and TÜV
            SÜD ISO 9001:2015 QMS standards Certified.
          </p>
        </div>

        <div className="footer-section" >
          <h3>Head Office Address</h3>
          <p>
            PRINCE ELEVATOR PRIVATE LIMITED,
            <br />
            G1. Harsh Apartment, 
            <br />
            Nr. Kumkum Vidhyalaya,
            <br />
            Maninagar, Ahmedabad - 380008, INDIA.
            <br />
            ISO 9001:2015 Certified
          </p>
        </div>


        <div className="footer-section" >
          <h3>Office Address</h3>
          <p>
            PRINCE ELEVATOR PRIVATE LIMITED,
            <br />
            Shop No SF 21 Vrund Complex,
            <br />
            Akota Road, B P C Road,
            <br />
            Akota, Vadodara - 390020, INDIA.
            <br />
            ISO 9001:2015 Certified
          </p>
        </div>

        <div className="footer-section" >
          <h3>For Support</h3>
          <p>
            <strong>Phone:</strong> +91 9898638415
            <br />
            <strong>Email:</strong> prince.elevator@gmail.com
            <br />
            <strong>Website:</strong> www.princeelevaator.com
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon facebook" aria-label="Facebook"></a>
            <a href="#" className="social-icon twitter" aria-label="Twitter"></a>
            <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn"></a>
            <a href="#" className="social-icon youtube" aria-label="YouTube"></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Prince Elevator. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
