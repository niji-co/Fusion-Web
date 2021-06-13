import server from "dev/server";
import { ProfileModel } from "models/User";

const userAPI = {
  fetchWithUUID: async (_uuid: string): Promise<ProfileModel | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ uuid }) => uuid === _uuid);
  },

  fetchWithUsername: async (
    _username: string
  ): Promise<ProfileModel | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ username }) => username === _username);
  },

  fetchUUID: async (_username: string): Promise<string | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ username }) => username === _username)?.uuid;
  },

  fetchUsername: async (_uuid: string): Promise<string | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ uuid }) => uuid === _uuid)?.username;
  },
};

export default userAPI;
