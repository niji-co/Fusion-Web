// Libraries
import React from "react";
import { Link } from "react-router-dom";
import SectionProps from "./models/SectionProps";
// Styles
import "./style.css";

const Section: React.FC<SectionProps> = (props: SectionProps) => (
  <div>
    <h2>{props.sectionName}</h2>
    <br />
    <h3>{props.exhibitor}</h3>
  </div>
);

export default Section;
