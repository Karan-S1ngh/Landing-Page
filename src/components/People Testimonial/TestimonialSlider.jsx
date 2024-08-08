import React, { useState } from "react";
import Testimonial from "./People_Testimonial";
import './People_Testimonial.css'
import Image from '../../assets/People.png'

const testimonials = [
  {
    id: 1,
    name: "James Darwin",
    location: "Kolkata, West Bengal",
    text: "Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.",
    rating: 5,
    image: Image,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    location: "Mumbai, Maharashtra",
    text: "MyFastX has provided me with opportunities I never thought possible. The team is supportive and the work is rewarding.",
    rating: 4,
    image: Image,
  },
  {
    id: 3,
    name: "Liam Zhang",
    location: "Delhi, India",
    text: "Thanks to MyFastX, I can now have a better work-life balance. It's been an incredible journey so far!",
    rating: 5,
    image: Image,
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <Testimonial
        key={testimonials[currentTestimonial].id}
        data={testimonials[currentTestimonial]}
      />
      <div className="navigation">
        <button onClick={handlePrev}>&#8592;</button>
        <div className="indicators">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.id}
              className={`indicator ${
                index === currentTestimonial ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
        <button onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
