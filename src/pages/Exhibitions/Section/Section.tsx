// Libraries
import React from "react";
// Styles
import "./style.css";

interface SectionProps {
  sectionName: string;
  exhibitor: string;
}

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
