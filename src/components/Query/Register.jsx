import React from "react";
import "./Register.css"

const Register = () => {
    return (
        <div className="register">
            <div className="header">
            <h1>Join the MyFastX Community Today!</h1>
            </div>
            <div className="content">
            <h2>Ready to Get Started?</h2>
            <p>
                Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just <span className="highlight">Rs.999</span> and start driving your way to success with MyFastX!
            </p>
            <button className="register-button">Register Now</button>
            </div>
            <div className="contact-info">
            <p>For more information, contact us at:</p>
            <div className="contact-methods">
                <div className="contact-item">
                <span role="img" aria-label="phone" className="icon">📞</span>
                <span className="contact-text">+91-XXXXX XXXXX</span>
                </div>
                <div className="contact-item">
                <span role="img" aria-label="email" className="icon">✉️</span>
                <span className="contact-text">support@myfastx.com</span>
                </div>
            </div>
          </div>
        </div>
    );
}
  
  export default Register;