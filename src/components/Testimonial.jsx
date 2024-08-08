import React from 'react';
import traffic_testimonial from '../assets/testimonial.png';
import './CSS/Testimonial.css';
import TestimonialSlider from './People Testimonial/TestimonialSlider';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className='tes-left'>
        <div className="section-header">
            <span className="partner-title">What our partner says</span>
            <h2 className="testimonials-title">Testimonials</h2>
            <hr />
        </div>
        <div className="testimonials-content">
            <p>
            At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers.
            Here's what they have to say about their experiences with our quick and reliable delivery and logistics services.
            </p>
        </div>
        <div className='testimonial-traffic-image'>
            <img src={traffic_testimonial} alt="" />
        </div>
      </div>
      <div className='tes-right'>
        <TestimonialSlider/>
      </div>
    </div>
  );
};

export default Testimonials;