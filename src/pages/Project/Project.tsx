import React from "react";
import { Link } from "react-router-dom";
import ProjectProps from "./models/ProjectProps";
// Styles
import "./style.css";

const Project: React.FC<ProjectProps> = ({ title }: ProjectProps) => (
  <div className="project">
    <h1>{title}</h1>
    <Link to="/">Home</Link>
  </div>
);

export default Project;
