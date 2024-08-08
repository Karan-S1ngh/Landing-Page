import React from "react";
import "./CSS/Footer.css";
import footer from '../assets/footer.png' 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footer} alt="Footer" />
    </footer>
  );
};

export default Footer;
