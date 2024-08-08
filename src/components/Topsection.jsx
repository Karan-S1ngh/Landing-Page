import React from 'react';
import './CSS/Topsection.css';
import truck_icon from '../assets/truck-image.png'
import reliable_income from '../assets/reliable-income-icon.png'
import flexible_schedule from '../assets/flexible-schedule-icon.png'
import online_support from '../assets/online-support-icon.png'
import growth_opportunities from '../assets/growth-opportunities-icon.png'

const Topsection = () => {
  return (
    <div className="top-section">
      <div className="left">
        <div className="image-container">
          <img src={truck_icon} alt="Truck" className="truck-image" />
        </div>
        <div className="text-container">
          <h2>Welcome to MyFast<span className="highlight">X Partner</span></h2>
          <p className="subheading">Quick & Reliable Delivery and Logistics Solution</p>
          <p className="description">
            At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
          </p>
        </div>
      </div>
      <div className='right'>
        <div className="register-section">
            <h3>Drive Your Success with MyFastX</h3>
            <h2>Join Us as a Partner Driver</h2>
            <p className="register-description">
            Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you'll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
            </p>
            <button className="register-button">Register now for just Rs. 999!</button>
        </div>
        <div className="benefits-section">
            <div className="benefit">
                <img src={reliable_income} alt="Reliable Income" />
                <h4>Reliable Income</h4>
                <p>Earn a steady income with consistent delivery requests.</p>
            </div>
            <div className="benefit">
                <img src={flexible_schedule} alt="Flexible Schedule" />
                <h4>Flexible Schedule</h4>
                <p>Choose your working hours and balance your personal life.</p>
            </div>
            <div className="benefit">
                <img src={online_support} alt="Support" />
                <h4>Support</h4>
                <p>Access our dedicated support team whenever you need assistance.</p>
            </div>
            <div className="benefit">
                <img src={growth_opportunities} alt="Growth Opportunities" />
                <h4>Growth Opportunities</h4>
                <p>Advance your career with regular training and development programs.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Topsection;
