import ProfileModel from "./Profile";

interface UserModel extends ProfileModel {
  email: string;
  password: string;
}

export default UserModel;
export { ProfileModel };
