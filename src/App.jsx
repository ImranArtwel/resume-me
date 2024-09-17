import React from "react";
import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonials";
import WorkExperience from "./components/WorkExperience/WorkExperience";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <Testimonial />
        <ContactMe />
      </div>

      <Footer />
    </>
  );
};

export default App;
