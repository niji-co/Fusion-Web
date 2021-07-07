import React, { ReactElement, HTMLAttributes } from "react";

import RoleModel from "models/ExhibitionRole";

type RoleProps = RoleModel & HTMLAttributes<HTMLElement>;

const Role = ({ role }: RoleProps): ReactElement => (
  <div>
    <h3>{role}</h3>
  </div>
);

export default Role;
