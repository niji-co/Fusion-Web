interface ProjectProps {
  title: string;
  tags: string[];
}

const defaultValue: ProjectProps = {
  title: "",
  tags: [],
};

export default ProjectProps;
export { defaultValue };
