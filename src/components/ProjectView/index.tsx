import React, { ReactElement, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectRow from "components/ProjectRow";
import TagList from "components/TagList";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

type ProjectProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
  rows: ProjectRowModel[] | undefined;
} & HTMLAttributes<HTMLElement>;

const ProjectView = ({
  author,
  title,
  tagFlags,
  thumbnail,
  authorProfile,
  rows,
  ...rest
}: ProjectProps): ReactElement => {
  const allTagNames = authorProfile?.tags || [];
  const allTags = allTagNames.map(
    (t, i): TagModel => ({
      flag: 1 << i,
      name: t,
      username: author,
    })
  );
  const filteredTags = allTags.filter(t => t.flag & tagFlags);

  return (
    <div {...rest}>
      <img alt={thumbnail.name} src={thumbnail.url} />
      <h1>{title}</h1>
      <Link to={`/${author}`}>{authorProfile?.displayName || author}</Link>
      <br />
      <TagList tags={filteredTags} />
      {rows?.map(row => (
        <ProjectRow key={row.id} model={row} />
      ))}
    </div>
  );
};

export default ProjectView;
