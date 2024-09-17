import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Crafting Code, Shaping a Better Future</h2>
        <p>
          Dedicated Frontend Developer | Turning Concepts into Engaging,
          Intuitive, and Beautiful Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.png" alt="" />
          </div>
          <img src="./assets/images/imz.jpeg" alt="" />
          <div className="tech-icon">
            <img src="./assets/images/node.png" alt="" />
          </div>
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/ts.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
