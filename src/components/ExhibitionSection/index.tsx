import React, { HTMLAttributes } from "react";
import SectionModel from "models/ExhibitionSection";

type SectionProps = SectionModel & HTMLAttributes<HTMLElement>;

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
