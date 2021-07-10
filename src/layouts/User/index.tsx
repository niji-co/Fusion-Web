import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import ProfileView from "components/ProfileView";
import ProjectList from "components/ProjectList";
import TagList from "components/TagList";
import ProjectModel from "models/Project";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

interface UserLayoutProps {
  profile: ProfileModel;
  tagObjects: TagModel[];
  tags: number;
  projects: ProjectModel[];
}

const UserLayout = ({
  profile,
  tagObjects,
  tags,
  projects,
}: UserLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <ProfileView {...profile} />
    <TagList tags={tagObjects} currentFilter={tags} />
    <ProjectList projects={projects} />
  </>
);

export default UserLayout;
