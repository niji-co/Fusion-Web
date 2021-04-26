import server from "../../../dev/server";

const projectAPI = {
  fetchAll: async (): Promise<{ projects: any[] }> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 10000));
    return server;
  },
  fetchWithTitle: async (t: string): Promise<any | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.projects.find(({ title }) => title === t);
  },
};

export default projectAPI;
