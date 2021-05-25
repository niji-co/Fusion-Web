enum RoleTypes {
  Host,
  Exhibitor,
  Viewer,
  Public,
}

interface RoleModel {
  role: RoleTypes;
}

export default RoleModel;

export { RoleTypes };
