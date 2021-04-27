import React from "react";
import { Story, Meta } from "@storybook/react";

import ProjectRow, {
  ProjectRowProps,
  ProjectRowType,
  ProjectRowTextProps,
  ProjectRowImageProps,
  ProjectRowVideoProps,
  ProjectRowFileProps,
  TextStyle,
} from "../pages/Project/Row";

import AssetModel from "../models/AssetModel";

export default {
  title: "Project/Row",
  component: ProjectRow,
} as Meta;

const Template: Story<ProjectRowProps> = args => <ProjectRow {...args} />;

export const TextRow = Template.bind({});
TextRow.args = {
  id: "0",
  type: ProjectRowType.Text,
  content: "Hello there",
  style: TextStyle.p,
} as ProjectRowTextProps;

export const ImageRow = Template.bind({});
ImageRow.args = {
  id: "0",
  type: ProjectRowType.Image,
  asset: {
    name: "Unsplash Image",
    url:
      "https://images.unsplash.com/photo-1618178911565-d456ae02c00f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  } as AssetModel,
} as ProjectRowImageProps;

export const VideoRow = Template.bind({});
VideoRow.args = {
  id: "0",
  type: ProjectRowType.Video,
  asset: {
    name: "YouTube Video",
    url: "https://www.youtube.com/watch?v=0pzIBCdJ5Bs",
  } as AssetModel,
} as ProjectRowVideoProps;

export const FileRow = Template.bind({});
FileRow.args = {
  id: "0",
  type: ProjectRowType.File,
  asset: {
    name: "Discord File",
    url: "https://google.com",
  } as AssetModel,
} as ProjectRowFileProps;
