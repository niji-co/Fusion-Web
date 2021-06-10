import server from "dev/server";

const userAPI = {
  fetchAll: async (): Promise<any[] | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 10000));
    return server.users;
  },
  fetchWithUUID: async (_uuid: string): Promise<any | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ uuid }) => uuid === _uuid);
  },
  fetchWithUsername: async (_username: string): Promise<any | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.users.find(({ username }) => username === _username);
  },
};

export default userAPI;
