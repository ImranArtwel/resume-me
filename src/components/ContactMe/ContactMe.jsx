import React from "react";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Connect With Me</h5>

      <div className="contact-content">
        <ContactInfoCard
          iconUrl="./assets/images/email-icon.svg"
          text="imran.artwell@gmail.com"
          className="contact-info-card"
        />

        <ContactInfoCard
          iconUrl="./assets/images/github-icon.svg"
          text="https://github.com/ImranArtwel"
          className="contact-info-card"
        />

        <ContactInfoCard
          iconUrl="./assets/images/linkedin.png"
          text="https://www.linkedin.com/in/imranartwel/"
          className="contact-info-card"
        />

        {/* <div style={{ flex: 1 }}>
          <ContactForm />
        </div> */}
      </div>
    </section>
  );
};

export default ContactMe;
