import { useState, useEffect } from "react";

import projectAPI from "api/fakeProjectAPI";
import ProjectRowModel from "models/ProjectRow";

const useProjectRows = (
  authorUsername: string,
  projectTitle: string
): ProjectRowModel[] | undefined => {
  const [rows, setRows] = useState<ProjectRowModel[]>();

  useEffect(() => {
    projectAPI
      .fetchProjectRows(authorUsername, projectTitle)
      .then(setRows)
      .catch(err => console.error("Error fetching project rows", err));
  }, [authorUsername, projectTitle]);

  return rows;
};

export default useProjectRows;
