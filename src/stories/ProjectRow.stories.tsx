import React from "react";
import { Story, Meta } from "@storybook/react";

import ProjectRow, {
  ProjectRowProps,
  ProjectRowType,
  ProjectRowTextProps,
  TextStyle,
} from "../pages/Project/Row";

export default {
  title: "Project/Row",
  component: ProjectRow,
} as Meta;

const Template: Story<ProjectRowProps> = args => <ProjectRow {...args} />;

export const Text = Template.bind({});
Text.args = {
  index: 0,
  type: ProjectRowType.Text,
  content: "Hello there",
  style: TextStyle.p,
} as ProjectRowTextProps;