import React from "react";
import { Link } from "react-router-dom";

import ProfileViewContainer from "components/ProfileViewContainer";
import ProjectListContainer from "components/ProjectListContainer";
import TagListContainer from "components/TagListContainer";
import { ProjectFilterModel } from "models/Project";
import { ProfileQueryModel } from "models/User";

type ProfileLayoutProps = ProfileQueryModel & ProjectFilterModel;

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
  username,
  tags,
}: ProfileLayoutProps) => (
  <>
    <Link to="/">Home</Link>
    <ProfileViewContainer username={username} />
    <TagListContainer username={username} tags={tags} />
    <ProjectListContainer username={username} tags={tags} />
  </>
);

export default ProfileLayout;
