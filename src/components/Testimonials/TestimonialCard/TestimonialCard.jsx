import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ details }) => {
  return (
    <div className="testimonial-card">
      <div className="work-duration">{details.user}</div>

      <p>{details.text}</p>
    </div>
  );
};

export default TestimonialCard;
