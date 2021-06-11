import server from "dev/server";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";

import userAPI from "./fakeUserAPI";

const projectAPI = {
  fetchWithTitle: async (
    _author: string,
    _title: string
  ): Promise<ProjectModel | undefined> => {
    const authorUUID = await userAPI.fetchUUID(_author);
    if (authorUUID === undefined) return undefined;

    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    const project = server.projects.find(
      ({ author, title }) => author === authorUUID && title === _title
    );
    if (project === undefined) return undefined;

    return {
      ...project,
      author: _author,
    };
  },
  fetchRowsWithTitle: async (
    _author: string,
    _title: string
  ): Promise<ProjectRowModel[] | undefined> => {
    const authorUUID = await userAPI.fetchUUID(_author);
    if (authorUUID === undefined) return undefined;

    // TODO(IRWEN): replace with actual API calls
    await new Promise(resolve => setTimeout(resolve, 1000));
    const project = server.projects.find(
      ({ author, title }) => author === authorUUID && title === _title
    );

    return project?.rows;
  },
};

export default projectAPI;
