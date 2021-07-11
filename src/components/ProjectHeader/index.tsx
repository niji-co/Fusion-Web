import React, { ReactElement, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import TagList from "components/TagList";
import ProjectModel from "models/Project";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

type ProjectProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
} & HTMLAttributes<HTMLElement>;

const ProjectHeader = ({
  author,
  title,
  tagFlags,
  thumbnail,
  authorProfile,
  ...rest
}: ProjectProps): ReactElement => {
  const allTagNames = authorProfile?.tags || [];
  const allTags = allTagNames.map(
    (tag, index): TagModel => ({
      flag: 1 << index,
      name: tag,
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
    </div>
  );
};

export default ProjectHeader;
