import Section from "../../Section/Section";
import Role from "../../Role/Role";

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
  // these two cant find the components somehow
  //sections: Section[];
  //roles: Role[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

export default ExhibitionProps;

export { VisibilityTypes };