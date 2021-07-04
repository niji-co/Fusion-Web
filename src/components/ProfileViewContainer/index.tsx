import React, { useState, useEffect } from "react";

import api from "api/fakeUserAPI";
import ProfileView from "components/ProfileView";
import { ProfileModel, ProfileQueryModel } from "models/User";

const ProfileViewContainer: React.FC<ProfileQueryModel> = ({
  username,
}: ProfileQueryModel) => {
  const [profile, setProfile] = useState<ProfileModel>();

  useEffect(() => {
    api
      .fetchWithUsername(username)
      .then(setProfile)
      .catch(err => console.error("Error fetching profile", err));
  }, [username]);

  return profile === undefined ? (
    <h1>Loading</h1>
  ) : (
    <ProfileView {...profile} />
  );
};

export default ProfileViewContainer;
