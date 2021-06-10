import AssetModel from "models/Asset";

interface UserModel {
  uuid: string;
  profilePicture: AssetModel;
  displayName: string;
  bio: string;
  contactEmail: string;
  contactNumber: string;
}

export default UserModel;
