import { useState, useEffect } from "react";

import api from "api/fakeUserAPI";
import { ProfileModel } from "models/User";

const useProfileWithUsername = (username: string): ProfileModel | undefined => {
  const [profile, setProfile] = useState<ProfileModel>();

  useEffect(() => {
    api
      .fetchWithUsername(username)
      .then(setProfile)
      .catch(err => console.error("Error fetching profile", err));
  }, [username]);

  return profile;
};

export default useProfileWithUsername;
