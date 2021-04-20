import { SectionProps } from "../../Section";
import { RoleProps } from "../../Role";

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
  sections: SectionProps[];
  roles: RoleProps[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

export default ExhibitionProps;

export { VisibilityTypes };
