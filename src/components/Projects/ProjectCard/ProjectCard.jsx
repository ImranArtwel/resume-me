import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 className="project-title">{details.title}</h6>
        {details.link && (
          <a
            className="contact-btn"
            href={details.link}
            target="_blank"
            rel="noreferrer"
          >
            Visit Site
          </a>
        )}
      </div>

      <p className="project-desc">{details.description}</p>

      <div className="project-img">
        <img
          src={details.image}
          alt={details.title}
          width="400px"
          height="300px"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
