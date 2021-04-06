import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.css";

const Project = (): ReactElement => (
  <div className="project">
    <h1>Project</h1>
    <Link to="/">Home</Link>
  </div>
);

export default Project;
