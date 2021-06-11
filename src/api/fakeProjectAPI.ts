import server from "dev/server";
import ProjectModel from "models/Project";

import userAPI from "./fakeUserAPI";

const projectAPI = {
  fetchWithTitle: async (_title: string): Promise<ProjectModel | undefined> => {
    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    const project = server.projects.find(({ title }) => title === _title);
    if (project === undefined) return undefined;

    const author = (await userAPI.fetchUsername(project.author || "")) || "";
    return { ...project, author };
  },
};

export default projectAPI;
