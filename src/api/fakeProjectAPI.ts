import server from "dev/server";
import ProjectModel from "models/Project";

const projectAPI = {
  fetchAll: async (): Promise<ProjectModel[] | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 10000));
    return server.projects;
  },
  fetchWithTitle: async (_title: string): Promise<ProjectModel | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.projects.find(({ title }) => title === _title);
  },
};

export default projectAPI;
