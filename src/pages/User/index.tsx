import React, { ReactElement } from "react";
import { useParams, useLocation } from "react-router-dom";

import UserLayout from "layouts/User";
import { ProfileQueryModel } from "models/User";

const User = (): ReactElement => {
  const { username } = useParams<ProfileQueryModel>();
  const query = new URLSearchParams(useLocation().search);
  return (
    <UserLayout
      username={username}
      tags={parseInt(query.get("tags") || "0", 10)}
    />
  );
};

export default User;
