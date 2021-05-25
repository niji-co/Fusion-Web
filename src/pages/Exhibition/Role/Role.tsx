import React, { HTMLAttributes } from "react";
import RoleModel from "./models/RoleModel";
import "./style.css";

type RoleProps = RoleModel & HTMLAttributes<HTMLElement>;

const Role: React.FC<RoleProps> = ({ role }: RoleProps) => (
  <div>
    <h3>{role}</h3>
  </div>
);

export default Role;
