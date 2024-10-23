import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { TESTIMONIALS } from "../../utils/data";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="testimonial" className="experience-container">
      <h5>Testimonials</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">
            <FaChevronRight size={22} />
          </span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span class="material-symbols-outlined">
            <FaChevronLeft size={22} />
          </span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
