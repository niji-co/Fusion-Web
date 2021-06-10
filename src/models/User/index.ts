import ProfileModel from "./Profile";
import ProfileQueryModel from "./ProfileQueryModel";

interface UserModel extends ProfileModel {
  uuid: string;
  username: string;
  email: string;
  password: string;
}

export default UserModel;
export { ProfileModel, ProfileQueryModel };
