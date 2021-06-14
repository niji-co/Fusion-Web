import React, { useState } from "react";

import api from "api/fakeUserAPI";
import ProfileView from "components/ProfileView";
import { ProfileModel, ProfileQueryModel } from "models/User";

const ProfileLoader: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => {
  const [profile, setProfile] = useState<ProfileModel>();

  if (profile === undefined) {
    const fetchProfile = api.fetchWithUsername(username);
    fetchProfile
      .then(setProfile)
      .catch(err => console.log("Error fetching profile", err));
    return <h1>Loading</h1>;
  }

  return <ProfileView {...profile} />;
};

export default ProfileLoader;
