import React from "react";
import './People_Testimonial.css'

const PeopleTestimonial = ({ data }) => {
  const { name, location, text, rating, image } = data;

  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-location">{location}</p>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-rating">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i} className="star">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default PeopleTestimonial;
