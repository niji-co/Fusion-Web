import React from "react";
import { useParams, useLocation } from "react-router-dom";

import ProfileLayout from "layouts/Profile";
import { ProfileQueryModel } from "models/User";

const Profile: React.FC = () => {
  const { username } = useParams<ProfileQueryModel>();
  const query = new URLSearchParams(useLocation().search);
  return (
    <ProfileLayout
      username={username}
      tags={parseInt(query.get("tags") || "0", 10)}
    />
  );
};

export default Profile;
