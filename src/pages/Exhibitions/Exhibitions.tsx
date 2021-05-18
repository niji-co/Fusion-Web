// Libraries
import React from "react";
import { Link } from "react-router-dom";

import { SectionProps } from "./Section";
import { RoleProps } from "./Role";
// Styles
import "./style.css";

enum VisibilityTypes {
  Public,
  Exclusive,
  Private,
}

interface ExhibitionProps {
  UUID: string;
  host: string;
  coHost: string[];
  title: string;
  description: string;
  keywords: string;
  sections: SectionProps[];
  roles: RoleProps[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

const Exhibitions: React.FC = () => (
  <div className="exhibitions">
    <h1>Exhibitions</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/profile">Profile</Link>
    <br />
    <Link to="/exhibitions/host">Host</Link>
    <br />
  </div>
);

export default Exhibitions;
