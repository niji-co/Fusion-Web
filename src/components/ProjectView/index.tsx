import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectRow from "components/ProjectRow";
import TagList from "components/TagList";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import { ProfileModel } from "models/User";

type ProjectProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
  rows: ProjectRowModel[] | undefined;
} & HTMLAttributes<HTMLElement>;

const ProjectView: React.FC<ProjectProps> = ({
  author,
  title,
  tagFlags,
  thumbnail,
  authorProfile,
  rows,
  ...rest
}: ProjectProps) => {
  const tags = authorProfile?.tags.filter((t, i) => (1 << i) & tagFlags) || [];

  return (
    <div {...rest}>
      <img alt={thumbnail.name} src={thumbnail.url} />
      <h1>{title}</h1>
      <Link to={`/${author}`}>{authorProfile?.displayName || author}</Link>
      <br />
      <TagList tags={tags} />
      {rows?.map(row => (
        <ProjectRow key={row.id} model={row} />
      ))}
    </div>
  );
};

export default ProjectView;
