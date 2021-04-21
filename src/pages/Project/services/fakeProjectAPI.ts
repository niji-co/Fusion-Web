import server from "../../../dev/server";
import ProjectProps from "../models/ProjectProps";

const projectAPI = {
  fetchAll: async (): Promise<{ projects: ProjectProps[] }> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 10));
    return server;
  },
  fetchWithTitle: async (t: string): Promise<ProjectProps | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 10));
    return server.projects.find(({ title }) => title === t);
  },
};

export default projectAPI;
