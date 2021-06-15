import server from "dev/server";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";

import userAPI from "./fakeUserAPI";

const projectAPI = {
  fetchProjects: async (
    authorUsername: string
  ): Promise<ProjectModel[] | undefined> => {
    const authorUUID = await userAPI.fetchUUID(authorUsername);
    if (authorUUID === undefined) return undefined;

    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    return server.projects
      .filter(({ author }) => author === authorUUID)
      .map(project => ({ ...project, author: authorUsername }));
  },

  fetchProject: async (
    authorUsername: string,
    projectTitle: string
  ): Promise<ProjectModel | undefined> => {
    const authorUUID = await userAPI.fetchUUID(authorUsername);
    if (authorUUID === undefined) return undefined;

    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    const project = server.projects.find(
      ({ author, title }) => author === authorUUID && title === projectTitle
    );
    if (project === undefined) return undefined;

    return {
      ...project,
      author: authorUsername,
    };
  },

  fetchProjectRows: async (
    authorUsername: string,
    projectTitle: string
  ): Promise<ProjectRowModel[] | undefined> => {
    const authorUUID = await userAPI.fetchUUID(authorUsername);
    if (authorUUID === undefined) return undefined;

    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    const project = server.projects.find(
      ({ author, title }) => author === authorUUID && title === projectTitle
    );

    return project?.rows;
  },
};

export default projectAPI;
