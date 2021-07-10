import ProfileModel from "./_Profile";
import ProfileQueryModel from "./_ProfileQueryModel";

interface UserModel extends ProfileModel {
  uuid: string;
  username: string;
  email: string;
  password: string;
}

export default UserModel;
export { ProfileModel, ProfileQueryModel };
