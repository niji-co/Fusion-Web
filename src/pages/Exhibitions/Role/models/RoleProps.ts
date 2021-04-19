enum RoleTypes{
  Host,
  Exhibitor,
  Viewer,
  Public,
}

interface RoleProps {
  role: RoleTypes;
}

export default RoleProps;

export { RoleTypes };