import SectionModel from "../Section/models/SectionModel";
import RoleModel from "../Role/models/RoleModel";

enum VisibilityTypes {
  Public,
  Exclusive,
  Private,
}

interface ExhibitionModel {
  UUID: string;
  host: string;
  coHost: string[];
  title: string;
  description: string;
  keywords: string;
  sections: SectionModel[];
  roles: RoleModel[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

export default ExhibitionModel;

export { VisibilityTypes };
