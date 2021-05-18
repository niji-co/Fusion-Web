// Libraries
import React from "react";
// Styles
import "./style.css";

enum RoleTypes {
  Host,
  Exhibitor,
  Viewer,
  Public,
}

interface RoleProps {
  role: RoleTypes;
}

const Role: React.FC<RoleProps> = ({ role }: RoleProps) => (
  <div>
    <h3>{role}</h3>
  </div>
);

export default Role;
