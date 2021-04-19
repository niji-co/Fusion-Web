import Section from "../../Section/models/SectionProps";
import Role from "../../Role/models/RoleProps";

enum VisibilityTypes {
  Public,
  Exclusive,
  Private,
}

interface ExhibitionProps {
  UUID: string;
  host: string;
  coHost: string[];
  title: string;
  description: string;
  keywords: string;
  sections: Section[];
  roles: Role[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

export default ExhibitionProps;

export { VisibilityTypes };