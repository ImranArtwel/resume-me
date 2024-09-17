import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6 className="project-title">{details.title}</h6>

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
