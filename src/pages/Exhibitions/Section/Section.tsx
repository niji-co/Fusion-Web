// Libraries
import React from "react";
import SectionProps from "./models/SectionProps";
// Styles
import "./style.css";

const Section: React.FC<SectionProps> = ({
  sectionName,
  exhibitor,
}: SectionProps) => (
  <div>
    <h2>{sectionName}</h2>
    <br />
    <h3>{exhibitor}</h3>
  </div>
);

export default Section;
