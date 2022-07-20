import React, { ReactElement, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import ProjectTagList from "containers/ProjectTagList";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

type ProjectHeaderProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
} & HTMLAttributes<HTMLElement>;

const ProjectHeader = ({
  author,
  title,
  tagFlags,
  thumbnail,
  authorProfile,
  ...rest
}: ProjectHeaderProps): ReactElement => (
  <div {...rest}>
    <img alt={thumbnail.name} src={thumbnail.url} />
    <h1>{title}</h1>
    <Link to={`/${author}`}>{authorProfile?.displayName || author}</Link>
    <br />
    <ProjectTagList
      author={author}
      tagFlags={tagFlags}
      authorProfile={authorProfile}
    />
  </div>
);

export default ProjectHeader;
