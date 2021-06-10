import AssetModel from "models/Asset";

interface ProfileModel {
  uuid: string;
  profilePicture: AssetModel;
  displayName: string;
  bio: string;
  contactEmail: string;
  contactNumber: string;
}

export default ProfileModel;
