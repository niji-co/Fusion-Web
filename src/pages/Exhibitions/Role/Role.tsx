// Libraries
import React from "react";
import RoleProps from "./models/RoleProps";
// Styles
import "./style.css";

const Role: React.FC<RoleProps> = ({ role }: RoleProps) => (
  <div>
    <h3>{role}</h3>
  </div>
);

export default Role;
