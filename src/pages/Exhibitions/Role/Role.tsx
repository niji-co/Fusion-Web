// Libraries
import React from "react";
import { Link } from "react-router-dom";
import RoleProps from "./models/RoleProps";
// Styles
import "./style.css";

const Role: React.FC<RoleProps> = (props: RoleProps) => (
  <div>
    <h3>{props.role}</h3>
  </div>
);

export default Role;
