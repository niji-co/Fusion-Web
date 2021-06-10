import React from "react";
import { useParams } from "react-router-dom";

import ProfileLayout from "layouts/Profile";
import { ProfileQueryModel } from "models/User";

const Profile: React.FC = () => {
  const { username } = useParams<ProfileQueryModel>();
  return <ProfileLayout username={username} />;
};

export default Profile;
