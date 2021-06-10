import AssetModel from "models/Asset";

interface ProfileModel {
  profilePicture: AssetModel;
  displayName: string;
  bio: string;
  contactEmail: string;
  contactNumber: string;
}

export default ProfileModel;
